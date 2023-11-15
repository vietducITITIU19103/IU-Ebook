import React from 'react'
import "../../../book/components/book-tabs/style.css"
import imgSRC from "@/assets/images/cart-image-purple.png"
import EmptyLayout from '../../_common/empty-layout'

export default function EmptyPromotionView() {
  return (
    <EmptyLayout
      title='Ôi, bạn chưa có mã khuyến mãi nào cả!'
      description='Hãy tham gia các hoạt động trên trang web để kiếm thêm nhiều mã giảm giá nhé'
      buttonLabel='Quay lại trang chủ'
      href='/'
      src={imgSRC}
      direction={{ xs: "column", md: "row" }}
      width={285}
    />
  )
}

