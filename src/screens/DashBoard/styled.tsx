import styled from 'styled-components/native';
import { ITheme } from '../../styled/defaultTheme';

export const Container = styled.View`
  background-color: ${({ theme }: { theme: ITheme }) => theme.colors.primaryBg};
  height: 100%;
`;
