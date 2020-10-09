import React, { useState, useReducer, useCallback, useRef, useEffect } from 'react';
import { Grid, Menu, Icon, Search } from 'semantic-ui-react';
import _ from 'lodash'
import faker from 'faker'

const source = _.times(5, () => ({
    title: faker.company.companyName(),
    description: faker.company.catchPhrase(),
    image: faker.internet.avatar(),
    price: faker.finance.amount(0, 100, 2, '$'),
}))

const initialState = {
    loading: false,
    results: [],
    value: '',
}

const getUsers = () => {
    let users;
    fetch('http://localhost:3000/api/v1/users')
    .then(res => res.json())
    .then(data => {
        users = data
    })
    debugger
}

function exampleReducer(state, action) {
    switch (action.type) {
      case 'CLEAN_QUERY':
        return initialState
      case 'START_SEARCH':
        return { ...state, loading: true, value: action.query }
      case 'FINISH_SEARCH':
        return { ...state, loading: false, results: action.results }
      case 'UPDATE_SELECTION':
        return { ...state, value: action.selection }
  
      default:
        throw new Error()
    }
}

const NavBar = ({ showSideBar, uploadPhotos, selectedImages, unlockImages, deleteImages, logOut, allUsers }) => {
    const [state, dispatch] = useReducer(exampleReducer, initialState)
    const [users, setUsers] = useState(allUsers)
    const { loading, results, value } = state

    const handleImageChange = (e) => {
        uploadPhotos(e.target.files)
    }

    const handleUnlock = (images) => {
        unlockImages(images)
    }

    
        fetch('http://localhost:3000/api/v1/users')
        .then(res => res.json())
        .then(data => {
            setUsers(data)
        })

    // const timeoutRef = useRef()
    // const handleSearchChange = useCallback((e, data) => {
    //     clearTimeout(timeoutRef.current)
    //     dispatch({ type: 'START_SEARCH', query: data.value })
    
    //     timeoutRef.current = setTimeout(() => {
    //         if (data.value.length === 0) {
    //             dispatch({ type: 'CLEAN_QUERY' })
    //             return
    //         }

    //         const re = new RegExp(_.escapeRegExp(data.value), 'i')
    //         const isMatch = (result) => re.test(result.username)
    //         debugger
    //         dispatch({
    //             type: 'FINISH_SEARCH',
    //             results: _.filter(users, isMatch),
    //         })
    //     }, 300)
    //     }, [])

    // useEffect(() => {
    //     return () => {
    //       clearTimeout(timeoutRef.current)
    //     }
    //   }, [])
    
    
    return (
        <Grid.Row>
            <Grid.Column width={16}>
                <Menu>
                    <Menu.Item onClick={showSideBar}>
                        <Icon name='sidebar'/>
                    </Menu.Item>
                    <Menu.Menu position="right">
                        {/* <Menu.Item> 
                            <Grid.Column width={6}>
                                <Search
                                    loading={loading}
                                    onResultSelect={(e, data) =>
                                        dispatch({ type: 'UPDATE_SELECTION', selection: data.result.username })
                                    }
                                    onSearchChange={handleSearchChange}
                                    results={results}
                                    value={value}
                                />
                            </Grid.Column>
                        </Menu.Item> */}
                        <Menu.Item>
                            <Icon name='upload'/>
                            Upload
                            {/* <Input ... icon={<Icon name='delete' link onClick={this.handleDeleteClick}/>}/> */}
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