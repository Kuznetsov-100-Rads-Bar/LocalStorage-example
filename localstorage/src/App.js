import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ContactPage from './pages/ContactPage';
import { useState } from 'react';
import NavbarComponent from './components/NavBar.component';

function App() {
  const [isLogged, setIsLogged] = useState(Boolean(localStorage.getItem('userData')));
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')) || {});

  return (
    <>
      <Router>
        <NavbarComponent setIsLogged={setIsLogged} setUserData={setUserData} isLogged={isLogged} />
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage />} />
            <Route path='/contact' element={<ContactPage />} />

            {!isLogged ?
              <>
                <Route path='/signin' element={<SignInPage setIsLogged={setIsLogged} setUserData={setUserData} />} />
                <Route path='/signup' element={<SignUpPage />} />
              </>
              : <>
                <Route path='profile'>
                  <Route index element={<ProfilePage userData={userData} />} />
                  <Route path='change-password'>
                    <Route index element={<pre>Change password index page</pre>} />
                    <Route path='success' element={<pre>Change password success page</pre>} />
                  </Route>
                </Route>
              </>}
            <Route path='*' element={<Navigate to={"/"} replace={true} />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
