import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BugReport from "./components/BugReport";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Header from "./components/NavBar";
import NewPost from "./Posts/NewPost";
import Notification from "./components/Notifications";
import PostDetail from "./components/PostDetail";
import PostItem from "./components/PostItem";
import PostList from "./Posts/PostList";
import SearchBar from "./components/SearchBar";
import SinglePost from "./Posts/SinglePost";
import TagList from "./components/Taglist";
import UserBadge from "./components/UserBadge";
import UserProfile from "./Users/UserProfile";
// import CommentSection from "./Comments/CommentSection";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <SearchBar />
        <NewPost/>
        {/* <CommentSection/> */}
          <PostList/>
          <UserProfile/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/new" element={<NewPost />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/:id" element={<SinglePost />} /> 
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/post/item" element={<PostItem />} />
          <Route path="/bug/report" element={<BugReport />} />
          <Route path="/post/detail" element={<PostDetail />} />
          <Route path="/user/badge" element={<UserBadge />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/tags" element={<TagList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
