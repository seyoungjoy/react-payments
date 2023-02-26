import React from 'react';
import './styles/index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaymentCardList from './pages/PaymentCardList';
import PaymentCardRegister from './pages/PaymentCardRegister';
import Layout from './components/common/Layout';
import { CardProvider } from './context/CardContext';

function App() {
  return (
    <BrowserRouter>
      <CardProvider>
        <Routes>
          <Route path={'/'} element={<Layout />}>
            <Route index element={<PaymentCardList />} />
            <Route path={'/register'} element={<PaymentCardRegister />} />
          </Route>
        </Routes>
      </CardProvider>
    </BrowserRouter>
  );
}

export default App;
