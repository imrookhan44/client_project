import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Pets from './pages/Categories/pets/Pets'
import Appliances from './pages/Categories/appliances/Appliances'
import Business from './pages/Categories/business/Business'
import Realstate from './pages/Categories/realstate/Realstate'
import SecondHand from './pages/Categories/secondHand/SecondHand'
import Vehicle from './pages/Categories/vehicle/Vehicle'
import Private from './pages/Private/Private';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import VerifyEmail from './pages/Register/VerifyEmail';
import ViewItem from './pages/ViewItem/ViewItem';
import Shipping from './pages/shipping/Shipping';
import Help from './pages/help/Help';
import DeliveryHelp from './pages/help/DeliveryHelp';
import PaymentHelp from './pages/help/PaymentHelp';
import Footer from './components/Footer';
import ResetPassword from './pages/Login/ResetPassword';
import data from './pages/Chat/chat.json';
import ChatPage from './pages/Chat/ChatPage';
import { useEffect } from 'react';
import MobileTopNavBar from './components/MobileTopNavBar';
import NavBarFooter from './components/NavBarFooter';
function App() {
  const { conversations, users } = data;

  return (
    <div className="app">
      <Router>
        <Navbar />
        <MobileTopNavBar />
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/home' element={< Home />}></Route>
          <Route exact path='/search' element={<Search />}></Route>
          <Route exact path='/pets' element={<Pets />}></Route>
          <Route exact path='/appliances' element={<Appliances />}></Route>
          <Route exact path='/business' element={<Business />}></Route>
          <Route exact path='/realstate' element={<Realstate />}></Route>
          <Route exact path='/secondHand' element={<SecondHand />}></Route>
          <Route exact path='/vehicle' element={<Vehicle />}></Route>
          <Route exact path='/viewItem' element={<ViewItem />}></Route>
          <Route exact path='/private/*' element={<Private />}></Route>
          <Route exact path='/login' element={< Login />}></Route>
          <Route exact path='/resetPassword' element={< ResetPassword />}></Route>
          <Route exact path='/register' element={< Register />}></Route>
          <Route exact path='/verifyEmail' element={< VerifyEmail />}></Route>
          <Route exact path='/resetPassword' element={< ResetPassword />}></Route>
          <Route exact path='/shipping' element={< Shipping />}></Route>
          <Route exact path='/help' element={< Help />}></Route>
          <Route exact path='/deliveryHelp' element={< DeliveryHelp />}></Route>
          <Route exact path='/paymentHelp' element={< PaymentHelp />}></Route>
          <Route exact path='/chat/*' element={<ChatPage conversations={conversations} users={users} />}></Route>
        </Routes>



        <NavBarFooter />
        <Footer />
      </Router>

    </div>
  );
}

export default App;
<Footer />