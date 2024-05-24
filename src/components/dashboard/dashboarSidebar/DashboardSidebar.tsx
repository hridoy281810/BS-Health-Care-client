"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { TChildrenProps } from '@/types';
import SidebarItem from '../sidebarItem/SidebarItem';
import { useGetSingleUserQuery } from '@/redux/api/userApi';
import { Avatar, Badge, Stack } from '@mui/material';
import AccountMenu from '../AccountMenu/AccountMenu';

const drawerWidth = 240;


export default function DashboardSidebar({children}:TChildrenProps) {
  const {data,isLoading} = useGetSingleUserQuery({})
  // console.log('data',data);
  
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };
  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };
  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background:"#F4F7FE",
          boxShadow:0,
          borderBottom: "1px solid lightgray",
          py: 1
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }}}
          >
            <MenuIcon sx={{color: "primary.main"}} />
          </IconButton>
  <Box sx={{
    display: "flex", 
    alignItems:"center",
    justifyContent:"space-between",
    width:"100%"
  }}>
<Box>
    <Typography  variant="h6" noWrap component="div" color="gray">
  Hi! {isLoading ? "Loading...": data?.name}
          </Typography>
  <Typography variant="h6" noWrap component="div" color="primary.main">
  Welcome To, BS Health Care!
          </Typography>
</Box>
  </Box>
  <Stack direction="row" gap={3}>
 <Badge badgeContent={1} color='primary'>
  <IconButton sx={{background: "#ffffff"}}>
<NotificationsNoneIcon color='action' />
  </IconButton>
 </Badge>
 <Avatar alt={data?.name} src={data?.profilePhoto} />
 <AccountMenu />
  </Stack>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
        <SidebarItem />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
     <SidebarItem />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
<Box>
    {children}
</Box>
 
      </Box>
    </Box>
  );
}