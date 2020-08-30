import React from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react';
import ImageContainer from './containers/ImageContainer';
import NavBar from './components/NavBar';

const App = () => {
    const [visible, setVisible] = React.useState(false)
    
    const showSideBar = () => {
        setVisible(!visible);
    }

    return (
        <div>
            <NavBar showSideBar={showSideBar}/>
            <ImageContainer isVisible={visible} showSideBar={showSideBar}/>
        </div>
    );
}

export default App;