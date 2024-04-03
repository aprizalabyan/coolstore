import React from 'react'
import HomeLayout from '../../layouts/home'
import BannerPurchase from '../../components/widget/BannerPurchase';
import Feature from '../../components/widget/Feature';
import Footer from '../../components/widget/Footer';
import Header from '../../components/widget/Header';
import Partner from '../../components/widget/Partner';
import Product from '../../components/widget/Product';
import Provide from '../../components/widget/Provide';

const Home = () => {
  const text = "daawdadawd"

  return (
    <HomeLayout>
      <Header />
      <Partner />
      <Provide />
      <Feature />
      <Product />
      <BannerPurchase />
      <Footer />
    </HomeLayout>
  )
}

export default Home