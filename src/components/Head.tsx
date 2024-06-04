'use client';

import { Header } from 'antd/es/layout/layout';
import styled from 'styled-components';

const Head = () => {
  return <CustomHeader></CustomHeader>;
};

export default Head;

const CustomHeader = styled(Header)`
  text-align: center;
  color: #fff;
  height: 64px;
  padding-inline: 48px;
  line-height: 64px;
  background-color: #1b1b1b;
`;
