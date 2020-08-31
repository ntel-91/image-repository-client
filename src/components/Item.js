import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const Item = ({ images }) => {

    function renderImages() {
        return images.map(image => {
            return (<Grid.Column key={image.id}>
                {console.log(image.image)}
                <Image
                    src={`http://localhost:3000/${image.image}`}
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