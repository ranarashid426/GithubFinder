import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import NotFound from './pages/NotFound'
import Index from './pages/Index'
import About from './pages/About'
import Alert from "./components/layout/Alert";

import {BrowserRouter as Router,Route,Routes } from "react-router-dom";
import { GithubProvider } from "./context/github/GithubContext";
import {AlertProvider} from "./context/alert/AlertContext"
import User from "./components/users/User";

function App() {
  return (
    <GithubProvider>
    <AlertProvider>
    <Router>        
        <div className="flex flex-col justify-between h-screen">
          <Navbar/>

          <main className="container mx-auto px-3 pb-12">
            <Alert/>
            <Routes>
              <Route path="/" element={<Index/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/user/:login" element={<User/>}/>
              <Route path="/notfound" element={<NotFound/>}/>
              <Route path="/*" element={<NotFound/>}/>
            </Routes>
          </main>
          <Footer/>
        </div>

    </Router>
    </AlertProvider>
    </GithubProvider>
  );
}

export default App;
