import React, { useState } from "react";
import { HomeOutlined, InfoCircleOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

type Props = {
  URL: string;
  setURL: (URL: string) => void;
};

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: "About",
    key: "about",
    icon: <InfoCircleOutlined />,
  },
];

const Navigation: React.FC<Props> = (props: Props) => {
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    props.setURL(e.key);
    navigate(e.key);
  };

  return (
    <Menu
      style={{
        display: "flex",
        justifyContent: "center",
      }}
      onClick={onClick}
      selectedKeys={[props.URL]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Navigation;
