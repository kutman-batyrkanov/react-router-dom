import classes from "./Posts.module.css";
import { Route } from "react-router"
import PostFull from "./PostFull/PostFull";
import PostList from "./PostList/PostList"

const Posts = ({ match }) => {
    return ( 
    <div className={classes.Posts}>
        {match.isExact ? <PostList /> 
        : <Route path="/posts/:id" component={PostFull} /> }
        
    </div>
     );
}
 
export default Posts;