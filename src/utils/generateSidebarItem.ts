import { USER_ROLE } from "@/constance/role"
import { ISidebarItem, TUserRole } from "@/types"
// icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import TryIcon from '@mui/icons-material/Try';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ReviewsIcon from '@mui/icons-material/Reviews';
import NoteIcon from '@mui/icons-material/Note';
import PaymentIcon from '@mui/icons-material/Payment';
import PersonIcon from '@mui/icons-material/Person';
export const generateSidebarItem = (role:TUserRole):ISidebarItem[]=>{
    const roleMenus:ISidebarItem[] =[]
    const defaultMenus =[
        {
            title: "Profile",
            path: `${role}/profile`,
            icon: PersonIcon
        }
    ]
    switch(role){
        case USER_ROLE.SUPPER_ADMIN:
            roleMenus.push(
                {
                    title:"Dashboard",
                    path: `${role}`,
                    icon:DashboardIcon,
                },
                {
                    title:"Manage Users",
                    path: `${role}/manage-users`,
                    icon:GroupIcon,
                },
            )
            break;
            case USER_ROLE.ADMIN:
                roleMenus.push(
                    {
                        title:"Dashboard",
                        path: `${role}`,
                        icon:DashboardIcon,
                    },
                    {
                        title:"Specialties",
                        path: `${role}/specialties`,
                        icon:TryIcon,
                    },
                    {
                        title:"Doctors",
                        path: `${role}/doctors`,
                        icon:MedicalInformationIcon,
                    },
                    {
                        title:"Schedules",
                        path: `${role}/schedules`, 
                        icon:CalendarMonthIcon,
                    },
                    {
                        title:"Appointments",
                        path: `${role}/appointments`,
                        icon:CalendarMonthIcon,
                    },
                    {
                        title:"Reviews",
                        path: `${role}/reviews`,
                        icon:ReviewsIcon,
                    },
                )
                break;
            case USER_ROLE.DOCTOR:
                roleMenus.push(
                    {
                        title:"Dashboard",
                        path: `${role}`,
                        icon:DashboardIcon,
                    },
                    {
                        title:"Schedule",
                        path: `${role}/schedule`,
                        icon:CalendarMonthIcon,
                    },
                    {
                        title:"Appointments",
                        path: `${role}/appointments`,
                        icon:CalendarMonthIcon,
                    },
                )
                break;
            case USER_ROLE.PATIENT:
                roleMenus.push(
                    {
                        title:"Appointments",
                        path: `${role}/appointments`,
                        icon:CalendarMonthIcon,
                    },
                    {
                        title:"Prescriptions",
                        path: `${role}/prescriptions`,
                        icon:NoteIcon,
                    },
                    {
                        title:"Payment History",
                        path: `${role}/payment-history`,
                        icon:PaymentIcon,
                    },
                    
                )
                break;
                default:
                    break;
        
    }

    return [...roleMenus,...defaultMenus];
}




