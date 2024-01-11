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
            isDisable: false,
            icon: <BookmarkIcon/>,
            activeIcon: <BookmarkIcon isActive/>
        },
        {
            name: "Yêu thích",
            isDisable: false,
            path: "favorite",
            icon: <HeartIcon/>,
            activeIcon: <HeartIcon isActive/>
        },
        {
            name: "Khuyến mãi",
            isDisable: false,
            path: "promotion",
            icon: <VoucherIcon/>,
            activeIcon: <VoucherIcon isActive/>
        },
        {
            name: "Cài đặt",
            isDisable: false,
            path: "setting",
            icon: <SettingIcon/>,
            activeIcon: <BookmarkIcon isActive/>
        },
    ]),[])
    const subList = useMemo(()=>([
        {
            name: "Hỗ trợ",
            isDisable: true,
            path: "support",
            icon: <SupportIcon/>,
            activeIcon: <SupportIcon isActive/>
        },
        {
            name: "Liên hệ",
            isDisable: true,
            path: "contact",
            icon: <ContactIcon/>,
            activeIcon: <ContactIcon isActive/>
        },
    ]),[])
    return (
       {mainLink,subList}
    )
}
