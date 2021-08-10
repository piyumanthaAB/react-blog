import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import useFetch from "./useFetch";
import axios from 'axios';
import { useHistory } from "react-router";

const BlogDetails = () => {
    const history = useHistory();

    const { id } = useParams();

    const { data:blog, isPending, isError } = useFetch('http://localhost:8000/blogs/' + id);

    const handleDelete = async(id) => {
        
        try {
            
            const res = await axios({
                method: 'DELETE',
                url: `http://localhost:8000/blogs/${id}`
            });

            console.log(res);
            if (res.status === 200) {
                history.push('/');
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="blog-details">
            {isPending && <Spinner />}
            {isError && <div>Something went wrong!</div>}
            {blog && (
                <article>
                    <h2> {blog.title} </h2>
                    <p>written by {blog.author} </p>
                    <div>
                        {blog.body}
                    </div>
                    <button onClick={()=>handleDelete(id)} >Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;