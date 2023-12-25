
// ----------------------------------------------------------------------

export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

export type PaletteType = {
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
      light: string,
      main: string,
      footer: string,
      title: string
    };
    background: {
      default: string;
      paper: string;
      transparent: string;
      body: string,
      chip: string,
      pattern_purple: string,
      pattern_orange: string,
      nav_active: string,
      line_active: string,
      item_hover: string
    };
    line: {
      headerBottom: string;
      default: string;
    };
  };
}

declare module '@mui/material/styles/createPalette' {
  export interface PaletteT {
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
        light: string,
        main: string,
        footer: string,
        title: string
      };
      background: {
        default: string;
        paper: string;
        transparent: string;
        body: string,
        chip: string,
        pattern_purple: string,
        pattern_orange: string,
        nav_active: string,
        line_active: string,
        item_hover: string
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
      normal: "#6C737F",//gray-gray
      active: "#4E49D6", //purple-white
      light: "#6C737F", //gray-white
      main: "#1F2A37", //black-white
      footer: "#0D006A",
      title: "#344054" //white-blackblue
    },
    background: {
      default: 'white',
      paper: 'white',
      transparent: 'transparent',
      body: "#F5F5FA",
      chip: "#F2EFFF",
      pattern_purple: "#4E49D6",
      pattern_orange: "#F3633E",
      nav_active: "white",
      line_active: "#D8DBDF",
      item_hover: "rgba(31, 42, 55, 0.05)"
    },
    line: {
      headerBottom: "#F2F4F7",
      default: '#D8DBDF',
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
      placeholder: 'lightgray',
      //-------
      normal: "#9DA4AE",
      active: "white",
      light: "white",
      main: "white",
      footer: "#white",
      title: "white"
    },
    background: {
      default: '#212B36',
      paper: '#212B36',
      transparent: 'transparent',
      body: "#161C24",
      chip: "#6C737F",
      pattern_purple: "#F2EFFF",
      pattern_orange: "#F2EFFF",
      nav_active: "rgba(78, 73, 214, 0.16)",
      line_active: "rgba(78, 73, 214, 0.16)",
      item_hover: "rgba(78, 73, 214, 0.16)"
    },
    line: {
      headerBottom: '#212B36',
      default: '#6C737F',
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
