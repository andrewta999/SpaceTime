import React from 'react';
import Post from './Post';

const PostList = (props) => {
    return (
      <div style={{marginTop: '24px'}}>
        {props.posts.map((item, i) => {
            return <Post post={item} key={i} onRemove={props.removeUpdate}/>
          })
        }
      </div>
    )
}

export default PostList;
