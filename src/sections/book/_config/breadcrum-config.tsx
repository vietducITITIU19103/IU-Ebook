import { useMemo } from 'react';

export default function BreadcrumConfig() {

    const data = useMemo(() => {
        return [
            {title: "Trang chủ", href:"/"},
            {title: "Hạng mục 1", href:"/"},
            {title: "Giáo trình Kế toán tài chính", href:"/"}
        ]
    }, [])

    return data;
}