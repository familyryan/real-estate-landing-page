import React, {useState} from 'react';

import { Box } from '@mui/material';
import Typography from "@mui/material/Typography";
import { Menu } from '@mui/icons-material';
import { FeaturedPlayList } from '@mui/icons-material';
import { MiscellaneousServices } from '@mui/icons-material';
import { ListAlt } from '@mui/icons-material';
import { Home } from '@mui/icons-material';
import { ContactPage } from '@mui/icons-material';
import logoImg from "../media/logo.png";
import { Container } from "@mui/system";
import CustomButton from "./CustomButton";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";


const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState({
        left: false,
    });


    const toggleDrawer = (anchor, open) => (e) => {
        if (
            e.type === "keydown" &&
            (e.type === "Tab" || e.type === "Shift")
        ) {
            return;
        }
        setMobileMenu({ ...mobileMenu, [anchor]: open});
    };

    const list = (anchor) => (
        <Box 
        sx={{width: anchor === "top" || anchor === "bottom" ? "auto" : 250}}
        role="presentation"
        onClick={toggleDrawer(anchor,false)}
        onKeyDown={toggleDrawer(anchor, false)}>
            <List>
                {["Home", "Features", "Services", "Listed", "Contact"].map(
                    (text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index === 0 && <Home/>}
                                    {index === 1 && <FeaturedPlayList/>}
                                    {index === 2 && <MiscellaneousServices/>}
                                    {index === 3 && <ListAlt/>}
                                    {index === 4 && <ContactPage/>}

                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    )
                )}
            </List>
        </Box>
    );

    const NavLink = styled(Typography)(({theme})=> ({
        fontSize: "14px",
        color: "#4f5361",
        fontWeight: "bold",
        cursor: "pointer",
        "&:hover":{
            color: "#fff",
        },
    }));

    const NavbarLinkBox = styled(Box)(({theme}) => ({
        display:"flex",
        alignContent:"center",
        justifyContent:"center",
        gap: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            display:"none",
        },
    }));

    const CustomMenuIcon = styled(Menu)(({theme})=>({
        cursor: "pointer",
        display: "none",
        marginRight: theme.spacing(2),
        [theme.breakpoints.down("md")]: {
            display: "block",
        },
    }));

    const NavbarContainer = styled(Container)(({theme})=>({
        display:"flexx",
        alignItems:"center",
        justifyContent:"space-between",
        padding: theme.spacing(5),
        [theme.breakpoints.down("md")]:{
            padding: theme.spacing(2),
        },
    }));

    const NavbarLogo = styled("img")(({theme}) => ({
        cursor: "pointer",
        [theme.breakpoints.down("md")]:{
            display: "none",
        },
    }));



    return ( 
    <NavbarContainer>
        <Box sx={{
            diplay: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2.5rem",
        }}>
            <Box sx={{display: "flex", alignItems:"center"}}>
                <CustomMenuIcon onClick={toggleDrawer("left", true)}/>
                <Drawer
                anchor="left"
                open={mobileMenu["left"]}
                onClose={toggleDrawer("left", false)}>
                    {list("left")}
                </Drawer>
                <NavbarLogo src={logoImg} alt="logo"/>
            </Box>
            <NavbarLinkBox>
                <NavLink variant="body2">Home</NavLink>
                <NavLink variant="body2">Feature</NavLink>
                <NavLink variant="body2">Services</NavLink>
                <NavLink variant="body2">Listed</NavLink>
                <NavLink variant="body2">contact</NavLink>
            <NavLink variant="body2">SignUP</NavLink>
            
        <CustomButton
        backgroundColor="#0f1b4c"
        color="#fff"
        buttonText="Register"/>
            </NavbarLinkBox>
            
        
        </Box>
        

       
    </NavbarContainer>

     );
};

export default Navbar;