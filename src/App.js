import './App.css';
import BannerPurchase from './components/BannerPurchase';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Partner from './components/Partner';
import Product from './components/Product';
import Provide from './components/Provide';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Partner />
      <Provide />
      <Feature />
      <Product />
      <BannerPurchase />
      <Footer />
    </div>
  );
}

export default App;
