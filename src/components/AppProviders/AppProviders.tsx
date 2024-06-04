'use client';

import { ReactNode } from 'react';
import { StyleProvider } from '@ant-design/cssinjs';

interface AppProvidersProps {
  children: ReactNode;
}

const AppProviders = ({ children }: AppProvidersProps) => {
  return <StyleProvider>{children}</StyleProvider>;
};

export default AppProviders;
