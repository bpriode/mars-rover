import React, { Component } from 'react';

export default class ImageDisplay extends Component {
  render() {
    let roverImage = this.props.images.map((image) => {
    return(
        <div key={image.id}>
            <img src={image.img_src}/>
            <div>
            <p>Rover: {image.rover.name}</p>
            <p>Earth Date:{image.earth_date}</p>
            </div>
        </div>
      )
    })
    return (
      <div>
        {roverImage}
      </div>
    )
  }
}
