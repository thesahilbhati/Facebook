import { Box } from '@mui/material';
import React from 'react';
import Post from './Post';

const Feed = () => {
  return (
    <React.Fragment>
      <Box sx={{ flex: "4" }} p={2}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />

      </Box>
    </React.Fragment>
  )
}

export default Feed