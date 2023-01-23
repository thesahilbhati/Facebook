import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, Toolbar, Typography, Box } from '@mui/material';
import React, { useState } from 'react';
import MailIcon from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";
import { FacebookRounded } from '@mui/icons-material';


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const Search = styled(Box)(({ theme }) => ({
    backgroundColor: "#fff",
    borderRadius: theme.shape.borderRadius,
    color: "#000",
    padding: "0 10px",
    width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "20px",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
        display: "none",
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "10px",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
        display: "flex",
    }
}));

const Header = () => {

    const [open, setOpen] = useState(false);


    return (
        <React.Fragment>
            <AppBar position='sticky'>
                <StyledToolbar>
                    <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }} >
                        Facebook
                    </Typography>
                    <FacebookRounded sx={{ display: { xs: "block", sm: "none" } }} />
                    <Search><InputBase placeholder='Search' /></Search>
                    <Icons spacing={2}>
                        <Badge badgeContent={4} color="error">
                            <MailIcon />
                        </Badge>
                        <Badge badgeContent={4} color="error">
                            <Notifications />
                        </Badge>
                        <Avatar onClick={(e) => setOpen(true)} sx={{ width: 30, height: 30 }} alt="image" src="Images/sahil.png" />
                    </Icons>
                    <UserBox onClick={(e) => setOpen(true)}>
                        <Typography variant='span'>Sahil Bhati</Typography>
                        <Avatar sx={{ width: 30, height: 30 }} alt="image" src="Images/sahil.png" />
                    </UserBox>
                </StyledToolbar>
                <Menu
                    id="menu"

                    open={open}
                    onClose={(e) => setOpen(false)}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: 'right',
                    }}
                >
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My account</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </Menu>
            </AppBar>
        </React.Fragment>
    )
}

export default Header