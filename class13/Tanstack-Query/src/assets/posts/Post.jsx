import React from "react";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


const Post = () => {
  const { data ,isPending, error, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      try {
        const response= await fetch("https://dummyjson.com/posts")
          .then((res) => res.json())
          .then(res =>res.posts);
          console.log(response);
          
          return response
      } catch (error) {
        console.log(error);
      }
    },
    
  });
   
  const queryClient = useQueryClient();
  // Delete Post
  const deleteMutation = useMutation({
    mutationFn: async (postId) => {
      const response = await fetch(`https://dummyjson.com/posts/${postId}`, {
        method: "DELETE",
      });
      return response.json();
    },
    onSuccess: (data, postId) => {
      console.log(data);
      queryClient.setQueryData(["posts"], (curEle) => {
        return curEle.filter((post) => post.id !== postId);
      });
    },
  });
  // Update Post
  const updateMutation = useMutation({
    mutationFn: async ({postId,title,body}) => {
      const response = await fetch(`https://dummyjson.com/posts/${postId}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({title,body})
      });
      return response.json();
    },
    onSuccess: (updatedPost,data) => {//updated post object returned by the API
      console.log(data);
      
      queryClient.setQueryData(["posts"], (curEle) => {
        return curEle.map((post) =>(post.id === updatedPost.id ? updatedPost : post));
      });
    },
  });
   const handleUpdate = (postId,currentTitle,currentBody) => {
    const newTitle = prompt("Enter new title", currentTitle);
    const newBody = prompt("Enter new body", currentBody);
     
    if(newTitle!== null && newBody !== null){
      updateMutation.mutate({postId,title:newTitle,body:newBody})
    }
    
   }
   if(isPending) return <h1>Loading...</h1>
    if(isError) return <h1>{error.message}</h1>

  return (
    <>
     {/* {data?.map(({title, id, body})=>(
      <div key={id}>
        <h1>{title}</h1>
        <p>{body}</p>

      </div>
     ))} */}
      
      {data?.map(({title, id, body})=>(

     <Container key={id}>
      <br />
      <Card key={id}>
      <Card.Header>{id}: {title}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
           {body}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
        <div className="float-end">

        <button onClick={()=>handleUpdate(id,title,body)} className="btn btn-success mx-3 mt-2 ">Update</button>
        <button onClick={()=>deleteMutation.mutate(id)} className="btn btn-danger mt-2 ">Delete</button>
        </div>
      </Card.Body>
    </Card>
    <br />
    </Container>
  ))}
     
    </>
  );
};

export default Post;
