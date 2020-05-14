import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = ({ navigation }) => {
  const router = useRouter();

  return (
    <NavigationStyled>
      <ul>
        {navigation.map((item) => (
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
    color: #4c9ee3;

    &:hover {
      text-decoration: underline;
    }
    &.active {
      color: #ef6800;
    }
  }
`;

export default Navigation;
