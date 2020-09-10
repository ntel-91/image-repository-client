import React, { useState } from 'react'
import { Image, Icon, Card } from 'semantic-ui-react';
import '../App.css'

const ImageItem = ({ image, selectImage, unlockImages}) => {
    const [onHover, setOnHover] = useState(false)
    const [isPrivate, setIsPrivate] = useState(image.isPrivate)
    const [isSelected, setIsSelected] = useState(false)

    const handleLock = (imageId) => {
        unlockImages(imageId)
        setIsPrivate(!isPrivate)
    }

    return (
        <Card style={{width: 100, height: 100, margin: 10, boxShadow: 'none'}}>
            <Icon.Group size='big' style={{margin: 'auto'}}>
            <Image
                onClick={e => {
                    setIsSelected(!isSelected)
                    selectImage(image.id)
                }}
                onMouseEnter={() => {return isSelected ? null : setOnHover(true)}}
                onMouseLeave={() => {return isSelected ? null : setOnHover(false)}}
                src={`http://localhost:3000/${image.image}`}
                style={{cursor:'pointer', objectFit: 'cover'}}                
            />

            { onHover ?
                <Icon 
                corner="top right" 
                disabled={ isSelected ? false : true }
                color='blue' 
                name="check circle"
                style={{ margin: 5 }}
                onMouseEnter={() => {setOnHover(true)}}
                onMouseLeave={() => {setOnHover(false)}}
                />
            :
                null
            }

            { onHover && isPrivate ?
                <Icon 
                    link
                    name="lock"
                    color="grey"
                    corner="bottom right"
                    style={{ margin: 5 }}
                    onClick={() => handleLock(image.id)}
                    onMouseEnter={() => {setOnHover(true)}}
                    onMouseLeave={() => {setOnHover(false)}}
                />
            :
                null
            }

            { !isPrivate ? 
                <Icon 
                    link
                    name="unlock"
                    color="grey"
                    corner="bottom right"
                    style={{ margin: 5 }}
                    onClick={() => handleLock(image.id)}
                />
            :
                null
            }
            </Icon.Group>
        </Card>
    )
}

export default ImageItem