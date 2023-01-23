import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <React.Fragment>
      <Box sx={{ flex: "2", display: { xs: "none", sm: "block" } }} p={2}>
        <Box position="fixed">
          <Typography variant='body1' fontWeight={200} mt={2}>Online Friends</Typography>
          <AvatarGroup max={7}>
            <Avatar alt="Remy Sharp" src="Images/imglist1.jpg" />
            <Avatar alt="Travis Howard" src="Images/imglist2.jpeg" />
            <Avatar alt="Cindy Baker" src="Images/imglist3.jpeg" />
            <Avatar alt="Agnes Walker" src="Images/imglist4.jpg" />
            <Avatar alt="Trevor Henderson" src="Images/imglist5.jpg" />
            <Avatar alt="Agnes Walker" src="Images/imglist6.jpg" />
            <Avatar alt="Trevor Henderson" src="Images/imglist1.jpg" />
            <Avatar alt="Trevor Henderson" src="Images/imglist2.jpeg" />
            <Avatar alt="Agnes Walker" src="Images/imglist3.jpeg" />
          </AvatarGroup>
          <Typography mb={2}>Latest Photos</Typography>
          <ImageList sx={{ width: 350, height: 300 }} cols={3} rowHeight={100}>
            <ImageListItem>
              <img src="Images/imglist1.jpg" alt="Pic" />
            </ImageListItem>
            <ImageListItem>
              <img src="Images/imglist2.jpeg" alt="Pic" />
            </ImageListItem>
            <ImageListItem>
              <img src="Images/imglist3.jpeg" alt="Pic" />
            </ImageListItem>
            <ImageListItem>
              <img src="Images/imglist4.jpg" alt="Pic" />
            </ImageListItem>
            <ImageListItem>
              <img src="Images/imglist5.jpg" alt="Pic" />
            </ImageListItem>
            <ImageListItem>
              <img src="Images/imglist6.jpg" alt="Pic" />
            </ImageListItem>

          </ImageList>


          <Typography>Latest Conversations</Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="Images/imglist1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="Images/imglist2.jpeg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="Images/imglist3.jpeg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default Rightbar