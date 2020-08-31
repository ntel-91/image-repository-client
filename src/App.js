import React, { useState, useEffect } from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react';
import ImageContainer from './containers/ImageContainer';
import NavBar from './components/NavBar';

const App = () => {
    const [visible, setVisible] = useState(false)
    const [images, setImages] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/items')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setImages(data)
        })
    }, [])

    const showSideBar = () => {
        setVisible(!visible);
    }

    return (
        <Grid>
            <NavBar showSideBar={showSideBar}/>
            <Grid.Row>
                <ImageContainer 
                    isVisible={visible} 
                    showSideBar={showSideBar}
                    images={images}
                />
            </Grid.Row>
        </Grid>
    );
}

export default App;