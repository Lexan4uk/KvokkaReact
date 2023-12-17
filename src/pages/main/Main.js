import './../reset-styles.css';
import './Main.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MenuHead from '../menu-header/MenuHead';
import MenuBtn from '../menu-buttons/MenuBtn';
import CBlock from '../c/c-block/CBlock';
import EndPage from '../end-page/EndPage';


function Main() {
  return (
    <div className="main-container">
      <Router>
        <Routes>
          <Route path='/' element={<><MenuHead /><MenuBtn /></>} />
          <Route path='/c' element={<CBlock/>} />
          <Route path='/result' element={<EndPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default Main;
