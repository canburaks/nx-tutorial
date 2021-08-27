/* eslint-disable-next-line */
import { Navbar, Footer } from '@canburaks/tailwind-ui';

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
