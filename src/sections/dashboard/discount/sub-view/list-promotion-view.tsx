import React from 'react'
import Grid from '@mui/material/Grid';
import CenterVerticalLayout from '@/layout/component-base-layout/center-vertical-layout';
import { PromotionTypes } from '@/type/promotion/type';
import PromotionCard from '../components/promotion-card';
import GridSystem from '@/components/grid-system/grid-system';
export default function ListPromotionView({data} : {data:PromotionTypes[]}) {
  
  return (
    <CenterVerticalLayout>
      <GridSystem>
        <Grid container spacing={2} mt="10px">
          {
            data.map((item: PromotionTypes, index: number) => (
              <Grid item xs={12} smmd={6} md={12} mdlg={6} key={item.id+index} >
                <PromotionCard {...item}/>
              </Grid>
            ))
          }
        </Grid>
      </GridSystem>
    </CenterVerticalLayout >
  )
}
