import React from 'react'
import Item from '../components/Item';
import { 
    Container, 
    Grid, 
    Icon, 
    Menu,
    Segment,
    Sidebar 
} from 'semantic-ui-react';

const ImageContainer = ({ isVisible, showSideBar, images }) => {

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
                    <Item images={images}/>
                </Container>
        </Grid>
    )
}

export default ImageContainer