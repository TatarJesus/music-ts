'use client';

import { Button, Layout, Menu, MenuProps } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import { ReactNode, useCallback, useState } from 'react';
import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import Head from '@/components/Head';
import styled from 'styled-components';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: '1', icon: <HomeOutlined />, label: 'Главная' },
  { key: '2', icon: <SearchOutlined />, label: 'Поиск' },
];

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = useCallback(() => {
    setCollapsed((prevState) => !prevState);
  }, []);

  return (
    <StyledLayout>
      <CustomSider style={{ backgroundColor: '#000' }} collapsed={collapsed}>
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            marginBottom: 16,
            backgroundColor: '#444444',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          style={{ backgroundColor: 'transparent' }}
        />
      </CustomSider>
      <StyledContent>
        <Head />
        {children}
      </StyledContent>
    </StyledLayout>
  );
};

export default Main;

const CustomSider = styled(Sider)`
  padding: 15px 5px;
  color: #fff;
  background-color: #000000;
  width: 350px;
`;

const StyledLayout = styled(Layout)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-grow: 1;
  background-color: #121212;
`;

const StyledContent = styled(Content)`
  text-align: center;
  min-height: 120px;
  line-height: 120px;
  color: #fff;
  background-color: #121212;
  display: flex;
  flex-direction: column;
`;
