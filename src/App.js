import Management from './Management';
import Calculator from './Calculator';
import EditBank from './EditBank';
import CreateBank from './CreateBank';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Management />}></Route>
      <Route path='/calculator' element={<Calculator />}></Route>
      <Route path='/create' element={<CreateBank />}></Route>
      <Route path='/banks/:id' element={<EditBank/>}></Route>
    </Routes>
  </BrowserRouter>  
  );
}

export default App;
