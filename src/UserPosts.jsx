import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

const UserPosts = () => {
  const { userName } = useParams();
  const ommala = useSelector((state) => state);
  console.log(ommala);
  const userPostsObj = useSelector((state) => state.posts[userName]);
  const userPostsIds = Object.keys(userPostsObj);
  return (
    <div>
      <h2>
        {userName.slice(0, 1).toUpperCase() +
          userName.slice(1, userName.length)}
        &nbsp;Posts
      </h2>
      {userPostsIds.map((id) => {
        const post = userPostsObj[id];
        return (
          <PostCard postData={post} key={id} postId={id} userName={userName} />
        );
      })}
    </div>
  );
};

const PostCard = ({ postData, postId, userName }) => {
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch({
      type: "delete",
      payload: { userName: userName, postId: postId },
    });
  }
  return (
    <div className="user-post-card">
      <h4>{postData.title}</h4>
      <p>{postData.content}</p>
      <NavLink to={`editpost/${postId}`}>
        <button>Edit</button>
      </NavLink>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default UserPosts;
