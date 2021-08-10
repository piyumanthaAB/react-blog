import BlogList from "./BlogList";
import Spinner from "./Spinner";
import useFetch from "./useFetch";

const Home = () => {

    const { data:blogs, isPending, isError } = useFetch('http://localhost:8000/blogs');

    
    
    return (
        <div className="home">
            {isError && <div>Something went wrong....</div> }
            {isPending && <Spinner />}
            {blogs && <BlogList blogs={blogs} />}

        </div>
     );
}
 
export default Home;