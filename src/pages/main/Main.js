import './../reset-styles.css';
import './Main.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MenuHead from '../menu-header/MenuHead';
import MenuBtn from '../menu-buttons/MenuBtn';
import CHead from '../c/c-header/CHead';
import CBlock from '../c/c-buttons/CBlock';
import EndPage from '../end-page/EndPage';


function Main() {
  return (
    <div className="main-container">
      <Router>
        <Routes>
          <Route path='/' element={<><MenuHead /><MenuBtn /></>} />
          <Route path='/c' element={<><CHead/><CBlock/></>} />
          <Route path='/result' element={<EndPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default Main;
