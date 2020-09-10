import React from 'react';
import { Icon, Card } from 'semantic-ui-react';
import ImageItem from './ImageItem'

const Item = ({ images, selectImages, unlockImages }) => {

    function renderImages() {
        return images.map(image => {
            return (
                <div key={image.id}>
                {/* <Icon.Group size='large' key={image.id}> */}
                    <ImageItem image={image} selectImage={selectImages} unlockImages={unlockImages}/>
                {/* </Icon.Group> */}
                </div>
            )
        })
    }

    return (
        <Card.Group>
            {renderImages()}
        </Card.Group>
    )
}

export default Item