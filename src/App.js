import React, { lazy, Suspense } from 'react';
import './assets/styles/App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const ClientTestimonal = lazy(() => import('./components/ClientTestimonal'));
const HomeBody = lazy(() => import('./components/HomeBody'));
const HousePlans = lazy(() => import('./components/HousePlans'));
const TeamInfo = lazy(() => import('./components/TeamInfo'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const ContactPage = lazy(() => import('./components/ContactPage'));
const NotFound = lazy(() => import('./components/NotFound'));

export default function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Suspense fallback={<h1>Loading...</h1>}>
          <div className='app__container'>
            <Routes>
              <Route path='/' element={<HomeBody />} />
              <Route path='/house-plans' element={<HousePlans />} />
              <Route path='/clientele' element={<ClientTestimonal />} />
              <Route path='/our-team' element={<TeamInfo />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
}
