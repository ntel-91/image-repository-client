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

const ImageContainer = (props) => {
    const [visible, setVisible] = useState(false);
    const [images, setImages] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]);

    useEffect(() => {  
        const userId = props.match.params.id
        const token = localStorage.getItem("token")
        fetch(`http://localhost:3000/api/v1/users/${userId}/items`, {
            headers: {
                "Authorization": token
            }
        })
        .then(res => res.json())
        .then(data => {
            setImages(data)
        })
    }, [])

    const uploadPhotos = (fileData) => {
        const formData = new FormData();
        for (let i = 0; i < fileData.length; i++) {
            formData.append("files[]", fileData[i], fileData[i].name)
        }

        const userId = props.match.params.id
        fetch(`http://localhost:3000/api/v1/users/${userId}/items`, {
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
        if (selectedImages.includes(imageId)) {
            const images = selectedImages.filter(id => id !== imageId);
            setSelectedImages(images);
        } else {
            const images = [...selectedImages, imageId];
            setSelectedImages(images);
        }
    }

    const deleteImages = (imagesRemove) => {
        const imagesIds = imagesRemove
        fetch(`http://localhost:3000/api/v1/removeitems`,{
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"   
            },
            body: JSON.stringify({data: imagesRemove})
        })
        .then(res => res.json())
        .then(res => {
            if (res.errors) {
                alert(res.errors);
            } else {
                const updatedImages = images.filter(i => !imagesIds.includes(i.id));
                debugger
                setImages(updatedImages);
                setSelectedImages([]);
            }
        })
    }

    // const unlockImages = (imagesUnlock) => {
    //     const userId = props.match.params.id
    //     fetch(`http://localhost:3000/api/v1/users/${userId}/unlock`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accepts": "application/json"
    //         },
    //         body: JSON.stringify({data: imagesUnlock})
    //     })
    //     .then(res => res.json())
    //     .then(response => {
    //         if (response.errors) {
    //             alert(response.errors);
    //         } else {
    //             debugger
    //             setImages(response);
    //             setSelectedImages([]);
    //         }
    //     })
    // }s

    const unlockImages = (imageId) => {
        const userId = props.match.params.id
        fetch(`http://localhost:3000/api/v1/users/${userId}/items/${imageId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            }
        })
        .then(res => res.json())
        .then(response => {
            if (response.errors) {
                alert(response.errors);
            } else {
                
            }
        })
    }

    return (
        <Grid>
            <NavBar
                selectedImages={selectedImages}
                showSideBar={showSideBar}
                uploadPhotos={uploadPhotos}
                unlockImages={unlockImages}
                deleteImages={deleteImages}
                logOut={props.logOut}
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
                    unlockImages={unlockImages}
                    selectImages={selectImages}
                />
            </Container>
        </Grid>
    )
}

export default ImageContainer