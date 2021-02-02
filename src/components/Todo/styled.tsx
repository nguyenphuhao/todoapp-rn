import React from 'react';
import styled from 'styled-components/native';
import { H1, H3, TextBox } from '../../styled/components';
import { ITheme } from '../../styled/defaultTheme';

export const Keyboard = styled.KeyboardAvoidingView`
  display: flex;
  flex: 1;
`;
export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;
export const Header = styled.View`
  display: flex;
`;
export const HeaderText = styled(H1)`
  text-align: center;
  margin: 10px auto;
`;
export const SearchInput = styled(TextBox)`
  margin: 10px 0px;
  padding-left: 20px;
  padding-right: 20px;
`;
export const TodoList = styled.FlatList``;
export const AddText = styled(H3)`
   text-align: center;
   margin: 10px;s
`;
export const AddInput = styled(TextBox)`
  display: flex;
  margin: 10px 0px;
  padding: 20px;
  background-color: ${({ theme }: { theme: ITheme }) => theme.colors.elementBg};
`;
export const FlatViewContainer = styled.View`
  display: flex;
  flex: 1;
  overflow: scroll;
`;
export const ActionContainer = styled.View`
  display: flex;
  margin-bottom: 30px;
`;
export const TodoItem = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin: 2px 0px;
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme.colors.secondaryBg};
`;
export const DeleteIcon = styled.View`
  padding: 10px 20px;
  background-color: ${({ theme }: { theme: ITheme }) => theme.colors.elementBg};
  border-radius: 5px;
`;

export const AddNew = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  padding: 10px 25px;
  border-radius: 10px;
  background-color: ${({ theme }: { theme: ITheme }) => theme.colors.elementBg};
`;

export const EmptyTextContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20% auto;
  background-color: rgba(255,255,255,0.07);
  width: 150px;
  height: 150px;
  border-radius: 9999px;
`;
