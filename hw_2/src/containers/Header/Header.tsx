import { HeaderStyled, NavLinkCustom } from "./styles";

import { ROUTES } from "../../constants/routes";

export const Header = () => {
  const links = [
    {
      id: 1,
      href: ROUTES.HOME,
      children: "Home",
    },
    {
      id: 2,
      href: ROUTES.PRESENTATION,
      children: "Presentation",
    },
  ];

  return (
    <HeaderStyled>
      {links.map(({ id, href, children }) => (
        <NavLinkCustom key={id} to={href}>
          {children}
        </NavLinkCustom>
      ))}
    </HeaderStyled>
  );
};
