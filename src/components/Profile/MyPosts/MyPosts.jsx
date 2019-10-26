import React from 'react';
import Post from './Post/Post.jsx'
import classes from './MyPosts.module.css';

// bao variables
let bao_container = {father:'Alex', mother:'Daria', son1:'Daniil', son2:'Maxin'};

const MyPosts = () => {
  return (
    <div className={classes.bao_content}>
      My posts
          <div>
            <textarea></textarea>
            <button>Add post</button>
          </div>
      <div>
        <Post message={bao_container.father}/>
        <Post message={bao_container.mother}/>

      </div>
    </div>
  );
};

export default MyPosts;