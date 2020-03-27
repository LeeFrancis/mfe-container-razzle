import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "discover.medical.react-component-library";

const Menu = props => {
  const { isFetching, menu } = props;

  return isFetching ? (
    <ul>
      <li>Loading...</li>
    </ul>
  ) : (
    renderMenu(menu)
  );
};

const renderMenu = menu => {
  return (
    <Navigation>
      <Navigation.Item
        linkComponent={Link}
        linkProps={{ to: "/" }}
        linkText="Home"
      />
      <Navigation.Item
        linkComponent={Link}
        linkProps={{ to: "/dhhome" }}
        linkText="DH Home"
      />
      <Navigation.Item
        linkComponent={Link}
        linkProps={{ to: "/detail" }}
        linkText="Drug Detail"
      />
      <Navigation.Item
        linkComponent={Link}
        linkProps={{ to: "/an:dh:t915761" }}
        linkText="Skills"
      />
      {/* Dont really need this       
      {menu.map(menuItem => (
        <Navigation.Item
          key={menuItem.id}
          linkComponent={Link}
          linkProps={{ to: menuItem.path }}
          linkText={menuItem.label}
        />
      ))} */}
    </Navigation>
  );
};
export default Menu;
