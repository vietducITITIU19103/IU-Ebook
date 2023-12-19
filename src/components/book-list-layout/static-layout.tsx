import { BookTypes } from '@/type/book/book-type'
import Grid from '@mui/material/Grid'
import React from 'react'
import BookCard from '../card/book-card'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import "./style.css"

export default function StaticLayout({ data }: { data: BookTypes[] }) {
    return (
        <Box
        className="scroll"
        sx={{
          overflowX: "scroll",
        }}
      >
        <Stack
          direction="row"
          spacing="20px"
          justifyContent={{ xs: "flex-start", lg: "space-between" }}
          alignItems="center"
          sx={{
            width: "1190px", mb: "2px"
          }}
        >
          {
            data.map((item: BookTypes, index: number) => (
              <BookCard key={index} {...item} sx={{width: "177px", flexShrink: 0}}/>
            ))
          }
        </Stack >
      </Box>
    )
}