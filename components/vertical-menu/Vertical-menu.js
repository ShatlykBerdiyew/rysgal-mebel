import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import Image from "next/image";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../store/urls";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const onClick = (e) => {
  console.log("click", e);
  Router.push(`/category/${e.key}`);
};

const VerticalMenu = () => {
  const { category } = useSelector((state) => state);
  const [cats, setCats] = useState([]);
  useEffect(() => {
    let ttt = [];
    category.data?.map((cat) => {
      let ar = [];
      cat.subcategories.map((su) => {
        ar.push(getItem(su.title_tm, su.id));
      });
      ttt.push(getItem(cat.title_tm, cat.id, <SettingOutlined />, ar));
    });
    setCats(ttt);
  }, [category]);

  return (
    <Menu
      onClick={onClick}
      style={{
        width: 356,
        fontSize: "1.5rem",
      }}
      mode="vertical"
      items={cats}
    />
  );
};

export default VerticalMenu;
