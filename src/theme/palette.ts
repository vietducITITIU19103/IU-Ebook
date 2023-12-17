
// ----------------------------------------------------------------------

export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    iub: {
      text: {
        default: string;
        paper: string;
        info: string;
        placeholder: string;
        normal: string,
        active: string
      };
      background: {
        default: string;
        paper: string;
        transparent: string;
      };
      line: {
        default: string;
      };
    };
  }
}

// SETUP COLORS
const LIGHT = {
  iub: {
    text: {
      default: '#000000',
      paper: '#FFFFFF',
      info: '#2DC0AC',
      placeholder: '#667085',
      //-------
      normal: "#9DA4AE",
      active: "#4E49D6"
    },
    background: {
      default: 'white',
      paper: '#FFFFFF',
      transparent: 'transparent',
    },
    line: {
      default: '#FFFCF6',
    },
  },
};

const DARK = {
  iub: {
    text: {
      default: '#000000',
      paper: '#FFFFFF',
      info: '#2DC0AC',
      placeholder: '#667085',
      //-------
      normal: "#9DA4AE",
      active: "white"
    },
    background: {
      default: '#212B36',
      paper: '#FFFFFF',
      transparent: 'transparent',
    },
    line: {
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
