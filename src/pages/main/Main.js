import './../reset-styles.css';
import './Main.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MenuHead from '../menu-header/MenuHead';
import MenuBtn from '../menu-buttons/MenuBtn';


function Main() {
  return (
    <div className="main-container">
      <Router>
        <Routes>
          <Route path='/' element={<><MenuHead /><MenuBtn /></>} />

        </Routes>
      </Router>
    </div>
  );
}

export default Main;
