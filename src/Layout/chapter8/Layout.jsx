import Header from '../../components/chapter8/Header';
import Footer from '../../components/chapter8/Footer';

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
