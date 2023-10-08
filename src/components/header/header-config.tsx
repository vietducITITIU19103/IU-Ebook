import { useMemo } from 'react';
import HomeIcon from '@/assets/icons/header/home-icon';
import UserIcon from '@/assets/icons/header/user-icon';

export default function ConfigHeader() {

    const data = useMemo(() => {
        return {
            navLink: [
                { title: "Trang chủ", destination: "/", icon: <HomeIcon sx={{width: "14px", height: "16px"}}/> },
                { title: "Tài khoản", destination: "/", icon: <UserIcon sx={{width: "12px", height: "14px"}}/> },
            ],
            signIn: { title: "Đăng ký ", destination: "/register" },
        }
    }, [])

    return data;
}