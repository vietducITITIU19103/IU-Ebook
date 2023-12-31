import React from 'react'
import "../../../book/components/book-tabs/style.css"
import imgSRC from "@/assets/images/cart-image-purple.png"
import EmptyLayout from '../../_common/empty-layout'

export default function EmptyDocumentView() {
  return (
    <EmptyLayout
      title='Ôi, bạn chưa có tài liệu nào trong giỏ hàng cả!'
      description='Hãy xem thử kho tài liệu tại thư viện của chúng tôi bạn nhé!'
      buttonLabel='Quay lại thư viện'
      href='/'
      src={imgSRC}
      direction={{ xs: "column", md: "row" }}
      width={285}
    />
  )
}

