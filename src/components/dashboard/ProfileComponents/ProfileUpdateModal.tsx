import BSFullScreenModal from "@/components/shared/modal/BSFullScreenModal";
import { Box } from "@mui/material";
type TProps = {
    open:boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    id:string
}
const ProfileUpdateModal = ({open,setOpen,id}:TProps) => {
  return (
    <BSFullScreenModal open={open} setOpen={setOpen} title="Update Profile">
        <Box>
            Update user info
        </Box>
    </BSFullScreenModal>
  );
};

export default ProfileUpdateModal;