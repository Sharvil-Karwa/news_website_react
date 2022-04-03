import React, { Component } from 'react';

const imgStyle = {
  height: "15rem"
}
const buttonStyle = {
  position: "absolute",
  bottom: "1%",
}
const cardStyle = {
  margin: "0.5rem auto"
}
const descriptionStyle = {
  marginBottom : "1rem"
}
export class NewsItem extends Component {
  render() {
    let {title,description,urlToImage,url} = this.props;
    return (
        <div className="card col-lg-4" style={cardStyle}>
  {/* <img className="card-img-top" src={urlToImage} style={imgStyle}  alt="Card image cap" /> */}
  <img src={!urlToImage ? "https://img.favpng.com/1/5/7/logo-newspaper-computer-icons-png-favpng-HSe6k49zXm0NPmBuceBWEUz1X.jpg" : urlToImage} style={imgStyle} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text" style={descriptionStyle}>{!description ? "" : description.substring(0,150)}...</p>
    <a href={url} style={buttonStyle} target="_blank" className="btn btn-sm btn-danger">Full Article</a>
  </div>
</div>
    );
  }
}

export default NewsItem
