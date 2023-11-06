import React from 'react'
import "../../../book/components/book-tabs/style.css"
import StyledButton from '@/components/button/styled-button'
import imgSRC from "@/assets/images/cart-image-purple.png"
import { CartTitle, CartDescription } from '@/sections/cart/components/custom-component'
import EmptyLayout from '../components/empty-layout'

export default function EmptyDocumentView() {
  return (
    <EmptyLayout src={imgSRC} direction={{ xs: "column", md: "row" }} width={285}>
      <CartTitle sx={{ mb: "10px" }}>
        Ôi, bạn chưa có tài liệu nào trong giỏ hàng cả!
      </CartTitle>
      <CartDescription
        sx={{ mb: "16px" }}>
        Hãy xem thử kho tài liệu tại thư viện của chúng tôi bạn nhé!
      </CartDescription>
      <StyledButton label='Quay lại thư viện' bg='#4E49D6' width={170} />
    </EmptyLayout>
  )
}

