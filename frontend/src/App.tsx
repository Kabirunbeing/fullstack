import BugReport from "./components/BugReport"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Header from "./components/NavBar"
import NewPost from "./components/NewPost"
import Notification from "./components/Notifications"
import PostDetail from "./components/PostDetail"
import PostItem from "./components/PostItem"
import SearchBar from "./components/SearchBar"
import TagList from "./components/Taglist"
import UserBadge from "./components/UserBadge"
import UserProfile from "./components/UserProfile"

function App() {
  
  return (
    <>
      <div>
      <Header/>
      <SearchBar/>
      <Home/>
      <NewPost/>
      <UserProfile/>
      <PostItem/>
      <BugReport/>
      <PostDetail/>
      <UserBadge/>
      <Notification/>
      <TagList/>
      <Footer/>
     </div>
    </>
  )
}

export default App
