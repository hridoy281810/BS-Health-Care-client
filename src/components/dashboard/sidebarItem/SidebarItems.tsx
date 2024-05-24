
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import { ISidebarItem } from '@/types';
import { usePathname } from 'next/navigation';
type TSidebarItemsProps = {
    item:ISidebarItem,
    index:number
}
const SidebarItems = ({item,index}:TSidebarItemsProps) => {
    const linkPath = `/dashboard/${item.path}`
    const pathName = usePathname()
    // console.log('linkPath', linkPath);
    // console.log('pathName', pathName);
    
    
  return (
<Link href={linkPath} >
<ListItem disablePadding sx={{
    ...(pathName === linkPath ? {borderRight: "3px solid #1586fd","& svg": {
       color:"#1586FD"
    },}   : {}), mb:1
}}>
          <ListItemButton>
            <ListItemIcon>
              {item.icon && <item.icon />}
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
        </ListItem>
        </Link>
  );
};

export default SidebarItems;