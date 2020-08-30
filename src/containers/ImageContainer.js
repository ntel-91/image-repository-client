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

const ImageContainer = ({ isVisible, showSideBar }) => {
    let images = [
        { 
            id: 1,
            img_url: 'https://react.semantic-ui.com/images/wireframe/image.png',
            title: 'TEST'
        },
        { 
            id: 2,
            img_url: 'https://react.semantic-ui.com/images/wireframe/image.png',
            title: 'TEST'
        },
        { 
            id: 3,
            img_url: 'https://react.semantic-ui.com/images/wireframe/image.png',
            title: 'TEST'
        },
        { 
            id: 4,
            img_url: 'https://react.semantic-ui.com/images/wireframe/image.png',
            title: 'TEST'
        },
        { 
            id: 5,
            img_url: 'https://react.semantic-ui.com/images/wireframe/image.png',
            title: 'TEST'
        },
        { 
            id: 6,
            img_url: 'https://react.semantic-ui.com/images/wireframe/image.png',
            title: 'TEST'
        },
        { 
            id: 7,
            img_url: 'https://react.semantic-ui.com/images/wireframe/image.png',
            title: 'TEST'
        },
        { 
            id: 8,
            img_url: 'https://react.semantic-ui.com/images/wireframe/image.png',
            title: 'TEST'
        },
        { 
            id: 9,
            img_url: 'https://react.semantic-ui.com/images/wireframe/image.png',
            title: 'TEST'
        },
        { 
            id: 10,
            img_url: 'https://react.semantic-ui.com/images/wireframe/image.png',
            title: 'TEST'
        },
        { 
            id: 11,
            img_url: 'https://react.semantic-ui.com/images/wireframe/image.png',
            title: 'TEST'
        },
        { 
            id: 12,
            img_url: 'https://react.semantic-ui.com/images/wireframe/image.png',
            title: 'TEST'
        },
        { 
            id: 13,
            img_url: 'https://react.semantic-ui.com/images/wireframe/image.png',
            title: 'TEST'
        },
        { 
            id: 14,
            img_url: 'https://react.semantic-ui.com/images/wireframe/image.png',
            title: 'TEST'
        },
        { 
            id: 15,
            img_url: 'https://react.semantic-ui.com/images/wireframe/image.png',
            title: 'TEST'
        },
        { 
            id: 16,
            img_url: 'https://react.semantic-ui.com/images/wireframe/image.png',
            title: 'TEST'
        },
        { 
            id: 17,
            img_url: 'https://react.semantic-ui.com/images/wireframe/image.png',
            title: 'TEST'
        },
        { 
            id: 18,
            img_url: 'https://react.semantic-ui.com/images/wireframe/image.png',
            title: 'TEST'
        },
        { 
            id: 19,
            img_url: 'https://react.semantic-ui.com/images/wireframe/image.png',
            title: 'TEST'
        },
        { 
            id: 20,
            img_url: 'https://react.semantic-ui.com/images/wireframe/image.png',
            title: 'TEST'
        }
    ]
    
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