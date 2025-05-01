type FontWeight = 
  | 'normal' 
  | 'bold' 
  | '100' 
  | '200' 
  | '300' 
  | '400' 
  | '500' 
  | '600' 
  | '700' 
  | '800' 
  | '900';

export const themas = {
  colors: {
    primary: '#878af6',
    primaryDark: '#6a6dcf',
    primaryLight: '#a5a8f8',
    secondary: '#ffffff',
    secondaryDark: '#e6e6e6',
    gray: '#808080',
    grayDark: '#4d4d4d',
    grayLight: '#d7d8d7',
    grayLighter: '#f0f0f0',
    background: '#ffffff',
    bgScreen: '#f1f7fa',
    input: '#f2f2f2',
    text: '#333333',
    textLight: '#666666',
    textInverted: '#ffffff',
    white: '#ffffff',
    black: '#000000',
    success: '#4caf50',
    warning: '#ff9800',
    error: '#f44336',
    info: '#2196f3',
    shadow: 'rgba(0, 0, 0, 0.1)',
  },
  
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
  },
  
  borders: {
    radius: {
      sm: 4,
      md: 8,
      lg: 16,
      xl: 24,
      xxl: 32,
      full: 999,
    },
    width: {
      thin: 1,
      regular: 2,
      thick: 4,
    },
  },
  
  typography: {
    sizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      xxl: 24,
      h3: 32,
      h2: 40,
      h1: 48,
    },
    weights: {
      light: '300' as FontWeight,
      regular: '400' as FontWeight,
      medium: '500' as FontWeight,
      semiBold: '600' as FontWeight,
      bold: '700' as FontWeight,
    },
  },
  
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 8,
    },
  },
};