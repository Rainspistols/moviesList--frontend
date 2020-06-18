import styled from '@emotion/styled';
import { rem } from 'polished';
import { Flex, Box } from 'reflexbox';
import Navigation from './Navigation';
import Link from 'next/link';
import ToggleNavigationColorButton from './ToggleNavigationColorButton';

const Header = ({ isDark }) => {
  return (
    <HeaderStyled isDark={isDark}>
      <Box variant='container'>
        <Flex alignItems='center' justifyContent='space-between'>
          <Link href='/'>
            <a className='logo'>
              <img
                src='/images/logo.svg'
                alt='Sites logo'
                width='50'
                height='auto'
              />
              <span className='logo-text'>Next Movies</span>
            </a>
          </Link>

          <Navigation />
          <ToggleNavigationColorButton />
        </Flex>
      </Box>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  background: ${(props) => (props.isDark ? '#000000' : '#efefef')};
  padding: 20px;

  .logo {
    display: flex;
    align-items: center;

    &:hover {
      opacity: 0.7;
      transition: opacity 0.3s ease;
    }

    .logo-text {
      color: ${(props) => (props.isDark ? '#ffffff' : '#333333')};
      font-weight: bold;
      font-size: ${rem(20)};
      margin-left: 20px;
    }
  }
`;

export default Header;
