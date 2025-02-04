import React from "react";
import { useQuery } from '@tanstack/react-query';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


const Post = () => {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      try {
        const response= fetch("https://dummyjson.com/posts")
          .then((res) => res.json())
          .then(res =>res.posts);
          console.log(response);
          
          return response
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
     {/* {data?.map(({title, id, body})=>(
      <div key={id}>
        <h1>{title}</h1>
        <p>{body}</p>

      </div>
     ))} */}
      
      {data?.map(({title, id, body})=>(

     <Container>
      <br />
      <Card key={id}>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
           {body}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    <br />
    </Container>
  ))}
     
    </>
  );
};

export default Post;
