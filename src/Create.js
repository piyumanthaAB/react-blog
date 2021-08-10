import { useState } from "react";
import  axios  from 'axios';
import Spinner from "./Spinner";
import { useHistory } from "react-router";

const Create = () => {

    const [title, setTitle] = useState('heloooo');
    const [body, setBody] = useState('this is ninja content');
    const [author, setAuthor] = useState('mario');

    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);

    const history = useHistory();

    const handleSubmit = async (e) => {
        setIsPending(true);
        e.preventDefault();
        const blog = { title, body, author };

        try {

            const res = await axios({
                method: 'POST',
                url: 'http://localhost:8000/blogs',
                data:blog
            })

            console.log(res);
            if (res.status === 201) {
                setError(false);
                setIsPending(false);
                history.push('/');
            }
            
            
        } catch (error) {
            // setIsPending(false);
            setError(true);
            console.log(error);
            setTimeout(() => {
                history.go(0);
            }, 2000);
        }

        
    }


    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            {isPending && <Spinner />}
            {error && <div>Something went wrong... Try again</div> }
            {!isPending &&
                <form
                onSubmit={handleSubmit}>
                <label >Blog title :</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <label >Blog body :</label>
                <textarea
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                >
                </textarea>
                <label >Blog author :</label>
                <select
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                <button>Add Blog</button>
            </form>}

            <h2>title value is:{title} </h2>
            <p>body : {body}</p>
            <p>written by: {author} </p>
        </div>
     );
}
 
export default Create;