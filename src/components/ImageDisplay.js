import React, { Component } from 'react';

export default class ImageDisplay extends Component {
  render() {
    let roverImage = this.props.images.map((image) => {
    return(
        <div key={image.id} className="card">
            <img className="card-img-top" src={image.img_src}/>
            <div className="card-footer text-muted p-2 text-center">
            <p>Rover: {image.rover.name}</p>
            <p>Earth Date:{image.earth_date}</p>
            </div>
        </div>
      )
    })
    return (
      <div className="d-flex flex-wrap justify-content-center m-2">
        {roverImage}
      </div>
    )
  }
}
