import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import LocationIcon from '@/assets/icons/footer/location-icon';
import MailIcon from '@/assets/icons/footer/mail-icon';



export default function Info({ isLanding }: { isLanding?: boolean }) {

  const TypographyStyle = {
    color: isLanding ? "iub.text.paper" : "inherit",
    marginLeft: "8px",
    fontSize: "inherit",
    fontFamily: "inherit"
  }

  return (
    <List>
      <ListItem sx={{
        display: 'flex',
        alignItems: 'flex-start',
        paddingBottom: "0",
        fontSize: {
          sx: "16px",
          lg: "18px"
        }
      }}>
        <LocationIcon sx={{ width: "30px", height: "33px" }} color="white"/>
        <Typography variant="body2" sx={TypographyStyle}>
          12 Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp, TP.HCM
        </Typography>
      </ListItem>
      <ListItem>
        <MailIcon sx={{ width: "25px", height: "25px" }} color="white"/>
        <Typography variant="body2" sx={TypographyStyle}>
          iuh@ebook.edu.com
        </Typography>
      </ListItem>
    </List>
  )
}


