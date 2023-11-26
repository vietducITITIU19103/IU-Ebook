import React, { useMemo } from 'react'
import BookmarkIcon from '@/assets/icons/vertical-nav/bookmark-icon'
import LibIcon from '@/assets/icons/footer/lib-icon';
import HomeIcon from '@/assets/icons/footer/home-icon';
import DocumentIcon from '@/assets/icons/footer/document-icon';
import VoucherIcon from '@/assets/icons/footer/voucher-icon';
import UserIcon from '@/assets/icons/footer/user-icon';
export default function MobileFooterConfig() {
    const mainLink = useMemo(()=>([
        {
            name: "Trang chủ",
            path: "/",
            icon: <HomeIcon/>,
            activeIcon: <HomeIcon isActive/>
        },
        {
            name: "Thư viện",
            path: "/search",
            icon: <LibIcon sx={{width: "28px", height: "23px"}}/>,
            activeIcon: <LibIcon sx={{width: "28px", height: "23px"}} isActive/>
        },
        {
            name: "Tài liệu",
            path: "/dashboard/my-document",
            icon: <DocumentIcon />,
            activeIcon: <DocumentIcon isActive/>
        },
        {
            name: "Khuyến mãi",
            path: "/dashboard/promotion",
            icon: <VoucherIcon/>,
            activeIcon: <VoucherIcon isActive/>
        },
        {
            name: "Tài khoản",
            path: "/dashboard/setting",
            icon: <UserIcon/>,
            activeIcon: <UserIcon isActive/>
        },
    ]),[])
  
    return (
        mainLink
    )
}
