import './ImageList.css';
import React from 'react';

import ImageCard from './ImageCard'

const ImageList = (props) => {

   //map props.images array adding in keys

   // { description, id, urls } are destruction from the image object so that you don't have to reference image... in each of the properties in the rendered elements
   const images = props.images.map(({ description, id, urls }) => {

      //key is added to the root element
      return <img key={id} src={urls.regular} alt={description} />
   });

   return <div className="image-list">{images}</div>

}

export default ImageList;