// App.js
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from './common/Header';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import { useSelector } from 'react-redux';
import { StorecontextProvider } from './context/StoreContext'; // Note the correct spelling and case
import Search from './pages/Search/Search';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';



// Import the context provider
import Home from './components/Home/Home';


function App() {
  const isLoggedIn = useSelector((info) => info.isLoggedIn);
  const currentPath = window.location.pathname;
  return (
    <Fragment>

    <StorecontextProvider> {/* Wrap your routes with the context provider */}
      <div>
       <Router>
          <div>
            <Header />
          </div>
          <Routes>
            <Route path='/' element={!isLoggedIn ? <Home /> : <Navigate to={currentPath} />} exact />
            <Route path='/login' element={!isLoggedIn ? <Login /> : <Navigate to={currentPath} />} exact />
            <Route path='/sign-up' element={!isLoggedIn ? <SignUp /> : <Navigate to={currentPath} />} exact />
            <Route path='/dashboard' element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} exact />
            <Route path='/search' element={isLoggedIn ? <Search /> : <Navigate />} exact /> 
            <Route path='/cart' element={isLoggedIn ? <Cart /> : <Navigate />} exact /> 
            <Route path='/order' element={isLoggedIn ? <PlaceOrder /> : <Navigate />} exact /> 
          </Routes>
        </Router>
      </div>
    </StorecontextProvider>
    <Footer />
           </Fragment>
         

  );
}

export default App;
