import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Amis from "./pages/Amis";
import Connexion from "./pages/Connexion";
import Creation from "./pages/Creation";
import Find from "./pages/Find";
import Home from "./pages/Home";
import Infos from "./pages/Infos";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
      <div className="background"></div>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/find" Component={Find} />
          <Route path="/infos" Component={Infos} />
          <Route path="/amis" Component={Amis} />
          <Route path="/creation" Component={Creation}/>
          <Route path="/connexion" Component={Connexion} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;
