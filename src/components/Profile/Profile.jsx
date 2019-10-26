import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx'

const Profile = () => {
  return (
    <div className={classes.bao_content}>
      main content<br />
      <div><img src='https://cdn.sandals.com/beaches/v12/images/general/destinations/home/beach.jpg' width='200px' /></div>
      <div>       
        discr
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;