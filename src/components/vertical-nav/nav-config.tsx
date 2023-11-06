import React, { useMemo } from 'react'
import VoucherIcon from '@/assets/icons/vertical-nav/voucher-icon'
import HeartIcon from '@/assets/icons/vertical-nav/heart-icon'
import SettingIcon from '@/assets/icons/vertical-nav/setting-icon'
import BookmarkIcon from '@/assets/icons/vertical-nav/bookmark-icon'
import ContactIcon from '@/assets/icons/vertical-nav/contact-icon'
import SupportIcon from '@/assets/icons/vertical-nav/support-icon'

export default function NavConfig() {
    const mainLink = useMemo(()=>([
        {
            name: "Tài liệu của tôi",
            path: "my-document",
            icon: <BookmarkIcon/>,
            activeIcon: <BookmarkIcon isActive/>
        },
        {
            name: "Yêu thích",
            path: "favorite",
            icon: <HeartIcon/>,
            activeIcon: <HeartIcon isActive/>
        },
        {
            name: "Khuyến mãi",
            path: "promotion",
            icon: <VoucherIcon/>,
            activeIcon: <VoucherIcon isActive/>
        },
        {
            name: "Cài đặt",
            path: "setting",
            icon: <SettingIcon/>,
            activeIcon: <BookmarkIcon isActive/>
        },
    ]),[])
    const subList = useMemo(()=>([
        {
            name: "Hỗ trợ",
            path: "support",
            icon: <SupportIcon/>,
            activeIcon: <SupportIcon isActive/>
        },
        {
            name: "Liên hệ",
            path: "contact",
            icon: <ContactIcon/>,
            activeIcon: <ContactIcon isActive/>
        },
    ]),[])
    return (
       {mainLink,subList}
    )
}
