import { BookTypes } from '@/type/book/book-type'
import Grid from '@mui/material/Grid'
import React from 'react'
import BookCard from '../card'

export default function DynamicLayout({ data }: { data: BookTypes[] }) {
    return (

        <Grid container spacing="25px">
            {
                data.map((item: BookTypes, index: number) => (
                    <Grid item xs={6} sm={4} smmdmin={4} smmd={3} md={2.4} mdlgmin={2.4} lg={2} >
                        <BookCard key={index} book={item} isRecommend />
                    </Grid>
                ))
            }
        </Grid>
    )
}
