// import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Introduction from './components/pages/Introduction';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Introduction />
      <Footer />
    </div>
  );
}

export default App;
