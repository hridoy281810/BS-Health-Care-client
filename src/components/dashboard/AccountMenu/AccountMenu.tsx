import { Avatar, Box, Divider, IconButton, ListItemAvatar, ListItemIcon, Menu, MenuItem, MenuProps, Tooltip, alpha, styled } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from "next/navigation";
import Link from "next/link";
import { logoutUser } from "@/services/actions/logoutUser";

const StyledMenu = styled((props: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));
  
const AccountMenu = () => {
   const [anchorEl,setAnchorEl] = useState<null | HTMLElement>(null)
   const open = Boolean(anchorEl);
   const router = useRouter()
    const handleClick = (event: React.MouseEvent<HTMLElement>)=>{
        setAnchorEl(event.currentTarget);
    }
    const handleClose = ()=>{
        setAnchorEl(null)
    }
    const handleLogOut = ()=>{
      setAnchorEl(null)
      logoutUser(router)
    }
  return (
    <React.Fragment>
      <Box sx={{display:"flex", alignItems:"center", textAlign:"center"}}>
     <Tooltip title="Account settings" 
     componentsProps={{
        tooltip:{
            sx:{
                bgcolor: "#cdd1da5c",
                color:"primary.main",
            }
        }
     }}
     >
        <IconButton 
        onClick={handleClick}
        aria-controls={open? "account-menu": undefined }
        aria-haspopup="true"
        aria-expanded={open ? "true": undefined }
        sx={{
            background:"#ffffff",
            "& svg": {
                color:"primary.main"
            },
        }}
        >
   <KeyboardArrowDownIcon />
        </IconButton>
     </Tooltip>
      </Box>
      <Menu anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      slotProps={{
        ...StyledMenu,
      }}
      transformOrigin={{horizontal:"right", vertical:"top"}}
      anchorOrigin={{horizontal:"right", vertical:"bottom"}}
      >
    <Link href="/dashboard/admin/profile"> 
       <MenuItem  onClick={handleClose}>
        <Avatar sx={{background: "transparent",color:"primary.main"}}/>
        Profile
        </MenuItem></Link>
        <Divider />
        <MenuItem onClick={handleLogOut} >
            <ListItemIcon>
                <LogoutIcon fontSize="small" sx={{color:"error.main"}} />
            </ListItemIcon>
            Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default AccountMenu;