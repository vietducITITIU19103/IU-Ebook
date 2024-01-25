import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image'
import QrCode from '@/assets/icons/footer/qr-code';

const listItemStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  paddingBottom: "0",
  marginBottom: "15px"
}

export default function DownLoad({ isLanding }: { isLanding?: boolean }) {
  return (
    <List>
      <ListItem sx={{ listItemStyle }}>
        <Typography
          variant="body2"
          sx={{
            color: isLanding ? "iub.text.paper" : "inherit",
            fontSize: "inherit",
            fontFamily: "inherit"
          }}>
          Tải ứng dụng
        </Typography>
      </ListItem>
      <ListItem sx={{ ...listItemStyle, gap: "16px" }}>
        <Box sx={{
          backgroundColor: "#F5F5FA",
          padding: "10px", 
          pb: "5px",
          borderRadius: "12px",
          fontFamily: "inherit"
        }}>
          <QrCode sx={{width: "60px", height:"60px"}}/>
        </Box>
      </ListItem>
    </List>
  )
}


