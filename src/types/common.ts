import { USER_ROLE } from "@/constance/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type IMeta = {
    page:number;
    limit:number;
    total:number
}
export type TChildrenProps = {
    children: React.ReactNode
}
export type  TUserRole =keyof typeof  USER_ROLE;
export interface ISidebarItem {
    title:string,
    path:string,
    parentPath?:string,
    icon?:OverridableComponent<SvgIconTypeMap<{},"svg">&{muiName:string}>,
    child?:ISidebarItem[]
}