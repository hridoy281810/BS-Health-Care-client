import VideoCall from "@/components/ui/VideoCall/VideoCall";

interface PropsType{
    searchParams: {videoCallingId:string}
}
const VideoCallingPage = ({searchParams}:PropsType) => {
    const videoCallingId = searchParams?.videoCallingId
  return (
    <div>
        <VideoCall videoCallingId={videoCallingId}/>
    </div>
  );
};

export default VideoCallingPage;