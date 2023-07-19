import './App.css';
import NavBar from './components/navbar/NavBar';
import { Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Cards from './components/cardsection/Cards';
import Services from './components/services/Services';
import FAQ from './components/faq/FAQ';
import Theory from './components/theorysection/Theory';
import Start from './components/startpage/Start';
import SecondPage from './components/secondpage/SecondPage';
import ThirdPage from './components/ThirdPage/ThirdPage';



function App() {
  return (
    <div >

<Routes>
        <Route path="/" element={ <Start/> } />
        <Route path="/navbar" element={ <NavBar/> } />
        <Route path="/secondpage" element={ <SecondPage/> } />
        <Route path="/thirdpage" element={ <ThirdPage/> } />

      </Routes>
    </div>
  );
}

export default App;
