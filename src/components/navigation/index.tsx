import { useState } from "react";
import Link, { NavLink, useLocation } from "react-router-dom";
import type { MenuProps } from "antd";
import { Menu } from "antd";

const items: MenuProps["items"] = [
  {
    label: <NavLink to="/">Home</NavLink>,
    key: "home",
  },
  {
    label: <NavLink to="/about">About</NavLink>,
    key: "about",
  },
];

export default function Navigation() {
  const location = useLocation();

  const [current, setCurrent] = useState(
    location.pathname.replace("/", "") || "home"
  );
  const onClick: MenuProps["onClick"] = (e) => setCurrent(e.key);

  return (
    <Menu
      style={{ justifyContent: "center", backgroundColor: "transparent" }}
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
}
