import {
  HeaderContainer,
  LogoIcon,
  LogoLink,
  LogoText,
  NavigateLink,
  NavigateList,
} from "./Header.styled";
import { AuthNav } from "../AuthNav/AuthNav";
import { useAuth } from "../../hooks/useAuth";
import { UserMenu } from "../UserMenu/UserMenu";

function Header({ toggleTheme }) {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderContainer>
      <div>
        <LogoLink to="/">
          <LogoIcon></LogoIcon>
          <LogoText>LearnLingo</LogoText>
        </LogoLink>
      </div>
      <nav>
        <NavigateList>
          <li>
            <NavigateLink to="/" $activeClassName="active">
              Home
            </NavigateLink>
          </li>
          <li>
            <NavigateLink to="/teachers" $activeClassName="active">
              Teachers
            </NavigateLink>
          </li>
          <li>
            {isLoggedIn && (
              <NavigateLink to="/favorites" $activeClassName="active">
                Favorites
              </NavigateLink>
            )}
          </li>
        </NavigateList>
      </nav>

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderContainer>
  );
}
export default Header;
