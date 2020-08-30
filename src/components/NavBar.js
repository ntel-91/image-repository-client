import React from 'react';
import { Grid, Menu, Icon } from 'semantic-ui-react';

const NavBar = ({ showSideBar }) => {
    return (
        <Grid.Row>
            <Grid.Column width={16}>
                <Menu>
                    <Menu.Item onClick={() => { showSideBar() }}>
                        <Icon name='sidebar'/>
                    </Menu.Item>
                    <Menu.Menu position="right">
                        <Menu.Item
                            name="Search"
                        />
                        <Menu.Item
                            name="Log out"
                        />
                    </Menu.Menu>
                </Menu>
            </Grid.Column>
        </Grid.Row>
    )
}

export default NavBar