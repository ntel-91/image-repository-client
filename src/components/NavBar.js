import React from 'react';
import { Grid, Menu, Icon } from 'semantic-ui-react';

const NavBar = ({ showSideBar, uploadPhotos, selectedImages, unlockImages, deleteImages, logOut }) => {

    const handleImageChange = (e) => {
        uploadPhotos(e.target.files)
    }

    const handleUnlock = (images) => {
        unlockImages(images)
    }
    
    
    return (
        <Grid.Row>
            <Grid.Column width={16}>
                <Menu>
                    <Menu.Item onClick={showSideBar}>
                        <Icon name='sidebar'/>
                    </Menu.Item>
                    <Menu.Menu position="right">
                        <Menu.Item>
                            <Icon name='upload'/>
                            Upload
                            <input
                                id="fileInput"
                                type="file"
                                multiple
                                // hidden
                                name='newImage'
                                accept='image/jpg'
                                onChange={handleImageChange}
                                // change="fileEvent($event)"
                                // id="embedpollfileinput"
                            />
                        </Menu.Item>
                        { selectedImages.length > 0 ? 
                            <Menu.Item>
                                <Icon 
                                    onClick={() => {handleUnlock(selectedImages)}}
                                    name="unlock"
                                    style={{cursor:'pointer'}}
                                />
                            </Menu.Item>
                        :
                            null
                        }
                        { selectedImages.length > 0 ? 
                            <Menu.Item>
                                <Icon 
                                    // onClick={() => {deleteImages(selectedImages)}}
                                    name="lock"
                                    style={{cursor:'pointer'}}
                                />
                            </Menu.Item>
                        :
                            null
                        }
                        { selectedImages.length > 0 ?
                            <Menu.Item>
                                <Icon 
                                    onClick={() => {deleteImages(selectedImages)}}
                                    name="trash alternate"
                                    style={{cursor:'pointer'}}
                                />
                            </Menu.Item>
                        :
                            null
                        }   
                        
                        <Menu.Item onClick={logOut} style={{cursor:'pointer'}}>
                            Log out
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </Grid.Column>
        </Grid.Row>
    )
}

export default NavBar