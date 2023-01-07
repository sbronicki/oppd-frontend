import { useState } from "react";
import Link, { NavLink } from "react-router-dom";
import type { MenuProps } from "antd";
import { Menu } from "antd";

const items: MenuProps["items"] = [
  {
    label: <NavLink to="/about">About</NavLink>,
    key: "about",
  },
  {
    label: <NavLink to="/">Home</NavLink>,
    key: "home",
  },
];

export default function Navigation() {
  const [current, setCurrent] = useState("home");
  const onClick: MenuProps["onClick"] = (e) => setCurrent(e.key);

  return (
    <Menu
      style={{ flexDirection: "row-reverse", paddingRight: "2.5rem" }}
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
}
