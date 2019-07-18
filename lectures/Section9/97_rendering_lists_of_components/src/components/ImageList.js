import React from 'react';


const ImageList = (props) => {

   //map props.images array
   const images = props.images.map((image) => {
      return <img src={image.urls.regular} alt={image.urls.regular}/>
   });

   return <div>{images}</div>

}

export default ImageList;