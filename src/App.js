import logo from './logo.svg';
import './App.css';
import {Header} from './Header/Header'
import {Menu} from './Menu/Menu'
import {Footer} from './Footer/Footer'
import { Banner } from './Banner/Banner';
import { Services } from './Services/Services';
import { Aboutus } from './Aboutus/Aboutus';
import { Testimonials } from './Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
      
      <Menu/>
      <Banner/>
      <Services/>
      <Aboutus/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
