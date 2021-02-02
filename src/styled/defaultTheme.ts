import { DefaultTheme } from 'styled-components/native';
interface ITheme {
  font: {
    fontSize: number;
  };
  colors: {
    primaryBg: string;
    secondaryBg: string;
    elementBg: string;
    primaryText: string;
  };
}
const Theme: DefaultTheme = {
  font: {
    fontSize: 16,
  },
  colors: {
    primaryBg: '#352f5b',
    secondaryBg: '#423a6f',
    elementBg: 'rgba(0,0,0,0.2)',
    primaryText: '#ffffff',
  },
};

export { Theme, ITheme };
