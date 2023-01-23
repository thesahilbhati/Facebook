import styled from '@emotion/styled';
import { AddBoxOutlined, AddPhotoAlternateOutlined, DateRange, EmojiEmotions, PersonAdd, VideoCameraBack } from '@mui/icons-material';
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, TextField, Tooltip, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Upload = () => {

  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Tooltip onClick={(e) => setOpen(true)} title="Create Post" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}>
        <Fab color="primary" aria-label="add">
          <AddBoxOutlined />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={e => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box width={500} height={{xs:200, md:300}} p={3} bgcolor={"background.default"} color={"text.primary"} borderRadius={5}>
          <Typography variant='h6' color="grey" textAlign="center">Create Post</Typography>

          <UserBox>
            <Avatar
              src='Images/sahil.png'
              sx={{ width: 30, height: 30 }}
            />
            <Typography variant='span' fontWeight={500}>Sahil Bhati</Typography>
          </UserBox>

          <TextField
            multiline
            rows={2}
            fullWidth
            placeholder="What's On Your Mind"
            variant="standard"
          />

          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color='primary' />
            <AddPhotoAlternateOutlined color='secondary' />
            <VideoCameraBack color='success' />
            <PersonAdd color='error' />
          </Stack>

          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}><DateRange /></Button>
          </ButtonGroup>
        </Box>

      </StyledModal>
    </React.Fragment>
  )
}

export default Upload