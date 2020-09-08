import React from 'react';
import { Grid } from 'semantic-ui-react';
import ImageItem from './ImageItem'

const Item = ({ images, selectImages }) => {

    function renderImages() {
        return images.map(image => {
            return (
                <Grid.Column width={4} key={image.id}>
                    <ImageItem image={image} selectImage={selectImages}/>
                </Grid.Column>
            )
        })
    }

    return (
        <Grid relaxed='very' columns={4}>
            {renderImages()}
        </Grid>
    )
}

export default Item