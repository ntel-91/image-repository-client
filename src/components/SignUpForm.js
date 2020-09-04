import React, { useState } from 'react'
import _ from 'lodash'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

const SignUpForm = (props) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: password
        }
        handleSignUp(userData)
    }

    const handleSignUp = (data) => {
        fetch('http://localhost:3000/api/v1/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"   
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(response => {
            if (response.errors) {
                alert(response.errors)
            } else {
                localStorage.setItem("token", response.token)
                props.setUser(response.user)
                props.history.push("/images")
            }
        })
    }

     

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' textAlign='center'>Sign Up</Header>
                <Form size='large' onSubmit={handleSubmit}>
                    <Segment stacked>
                        <Form.Input 
                            fluid 
                            icon='user' 
                            iconPosition='left' 
                            placeholder='First Name' 
                            onChange={e => setFirstName(e.target.value)}
                        />
                        <Form.Input 
                            fluid 
                            icon='user' 
                            iconPosition='left' 
                            placeholder='LastName' 
                            onChange={e => setLastName(e.target.value)}
                        />
                        <Form.Input 
                            fluid 
                            icon='user' 
                            iconPosition='left' 
                            placeholder='username' 
                            onChange={e => setUsername(e.target.value)}
                        />
                        <Form.Input 
                            fluid 
                            icon='lock' 
                            iconPosition='left' 
                            placeholder='Password' 
                            type='password'
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Button fluid size='large'>
                            Submit
                        </Button>
                    </Segment>
                </Form>
                <Button onClick={() => {props.history.push("/login")}}>
                    Login
                </Button>
            </Grid.Column>
        </Grid>
    )
}

export default SignUpForm