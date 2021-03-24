import './App.css';
import Navbar from './components/Navbar/Navbar';
import Seachbar from './components/Searchbar/Searchbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App_Layout">
      <Navbar />
      <Seachbar />
      <Footer />
    </div>
  );
}

export default App;
