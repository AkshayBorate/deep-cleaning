
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './componenet/header/Header';

import HomePage from './pages/home/HomePage';
import Footer from './componenet/footer/Footer';

function App() {
  return (
   <>
   <Header/>
   <Outlet/>
   <Footer/>
   </>
  );
}

export default App;
