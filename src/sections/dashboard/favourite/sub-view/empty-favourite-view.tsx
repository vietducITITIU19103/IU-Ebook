import React from 'react'
import "../../../book/components/book-tabs/style.css"
import StyledButton from '@/components/button/styled-button'
import imgSRC from "@/assets/images/cart-image-purple.png"
import { CartTitle, CartDescription } from '@/sections/cart/components/custom-component'
import EmptyLayout from '../components/empty-layout'

export default function EmptyFavouriteView() {
  return (
    <EmptyLayout src={imgSRC} direction={{ xs: "column", md: "row" }} width={285}>
      <CartTitle sx={{ mb: "10px" }}>
        Ôi, bạn chưa yêu thích tài liệu nào cả!
      </CartTitle>
      <CartDescription
        sx={{ mb: "16px" }}>
        Hãy xem thêm nhiều tài liệu và thêm nó vào danh sách yêu thích sau đó quay lại để xem các tài liệu mà bạn đã yêu thích nhé!
      </CartDescription>
      <StyledButton label='Quay lại trang chủ' bg='#4E49D6' width={170} />
    </EmptyLayout>
  )
}

