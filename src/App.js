import Test from './components/Navbar/Navbar';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';

import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
