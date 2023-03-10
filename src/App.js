
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';


import { Route,Routes } from 'react-router-dom';
import Dashboard from './components.js/Dashboard';
import Colors from './components.js/Colors';
import Buttons from './components.js/Buttons';
import Cards from './components.js/Cards';
import Borders from './components.js/Borders';
import Animation from './components.js/Animations';
import Other from './components.js/Other';
import Login from './components.js/Login';
import Forgot from './components.js/Forgot';
import Registor from './components.js/Registor';
import Page from './components.js/Page';
import Blank from './components.js/Blank';
import Charts from './components.js/Charts';
import Tables from './components.js/Tables';


function App() {
  return (
    <div className="App">
<Routes>

<Route path='/' element={<Dashboard/>}/>
<Route path='/colors' element={<Colors/>}/>
<Route path="/buttons" element={<Buttons/>}/>
<Route path="/cards" element={<Cards/>}/>
<Route path='/borders' element={<Borders/>}/>
<Route path="/animations" element={<Animation/>}/>
<Route path="/other" element={<Other/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/forgot" element={<Forgot/>}/>
<Route path='/registor' element={<Registor/>}/>
<Route path='/page' element={<Page/>} />
<Route path='/blank' element={<Blank/>}/>
<Route path='/charts' element={<Charts/>}/>
<Route path='/tables' element={<Tables/>}/>

</Routes>
    </div>
  );
}

export default App;
