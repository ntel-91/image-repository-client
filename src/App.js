import React, { useState, useEffect } from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react';
import ImageContainer from './containers/ImageContainer';
import NavBar from './components/NavBar';

const App = () => {
    const [visible, setVisible] = useState(false)
    
    // useEffect(() => {
    //     set
    // }, [])

    const showSideBar = () => {
        setVisible(!visible);
    }

    return (
        <Grid>
            <NavBar showSideBar={showSideBar}/>
            <Grid.Row>
                <ImageContainer isVisible={visible} showSideBar={showSideBar}/>
            </Grid.Row>
        </Grid>
    );
}

export default App;