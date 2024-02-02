import React from 'react';
import { Tabs } from 'antd';
import Shop from './index';
import ShopCom from './ShoppingCard';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Home',
    children: <Shop/>,
  },
  {
    key: '2',
    label: 'Shopping card',
    children: <ShopCom/>,
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];
const TabsCom = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default TabsCom;