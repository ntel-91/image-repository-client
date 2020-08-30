import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const Item = ({ images }) => {

    function renderImages() {
        return images.map(image => {
            return (<Grid.Column key={image.id}>
                <Image
                    src={image.img_url}
                />
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