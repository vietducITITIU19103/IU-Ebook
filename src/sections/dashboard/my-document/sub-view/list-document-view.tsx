import React from 'react'
import BookCard from '@/components/card/book-card';
import Grid from '@mui/material/Grid';
import GridSystem from '@/components/grid-system/grid-system';
import { BookTypes } from '@/type/book/book-type';

import CenterVerticalLayout from '@/layout/component-base-layout/center-vertical-layout';

type Props = {
  data: BookTypes[]
}


export default function ListDocumentView({ data }: Props) {
  return (
    <CenterVerticalLayout>
      <GridSystem>
        <Grid container spacing={2} mb="130px">
          {
            data.map((item: BookTypes, index: number) => (
              <Grid item xs={6} sm={4} smmd={3} md={4} lg={2.4} >
                <BookCard key={index} {...item}/>
              </Grid>
            ))
          }

        </Grid>
      </GridSystem>
    </CenterVerticalLayout >
  )
}
