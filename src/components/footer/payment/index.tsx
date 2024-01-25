import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Image from 'next/image'
import MomoLogo from "@/assets/images/momo.png"
import ZaloLogo from "@/assets/images/zalo.png"
import VisaLogo from "@/assets/images/visa.png"


export default function Payment({ isLanding }: { isLanding?: boolean }) {

  const listItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    paddingBottom: "0",
    marginBottom: "15px"
  }
  const TypographyStyle = {
    color: isLanding ? "iub.text.paper" : "inherit",
    fontSize: "inherit",
    fontFamily: "inherit"
  }


  return (
    <List>
      <ListItem sx={{ listItemStyle, fontSize: "inherit" }}>
        <Typography
          variant="body2"
          sx={TypographyStyle}>
          Phương thức thanh toán
        </Typography>
      </ListItem>
      <ListItem sx={{ ...listItemStyle, gap: "16px" }}>
        <Image src={MomoLogo} width={36} height={36} alt="logo"></Image>
        <Image src={ZaloLogo} width={36} height={36} alt="logo"></Image>
        <Image src={VisaLogo} width={36} height={36} alt="logo"></Image>
      </ListItem>
    </List>
  )
}


