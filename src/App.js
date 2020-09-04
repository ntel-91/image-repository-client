import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { Grid } from 'semantic-ui-react';
import ImageContainer from './containers/ImageContainer';
import NavBar from './components/NavBar';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';

const App = (props) => {
    const [visible, setVisible] = useState(false);
    const [images, setImages] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    
    useEffect(() => {
        console.log("APP USEEFFECT")
        const token = localStorage.getItem("token");
        if (token) 
            fetch('http://localhost:3000/api/v1/auto_login', {
				headers: {
					"Authorization": token
				}
			})
            .then(res => res.json())
            .then(response => {
                if (response.errors) {
                    localStorage.removeItem("token")
					alert(response.errors)
                } else {
                    setCurrentUser(response)
                }
        })
    }, [])

    const setUser = (user) => {
        setCurrentUser(user);
    }

    const logOut = () => {
        setCurrentUser(null)
        localStorage.removeItem("token")
        props.history.push("/login")
    }

    const showSideBar = () => {
        setVisible(!visible);
    }

    const uploadPhoto = (fileData) => {
        const formData = new FormData();
        formData.append("file", fileData)

        fetch('http://localhost:3000/api/v1/items', {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            debugger
            setImages(data);
        })
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
            // setImages(data)
        })
    }

    return (
        <Grid>
            { currentUser ?
                <Grid.Row>
                    <NavBar 
                        showSideBar={showSideBar}
                        uploadPhoto={uploadPhoto}
                        selectedImages={selectedImages}
                        deleteImages={deleteImages}
                        logOut={logOut}
                    />
                </Grid.Row>
            :
                null
            }
            <Switch>
                <Grid.Row centered>
                    <Route path="/images" render={(routerProps) => {
                        return <ImageContainer 
                            isVisible={visible} 
                            showSideBar={showSideBar}
                            currentUser={currentUser}
                            images={images}
                            selectImages={selectImages}
                            setImages={setImages}
                        />
                    }} />
                    <Route path="/signup" render={(routerProps) => {
                        return <SignUpForm setUser={setUser} {...routerProps}/>
                    }}/>    
                    <Route path="/login" render={(routerProps) => {
                        return <LoginForm setUser={setUser} {...routerProps}/>
                    }}/>    
                </Grid.Row>
            </Switch>
        </Grid>
    );
}

export default App;