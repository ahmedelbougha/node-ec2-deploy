import styled from 'styled-components';
import { ThemeProps } from '../../types';

export const Button = styled.button<ThemeProps>`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${({ theme }) =>
    theme.colors.header.backgroundColor || '#fff'};
  color: ${({ theme }) => theme.colors.header.color || '#333'};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;