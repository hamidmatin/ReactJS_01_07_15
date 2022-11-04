import React from 'react';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
