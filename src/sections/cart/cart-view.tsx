import React from 'react'
import CartViewLayout from '@/layout/layout-view/cart-view-layout'
import CartEmptyView from './sub-view/cart-empty-view'
import PaymentSuccesView from './sub-view/payment-succes-view'
import SubCartView from './sub-view/sub-cart-view'
export default function CartView() {
    const list = []
    const viewName = list.length === 0 ? "empty" : "has"
    const RenderCurrenView = (name: "empty" | "has" |"payment") => {
        const CurrenView: any = {
            empty: <CartEmptyView />,
            has: <SubCartView />,
            payment: <PaymentSuccesView totalPrice={56000} />
        }[name]
        return CurrenView
    }
    return (
        <CartViewLayout>
            {/* {RenderCurrenView(viewName)} */}
            <SubCartView />
        </CartViewLayout>
    )
}
