import { Link } from "react-router-dom";

const BlogList = (props) => {
    // console.log(props.blog);
    return (
        <div className="blog-list">
            {
                props.blogs.map((blog) => {
                    return (
                        <div className="blog-preview" key={blog.id}>
                            <Link to={`/blogs/${blog.id}`}>
                                <h2>{blog.title} </h2>
                                <p>written By {blog.author}</p>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
     );
    
}
 
export default BlogList;