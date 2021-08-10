import * as create from './CreateBlogElements';
import { useState } from 'react';
import  axios  from 'axios';
import Spinner from "././../Spinner";
import { useHistory } from "react-router";

const CreateBlog = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

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
        <>
            <create.CreateContainer>
                <create.CreateHeading> Add a new blog </create.CreateHeading>

                {isPending && <Spinner />}
                {error && <div>Something went wrong... Try again</div> }

                {!isPending && <create.CreateForm onSubmit={handleSubmit}>
                    <create.CreateInput type='text' value={title} onChange={(e)=>setTitle(e.target.value)} required placeholder='title' />
                    <create.CreateLabel>title </create.CreateLabel>
                    
                    <create.CreateTextarea placeholder=' body' value={body} onChange={(e)=>setBody(e.target.value)} ></create.CreateTextarea>
                    <create.CreateLabel> body </create.CreateLabel>

                    
                    <create.CreateSelect placeholder="authr" value={author} onChange={(e)=>setAuthor(e.target.value)}>
                        <create.CreateOption>mario</create.CreateOption>
                        <create.CreateOption>yoshi</create.CreateOption>
                    </create.CreateSelect>
                    <create.CreateLabel> author </create.CreateLabel>

                    <create.CreateSubmitBtn>Add blog</create.CreateSubmitBtn>
                </create.CreateForm>}

                <create.CreateSummary>
                    <create.CreateSummaryLabel>title</create.CreateSummaryLabel>: {title }
                    <create.CreateSummaryLabel>body</create.CreateSummaryLabel>: {body}
                    <create.CreateSummaryLabel>writtem by</create.CreateSummaryLabel>: {author}
                    
                    
                    
                </create.CreateSummary>

            </create.CreateContainer>    
        </>
     );
}
 
export default CreateBlog;