import React, { useState } from 'react'
import { Image, Icon } from 'semantic-ui-react';

const ImageItem = ({ image, selectImage}) => {
    const [onHover, setOnHover] = useState(false)
    const [isSelected, setIsSelected] = useState(false)

    let circleOutline = 'check circle'

    return (
            <Icon.Group size='large'>
                <Image
                    onClick={e => {
                        setIsSelected(!isSelected)
                        selectImage(image.id)
                    }}
                    onMouseEnter={() => {
                        return isSelected ? null : setOnHover(!onHover)
                    }}
                    onMouseLeave={() => {
                        return isSelected ? null : setOnHover(!onHover)
                    }}
                    src={`http://localhost:3000/${image.image}`}
                    style={{cursor:'pointer'}}
                />

                { onHover ? 
                    <Icon 
                    corner="top right" 
                    disabled={ isSelected ? false : true }
                    color='blue' 
                    name={circleOutline} 
                    style={{ margin: 5 }}
                    />
                :
                    null
                }

                { !image.private ? 
                    <Icon 
                        name="unlock"
                        color="grey"
                        corner="bottom right"
                        disabled
                        style={{ margin: 5 }}
                    />
                :
                    null
                }

            </Icon.Group>
    )
}

export default ImageItem