import './App.scss';

// Pages
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Main from './components/Main/Main';
import MainSenter from './components/Main-senter/Main-senter';
import MainBottom from './components/Main-bottom/Main-boottom';
import Futer from './components/Futer/Futer';
import Widget from './components/Widget/widget';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <> 
      <Header/>
      <Hero/>
      <Main/>
      <MainSenter/>
      <MainBottom/>
      <Futer/>
      <Widget/>
      <Footer/>
    </>
  );
}

export default App;
