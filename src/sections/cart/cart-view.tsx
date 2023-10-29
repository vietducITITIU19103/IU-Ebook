import React from 'react'
import CartViewLayout from '@/layout/layout-view/cart-view-layout'
import CartEmptyView from './sub-view/cart-empty-view'
import PaymentSuccesView from './sub-view/payment-succes-view'
export default function CartView() {
    return (
        <CartViewLayout>
            <PaymentSuccesView/>
        </CartViewLayout>
    )
}
