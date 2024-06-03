"use server"
import { authKey } from "@/constance/authKey";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const setAccessToken = (token: string, option?: any) => {
    console.log(option, 'user need password change=============');
    cookies().set(authKey, token);

    if (option && option.passwordChangeRequired === true && ["DOCTOR", "ADMIN", "SUPPER_ADMIN"].includes(option.role)) {
        // Use Next.js's redirect for server-side redirection
        redirect(option.redirect);
    }

    if (option && option.redirect) {
        // Use Next.js's redirect for server-side redirection
        redirect(option.redirect);
    }
};

export default setAccessToken;
