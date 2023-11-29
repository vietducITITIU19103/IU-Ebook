"use client"
import CartHeader from '@/components/header/cart-header'
import React from 'react'

type Props = {
    children: React.ReactNode,
    title: string,
    handleLogic: VoidFunction 
}

export default function EditLayout({children,title,handleLogic}:Props) {
  return (
    <div>
      <CartHeader title={title} isHandleLogic onClick={handleLogic}/>
      {children}
    </div>
  )
}
