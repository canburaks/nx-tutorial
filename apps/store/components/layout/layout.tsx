// apps/store/components/layout/layout.tsx
/* eslint-disable-next-line */
/* eslint-disable @next/next/no-html-link-for-pages */

import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-80vh">{children}</main>
      <Footer />
    </>
  );
}


