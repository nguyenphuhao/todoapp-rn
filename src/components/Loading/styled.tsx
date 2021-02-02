import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const Content = styled.View`
  background-color: rgba(0, 0, 0, 0.4);
  margin: auto;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
