import styled from 'styled-components/native';
import { ITheme, Theme } from './defaultTheme';

export const Text = styled.Text`
  font-size: ${({ theme }: { theme: ITheme }) => theme.font.fontSize}px;
  color: ${({ theme }: { theme: ITheme }) => theme.colors.primaryText};
`;
export const H6 = styled(Text)`
  font-size: ${({ theme }: { theme: ITheme }) => theme.font.fontSize * 0.67}px;
`;
export const H5 = styled(Text)`
  font-size: ${({ theme }: { theme: ITheme }) => theme.font.fontSize * 0.83}px;
`;
export const H4 = Text;
export const H3 = styled(Text)`
  font-size: ${({ theme }: { theme: ITheme }) => theme.font.fontSize * 1.17}px;
`;
export const H2 = styled(Text)`
  font-size: ${({ theme }: { theme: ITheme }) => theme.font.fontSize * 1.5}px;
`;
export const H1 = styled(Text)`
  font-size: ${({ theme }: { theme: ITheme }) => theme.font.fontSize * 2}px;
`;
export const TextBox = styled.TextInput`
  color: ${({ theme }: { theme: ITheme }) => theme.colors.primaryText};
  background-color: ${({ theme }: { theme: ITheme }) => theme.colors.elementBg};
  padding: 10px 10px;
  font-size: ${({ theme }: { theme: ITheme }) => theme.font.fontSize}px;
`;
