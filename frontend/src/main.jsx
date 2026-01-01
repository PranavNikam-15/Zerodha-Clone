import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import PricingPage from './components/pricing/PricingPage';
import Signup from './components/signup/Signup';
import Product from './components/products/ProductsPage';
import Support from './components/support/SupportPage';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/signup"} element={<Signup />} />
      <Route path={"/about"} element={<AboutPage />} />
      <Route path={"/pricing"} element={<PricingPage />} />
      <Route path={"/product"} element={<Product />} />
      <Route path={"/support"} element={<Support />} />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
