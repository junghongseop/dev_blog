import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useColorModeValue } from '@chakra-ui/react';
import Text from '../Text/Text';

const Portfolio = () => {
  const textColor = useColorModeValue('black', 'white');
  const hoverBgColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.200');

  return (
    <Link href="https://sassy-cloth-fbe.notion.site/e122a715530f452998b15be52a20689b">
      <StyledText fontType="header" color={textColor} hoverBgColor={hoverBgColor}>
        Portfolio
      </StyledText>
    </Link>
  );
};

export default Portfolio;

const StyledText = styled(Text)<{ hoverBgColor: string }>`
  display: inline-block;
  position: relative;
  text-decoration: none;
  transition:
    color 0.3s ease,
    background-color 0.3s ease,
    padding 0.3s ease;

  :hover {
    background-color: ${({ hoverBgColor }) => hoverBgColor};
    border-radius: 5px;
    padding: 5px;

    ::after {
      width: 100%;
    }
  }

  ::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 0;
    background-color: ${({ color }) => color};
    transition: width 0.3s ease;
  }
`;
