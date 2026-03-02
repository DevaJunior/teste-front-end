import React from 'react';
import './styles/global.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import CategoryList from './components/CategoryList';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Banner />

        <div className="container">
          <CategoryList />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;