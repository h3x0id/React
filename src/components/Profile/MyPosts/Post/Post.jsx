import React from 'react';
// imports
import classes from './Post.module.css';

// vars
let bao_imgsource = 'https://image.shutterstock.com/image-vector/illustration-black-cat-logo-vector-260nw-692056750.jpg'; // cat logotype
//let bao_postText = 'Standart post text';

// method
const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src={bao_imgsource} alt='something' width='50px' />
      {props.message}
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

// export
export default Post;