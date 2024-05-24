"use client"
import { useState } from "react";
import AgoraUIKit from 'agora-react-uikit';
import { Box, Button, Stack } from "@mui/material";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import Image from "next/image";
import { useRouter } from "next/navigation";
const VideoCall = ({videoCallingId}:{videoCallingId:string}) => {
    const [videoCall,setVideoCall] = useState(true)
    const router = useRouter()
    const rtcProps = {
        appId:process.env.NEXT_PUBLIC_VIDEO_CALLING_APP_ID || "test",
        channel:videoCallingId,
        token: null
    }
    const callbacks = {
        EndCall:()=> {
            setVideoCall(false);
            router.push('/dashboard');
        }
    }
    return videoCall ? (
        <div style={{display: 'flex', width: '100vw', height: '100vh'}}>
          <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
        </div>
      ) : (
        <Stack sx={{width:"100%",maxWidth:500,mx:"auto"}} justifyContent="center" gap={2}>
         
           <Button endIcon={<VideoCallIcon />} sx={{borderRadius:'20px'}} onClick={() => setVideoCall(true)}>
                Start Video Call 
            </Button>
            <Image src="https://i.ibb.co/hR8LVPS/3720926.jpg" width={500} height={500} alt="video call" />
        </Stack>
      );
};

export default VideoCall;