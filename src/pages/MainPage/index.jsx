import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PostForm from "../../components/forms/postForm/postForm";
import FriendsView from "./Components/friendsView/friendsView";
import GroupView from "./Components/groupsView/groupView";
import Post from "../../components/mainPage/post/mainPost";

function MainPage(props) {
  let { posts, users, onGetPosts, onGetUsers, onUpdateVotes, isLoggedIn, onGetGroups } = props;
  let [postList, setPosts] = useState([])

  useEffect(() => {
    onGetPosts()
    onGetUsers()
    onGetGroups()
  }, [onGetPosts, onGetUsers, onGetGroups])

  useEffect(() => {
    setPosts(posts)
  }, [posts, users])


  return (
    <div className='mainPage-container'>
      <div className='groupList'>
        <GroupView {...props} />
      </div>

      <div className='postsList'>
        <div className='postForm' style={isLoggedIn === true ? { display: 'block' } : { display: 'none' }}>
          <PostForm {...props} />
        </div>

        <div className='posts'>
          {postList.length === 0 ? <p>no posts have been made yet</p> : postList.map(post => {
            return <Post {...props} key={post.id} post={post} onUpdateVotes={onUpdateVotes} />
          })}
        </div>
      </div>

      <div className='friendList'>
        <FriendsView {...props} />
      </div>
    </div>
  );
}

const mapStateToProps = () => {
  return ({});
}

const mapDispachToProps = () => {
  return ({});
}

export default connect(mapStateToProps, mapDispachToProps)(MainPage);