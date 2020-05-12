import React from 'react';
import Button from '@material-ui/core/Button';
import {unfollow, follow} from './user';

const FollowProfileButton = (props) => {
    const followClick = () => {
        props.onButtonClick(follow);
    }
    const unfollowClick = () => {
        props.onButtonClick(unfollow);
    }
    return (<div>
        {props.following
            ? (<Button variant="contained" color="secondary"
                onClick={unfollowClick}>Unfollow</Button>)
            : (<Button variant="contained" color="primary"
                onClick={followClick}>Follow</Button>)
        }
    </div>)
}

export default FollowProfileButton;