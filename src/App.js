import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { AuthProvider } from 'react-auth-kit'
import Navbar from "./components/Navbar";
import Amis from "./pages/Amis";
import Connexion from "./pages/Connexion";
import Creation from "./pages/Creation";
import Find from "./pages/Find";
import Home from "./pages/Home";
import Infos from "./pages/Infos";

function App() {
  return (
    <AuthProvider authType = {'cookie'}
                  authName={'_auth'}>
        <BrowserRouter>
        <div className="background"></div>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/find" Component={Find} />
          <Route path="/infos" Component={Infos} />
          <Route path="/amis" Component={Amis} />
          <Route path="/creation" Component={Creation} />
          <Route path="/connexion" Component={Connexion} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
