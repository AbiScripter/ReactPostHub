import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

const EditPost = () => {
  const posts = useSelector((state) => state.posts);
  const { userName, userpostId } = useParams(); //!important we can retrive the previous url
  const post = posts[userName]?.[userpostId];

  const [editTitle, setEditTitle] = useState(post.title);
  const [editContent, setEditContent] = useState(post.content);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  Object.entries(posts[userName]).map(([id, soothu]) => console.log(soothu));

  function handleEdit(event) {
    event.preventDefault();
    dispatch({
      type: "edit",
      payload: {
        title: editTitle,
        content: editContent,
        userName: userName,
        userpostId: userpostId,
      },
    });
    navigate(-1); //go back to user posts
  }
  return (
    <div className="edit-post-container">
      <h2>Edit Post</h2>
      <form onSubmit={handleEdit} className="edit-form">
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <textarea
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
        />
        <button>Update</button>
      </form>
    </div>
  );
};

export default EditPost;
