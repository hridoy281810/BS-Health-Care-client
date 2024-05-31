'use client'
import React, { useEffect, useRef, useState } from "react";
import {Box, Divider, IconButton,  Menu, MenuItem, MenuProps, Tooltip, Typography, alpha, styled } from "@mui/material";
import Badge from '@mui/material/Badge';
import { useRouter } from "next/navigation";
import Link from "next/link";
import { logoutUser } from "@/services/actions/logoutUser";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useGetALlMetaQuery } from "@/redux/api/userApi";
import dayjs from "dayjs";
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
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
  interface Notification {
    message: string;
    date: Date;
  }
const NotificationMenu = () => {
    const {data,isLoading} = useGetALlMetaQuery({})
    console.log(data?.meta);
    const currentCount = data?.meta
   const [anchorEl,setAnchorEl] = useState<null | HTMLElement>(null)
   const [messages, setMessages] = useState<Notification[]>([]);
   const prevCounts = useRef({ appointmentCount: 0, paymentCount: 0, doctorCount: 0, patientCount: 0 });
 
   const generateMessages = (prev: typeof prevCounts.current, current: typeof prevCounts.current): Notification[] => {
     const newMessages: Notification[] = [];
     const now = new Date();
     
     if (current.appointmentCount > prev.appointmentCount) {
       newMessages.push({ message: "One new appointment added", date: now });
     } else if (current.appointmentCount < prev.appointmentCount) {
       newMessages.push({ message: "One appointment deleted", date: now });
     }
 
     if (current.paymentCount > prev.paymentCount) {
       newMessages.push({ message: "One new payment added", date: now });
     } else if (current.paymentCount < prev.paymentCount) {
       newMessages.push({ message: "One payment deleted", date: now });
     }
 
     if (current.doctorCount > prev.doctorCount) {
       newMessages.push({ message: "One new doctor added", date: now });
     } else if (current.doctorCount < prev.doctorCount) {
       newMessages.push({ message: "One doctor deleted", date: now });
     }
 
     if (current.patientCount > prev.patientCount) {
       newMessages.push({ message: "One new patient added", date: now });
     } else if (current.patientCount < prev.patientCount) {
       newMessages.push({ message: "One patient deleted", date: now });
     }
 
     return newMessages;
   };
 
   useEffect(() => {
     if (!isLoading && data?.meta) {
       const currentCounts = {
         appointmentCount: data.meta.appointmentCount,
         paymentCount: data.meta.paymentCount,
         doctorCount: data.meta.doctorCount,
         patientCount: data.meta.patientCount,
       };
 
       const newMessages = generateMessages(prevCounts.current, currentCounts);
       setMessages((prevMessages) => [...prevMessages, ...newMessages]);
       prevCounts.current = currentCounts;
     }
   }, [data, isLoading]);
 
   const open = Boolean(anchorEl);
   const router = useRouter();
 
   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
     setAnchorEl(event.currentTarget);
   };
 
   const handleClose = () => {
     setAnchorEl(null);
   };
 
   const today = dayjs().startOf('day');
 
   const todayMessages = messages.filter((msg) => dayjs(msg.date).isAfter(today));
   const olderMessages = messages.filter((msg) => dayjs(msg.date).isBefore(today)); 
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
 <NotificationsNoneIcon color='action' />
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
      transformOrigin={{horizontal:"center", vertical:"top"}}
      anchorOrigin={{horizontal:"center", vertical:"bottom"}}
      >
   {messages.length > 0 ? (
          <React.Fragment>
            {todayMessages.length > 0 && (
              <React.Fragment>
                <MenuItem disabled>
                  <Typography >Today</Typography>
                </MenuItem>
                {todayMessages.map((message, index) => (
                <>
                <Link href="/dashboard/admin">
                  <MenuItem key={index}>
                     <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
    sx={{marginRight: 2}}
      >
      </StyledBadge>
       <Typography sx={{
        color:'#808080',
        fontSize:'13px'
       }}>{message.message}</Typography>
                  </MenuItem>
                  </Link>
                     <Divider />
                </>

                ))}
              </React.Fragment>
            )}
            {olderMessages.length > 0 && (
              <React.Fragment>
                <MenuItem disabled>
                  <Typography variant="subtitle1">Older</Typography>
                </MenuItem>
                {olderMessages.map((message, index) => (
               <>
               <Link href="/dashboard/admin">
               <MenuItem key={index}>
                    <Typography sx={{
        color:'#808080',
        fontSize:'13px'
       }}>{message.message}</Typography>
                  </MenuItem>
               </Link>
                      <Divider />
               </>
                ))}
              </React.Fragment>
            )}
          </React.Fragment>
        ) : (
          <MenuItem>
            <Typography sx={{
        color:'#808080',
        fontSize:'13px'
       }}>No notifications available right now</Typography>
          </MenuItem>
        )}
  
        <Divider />
    
      </Menu>
    </React.Fragment>
  );
};

export default NotificationMenu;