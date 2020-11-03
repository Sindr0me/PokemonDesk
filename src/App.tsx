import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import s from './App.module.scss';

const App = (): JSX.Element => {
  return (
    <div className={s.app}>
      <Header />
      <div className={s.content} />
      <Footer />
    </div>
  );
};
export default App;
