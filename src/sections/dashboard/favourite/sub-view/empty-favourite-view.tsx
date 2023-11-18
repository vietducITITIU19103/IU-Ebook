import React from 'react'
import "../../../book/components/book-tabs/style.css"
import imgSRC from "@/assets/images/cart-image-purple.png"
import EmptyLayout from "../../_common/empty-layout"

export default function EmptyFavouriteView() {
  return (
    <EmptyLayout
      title='Ôi, bạn chưa yêu thích tài liệu nào cả!'
      description='Hãy xem thêm nhiều tài liệu và thêm nó vào danh sách yêu thích sau đó quay lại để xem các tài liệu mà bạn đã yêu thích nhé!'
      buttonLabel='Quay lại trang chủ'
      href='/'
      src={imgSRC}
      direction={{ xs: "column", md: "row" }}
      width={285}
    />
  )
}

