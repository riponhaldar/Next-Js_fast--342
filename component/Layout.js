import Footer from './Navbar/Footer';
import Navbar from './Navbar/Navbar';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
