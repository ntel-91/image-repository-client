import React, { useState, useEffect } from 'react'
import Item from '../components/Item';
import NavBar from '../components/NavBar';
import { 
    Container, 
    Grid, 
    Icon, 
    Menu,
    Sidebar
} from 'semantic-ui-react';

const ImageContainer = ({ currentUser, logOut }) => {

    const [visible, setVisible] = useState(false);
    const [images, setImages] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/users/${currentUser.id}/items`)
        .then(res => res.json())
        .then(data => {
            setImages(data)
        })
    }, [])

    const uploadPhoto = (fileData) => {
        const formData = new FormData();
        formData.append("file", fileData)

        fetch('http://localhost:3000/api/v1/items', {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            setImages(data);
        })
    }

    const showSideBar = () => {
        setVisible(!visible);
    }

    const selectImages = (imageId) => {
        const images = [...selectedImages, imageId];
        setSelectedImages(images);
    }

    const deleteImages = (photos) => {
        const photoId = photos[0]
        fetch(`http://localhost:3000/api/v1/items/${photoId}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(res => {
            if (res.errors) {
                alert(res.errors)
            } else {
                const updatedImages = images.filter(i => i.id !== photoId);
                setImages(updatedImages);
            }
        })
    }

    return (
        <Grid>
            <NavBar
                showSideBar={showSideBar}
                uploadPhoto={uploadPhoto}
                selectedImages={selectedImages}
                deleteImages={deleteImages}
                logOut={logOut}
            />
            <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                onHide={() => showSideBar()}
                vertical
                visible={visible}
                width='thin'
            >
                <Menu.Item as='a'>
                    <Icon name='grid layout' />
                    All Photos
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='picture' />
                    Albums
                </Menu.Item>
            </Sidebar>
                <Container style={{ margin: 20 }}>
                    <Item 
                        images={images}
                        selectImages={selectImages}
                    />
                </Container>
        </Grid>
    )
}

export default ImageContainer