import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Outlet } from 'react-router';

const Layout = () => {
  const menuRef = useRef(null);
  useEffect(() => {
    menuRef.current = document.body;
    menuRef.current.style.width = 'auto';
    menuRef.current.style.overflow = 'visible';
  }, []);
  return (
    <div className="relative flex flex-col min-h-screen bg-primary">
      <Header ref={menuRef} />
      <main className="flex flex-1 flex-col relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
