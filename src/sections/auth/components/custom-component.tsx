import { styled } from '@mui/material/styles';
import LoginBg from '@/assets/icons/login-bg';
import Box from '@mui/material/Box';

const BgContainer = styled(LoginBg)(({ theme }) => ({
    transition: "all 0.2s ease",
    width: '532px', 
    height: '629px',
    [theme.breakpoints.down(1075)]: {
      width: '475px', height: '600px'
    },
  }));


const FormBox = styled('div')(({ theme }) => ({
    width: '404px',
    alignItems: 'center',
    [theme.breakpoints.down(960)]: {
      width: '340px',
    },
    [theme.breakpoints.down(450)]: {
      width: '100%',
    },
  }));
  
  
  
  const CustomBox = styled(Box)(({ theme }) => ({
    position: "relative",
    left: '100px',
    [theme.breakpoints.down(1075)]: {
      left: '70px',
    },
  }));

  export {BgContainer,FormBox,CustomBox}