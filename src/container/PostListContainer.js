import React from 'react';
import PostList from '../components/post/PostList';
import { Container } from '@mui/material';

const PostListContainer = () => {

  return (
    <Container sx={{ mt: 5 }}>
      <PostList />
    </Container>
  )
}

export default PostListContainer;