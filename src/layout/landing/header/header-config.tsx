import { useMemo } from 'react';
import HomeIcon from '@/assets/icons/header/home-icon';
import UserIcon from '@/assets/icons/header/user-icon';

export default function ConfigHeader() {

    const data = useMemo(() => {
        return {
            navLink: [
                {
                    title: "Giới thiệu",
                    destination: "/landing/",
                },
                {
                    title: "Thể loại",
                    destination: "/dashboard/my-document/",
                },
                {
                    title: "Cộng đồng",
                    destination: "/",
                },
                {
                    title: "Trang chủ",
                    destination: "/",
                },
            ],
            signIn: { title: "Đăng nhập", destination: "/auth/login" },
        }
    }, [])

    return data;
}