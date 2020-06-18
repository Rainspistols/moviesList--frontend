import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import HeaderContext from '../contexts/HeaderContext';

const Navigation = () => {
  const router = useRouter();
  const { menuItems, color } = useContext(HeaderContext);

  return (
    <NavigationStyled color={color}>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link href={item.slug}>
              <a className={router.pathname === item.slug ? 'active' : null}>
                {item.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.nav`
  ul {
    display: flex;
  }
  li {
    margin-left: 10px;
  }
  a {
    color: ${(props) => (props.color ? '#4c9EE3' : '#000000')};

    &:hover {
      text-decoration: underline;
    }
    &.active {
      color: #ef6800;
    }
  }
`;

export default Navigation;
