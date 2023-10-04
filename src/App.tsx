import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/layouts/header';
import Contato from './components/pages/contato';
import Home from './components/pages/home';
import Loja from './components/pages/loja';
import Referencia from './components/pages/referencia';
import Social from './components/pages/social';
import NotFound from './components/pages/notFound';
// import Footer from './components/layouts/footer';

function App() {
  return (
    <div className='container'>
    <Router>
        <Header /> {/*header fixo */}
        <div className='links-rotas'>
        <Routes>
          <Route path="/" element={<Home/>}/>                  
          <Route path="/referencias"  element={<Referencia/>}/>
          <Route path="/social" element={<Social/>}/>             {/*o que vai ser renderizado pela url (path)*/}
          <Route path="/loja"  element={<Loja/>}/>                
          <Route path="/contato"  element={<Contato/>}/>
          <Route path="*"  element={<NotFound/>}/>              
        </Routes>
        </div>
        {/* <Footer/> footer fixo */}
    </Router>
    </div>
  );
}
export default App;