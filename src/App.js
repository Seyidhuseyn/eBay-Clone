import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Header from './components/Header';
import Container from './components/Container';
import Category from './components/Category';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <Category />
    <Container />
    <Footer />
    </>
  );
}

export default App;
