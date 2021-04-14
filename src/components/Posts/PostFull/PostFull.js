import { Link } from "react-router-dom";
import classes from "./PostFull.module.css";

const PostFull = ({ match}) => {
    return ( 
        <div className={classes.PostFull}>
            <Link to="/posts">Back to posts</Link>
            <h1>Post #{match.params.id}</h1>
        </div>
     );
}
 
export default PostFull;