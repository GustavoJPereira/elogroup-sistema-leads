import './App.css';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './components/pages/Signin';
import LeadsTable from './components/pages/LeadsTable';
import SaveLeads from './components/pages/SaveLeads';
import TesteMap from './components/pages/TesteMap';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path='/' element={<Signin/>} />
          <Route exact path='/leads' element={<LeadsTable/>}/>
          <Route exact path='/saveleads' element={<SaveLeads/>} />
          <Route exact path='/testemap' element={<TesteMap/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
