import React from 'react';
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';

const Post = () => {
    return (
        <React.Fragment>
            <Box sx={{ margin: 5 }}>
                <Card>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ backgroundColor: "red" }} aria-label="recipe">
                                S
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVert />
                            </IconButton>
                        }
                        title="React Js Developer"
                        subheader="January 24, 2023"
                    />
                    <CardMedia
                        component="img"
                        height="5%"
                        image="Images/cardimg.png"
                        alt="Image"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            React.js, a comprehensive JavaScript library for building user interfaces, has changed the way we think about front-end development. React.js has grasped the interest of the open source community and it is here to stay. However, the nuances and idiosyncrasies of React.js require extra caution when distinguishing between good JavaScript developers and true experienced React.js developers.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
                        </IconButton>
                        <IconButton aria-label="share">
                            <Share />
                        </IconButton>

                    </CardActions>

                </Card>
            </Box>
        </React.Fragment>
    )
}

export default Post