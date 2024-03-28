import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const HomePosts = () => {
  const posts = useSelector((state) => state.posts);
  const users = Object.keys(posts);

  return (
    <div className="home-container">
      <AddPostForm users={users} />
      <div>
        <h2>Posts</h2>
        {<AllPostcards postsData={posts} />}
      </div>
    </div>
  );
};

const AddPostForm = ({ users }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [userName, setUserName] = useState(users[0]); //set the first user as default
  const [title, setTitle] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    dispatch({
      type: "add",
      payload: { title: title, content: content, userName: userName },
    });
  }
  return (
    <div>
      <h2>Add Post</h2>
      <form onSubmit={handleAdd} className="add-post-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <select
          id="users"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        >
          {users.map((user) => (
            <option key={user} value={user}>
              {user}
            </option>
          ))}
        </select>
        <button>Add</button>
      </form>
    </div>
  );
};

// Component to render all postcards
// function AllPostcards({ postsData }) {
//   const postcards = [];
//   // Iterate over each user and their posts
//   Object.entries(postsData).forEach(([user, posts]) => {
//     // Iterate over each post for the user
//     Object.entries(posts).forEach(([postId, { title, content }]) => {
//       postcards.push(
//         <PostCard
//           key={postId}
//           user={user}
//           postId={postId}
//           title={title}
//           content={content}
//         />
//       );
//     });
//   });
//   console.log(postcards); //!CHECK THIS
//   return <div>{postcards}</div>;
// }

// Postcards component
function AllPostcards({ postsData }) {
  // Map over all posts and create PostCard components
  const allPostcards = Object.entries(postsData).flatMap(([user, posts]) =>
    Object.entries(posts).map(([postId, { title, content }]) => (
      <PostCard key={postId} title={title} content={content} user={user} />
    ))
  );

  console.log(allPostcards);
  return <div className="home-post-cards-container">{allPostcards}</div>;
}

function PostCard({ user, postId, title, content }) {
  return (
    <div key={postId} className="home-post-card">
      <h4>{title}</h4>
      <p>{content}</p>
      <p>
        posted by: <span className="post-user-name">{user}</span>{" "}
      </p>
    </div>
  );
}

export default HomePosts;
