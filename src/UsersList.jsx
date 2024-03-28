import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const UsersList = () => {
  const posts = useSelector((state) => state.posts);
  const userNames = Object.keys(posts);
  return (
    <div className="user-posts-container">
      <h2>View Posts By Users</h2>

      {userNames.map((userName) => {
        return (
          <li key={userName} className="list-user-name">
            <NavLink to={userName}>{userName}</NavLink>
          </li>
        );
      })}
    </div>
  );
};

export default UsersList;
