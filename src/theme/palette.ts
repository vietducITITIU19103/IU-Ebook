
// ----------------------------------------------------------------------

export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    iub: {
      logo: {
        normal: string
      },
      text: {
        default: string;
        paper: string;
        info: string;
        placeholder: string;
        normal: string,
        active: string,
        light: string
      };
      background: {
        default: string;
        paper: string;
        transparent: string;
        body: string,
        chip: string
      };
      line: {
        headerBottom: string; 
        default: string;
      };
    };
  }
}

// SETUP COLORS
const LIGHT = {
  iub: {
    logo: {
      normal: "#363636"
    },
    text: {
      default: '#000000',
      paper: '#FFFFFF',
      info: '#2DC0AC',
      placeholder: '#667085',
      //-------
      normal: "#9DA4AE",//gray-gray
      active: "#4E49D6", //purple-white
      light: "#6C737F" //gray-white
    },
    background: {
      default: 'white',
      paper: '#FFFFFF',
      transparent: 'transparent',
      body: "#F5F5FA",
      chip: "#F2EFFF"
    },
    line: {
      headerBottom: "#F2F4F7", 
      default: '#FFFCF6',
    },
  },
};

const DARK = {
  iub: {
    logo: {
      normal: "white"
    },
    text: {
      default: '#000000',
      paper: '#FFFFFF',
      info: '#2DC0AC',
      placeholder: '#667085',
      //-------
      normal: "#9DA4AE",
      active: "white",
      light: "white"
    },
    background: {
      default: '#212B36',
      paper: '#FFFFFF',
      transparent: 'transparent',
      body: "#161C24",
      chip: "#6C737F"
    },
    line: {
      headerBottom: '#212B36', 
      default: '#FFFCF6',
    },
  },
};

export function palette(mode: 'light' | 'dark') {
  const light = {
    ...LIGHT,
    mode: 'light',
  };

  const dark = {
    ...DARK,
    mode: 'dark',
  };

  return mode === 'light' ? light : dark;
}
