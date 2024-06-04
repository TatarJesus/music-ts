'use client';

import { Footer } from 'antd/es/layout/layout';
import styled from 'styled-components';

const Foot = () => {
  return <CustomFooter style={{ backgroundColor: '#1b1b1b' }}></CustomFooter>;
};

export default Foot;

const CustomFooter = styled(Footer)`
  text-align: center;
  color: #fff;
  height: 80px;
  background-color: #1b1b1b;
`;
