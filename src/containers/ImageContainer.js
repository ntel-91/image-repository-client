import React, { useEffect } from 'react'
import Item from '../components/Item';
import { 
    Container, 
    Grid, 
    Icon, 
    Menu,
    Segment,
    Sidebar 
} from 'semantic-ui-react';

const ImageContainer = ({ isVisible, showSideBar, images, currentUser, selectImages, setImages }) => {

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/users/${currentUser.id}/items`)
        .then(res => res.json())
        .then(data => {
            setImages(data)
        })
    }, [])

    return (
        <Grid columns={1}>
            <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                onHide={() => showSideBar()}
                vertical
                visible={isVisible}
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