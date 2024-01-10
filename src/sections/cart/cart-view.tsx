import React from 'react'
import CartViewLayout from '@/layout/layout-view/cart-view-layout'
import CartEmptyView from './sub-view/cart-empty-view'
import PaymentSuccesView from './sub-view/payment-succes-view'
import SubCartView from './sub-view/sub-cart-view'

export type TableItemTypes = {
    id: number,
    name: string,
    price: number,
    discount: number,
    date: string
}

const data: TableItemTypes[] = [
    {
        id: 1,
        name: 'Giáo trình Kế toán Tài chính - Phần I ',
        price: 70000,
        discount: 50,
        date: "20/10/2024"
    },
    {
        id: 2,
        name: 'Giáo trình Kế toán Tài chính - Phần I ',
        price: 70000,
        discount: 50,
        date: "20/10/2024"
    },
    {
        id: 3,
        name: 'Giáo trình Kế toán Tài chính - Phần I ',
        price: 70000,
        discount: 50,
        date: "20/10/2024"
    }
]

export default function CartView() {
    const list = [...data]
    const viewName = list.length === 0 ? "empty" : "has"
    const RenderCurrenView = (name: "empty" | "has" | "payment") => {
        const CurrenView: any = {
            empty: <CartEmptyView />,
            has: <SubCartView tableData={list} />,
            payment: <PaymentSuccesView totalPrice={56000} />
        }[name]
        return CurrenView
    }
    return (
        <CartViewLayout>
            {RenderCurrenView(viewName)}
        </CartViewLayout>
    )
}
