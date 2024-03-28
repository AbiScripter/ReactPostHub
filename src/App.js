import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import UsersList from "./UsersList";
import UserPosts from "./UserPosts";
import EditPost from "./EditPost";
import HomePosts from "./HomePosts";
function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/users">
    //     <Route index element={<UsersList />} />
    //     <Route path=":userId" element={<User />}>
    //       <Route path=":userpost" element={<UserPost />} />
    //     </Route>
    //   </Route>
    // </Routes>

    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<HomePosts />} />
        <Route path="/users">
          <Route index element={<UsersList />} />
          <Route path=":userName">
            <Route index element={<UserPosts />} />
            <Route path="editpost/:userpostId" element={<EditPost />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
