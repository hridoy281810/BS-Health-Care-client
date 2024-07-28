import { useEffect, useState } from "react";
import { getUsrInfo } from "@/services/actions/auth.service";

const useGetUserRole = () => {
    const [userRole, setUserRole] = useState('');

    useEffect(() => {
        const fetchUserRole = async () => {
            const userInfo = getUsrInfo();
            if (userInfo && userInfo.role) {
                setUserRole(userInfo.role);
            }
        };

        fetchUserRole();
    }, []);

    return userRole;
};

export default useGetUserRole;
