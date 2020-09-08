import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import ImageContainer from './containers/ImageContainer';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';

const App = (props) => {
    const [currentUser, setCurrentUser] = useState(null);
    
    useEffect(() => {
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

    return (
        <Switch>
            <Route path="/users/:id/items" render={(routerProps) => {
                return <ImageContainer 
                    setUser={setUser}
                    currentUser={currentUser}
                    logOut={logOut}
                    {...routerProps}
                />
            }} />
            <Route path="/signup" render={(routerProps) => {
                return <SignUpForm setUser={setUser} {...routerProps}/>
            }}/>    
            <Route path="/login" render={(routerProps) => {
                return <LoginForm setUser={setUser} {...routerProps}/>
            }}/>    
        </Switch>
    );
}

export default App;