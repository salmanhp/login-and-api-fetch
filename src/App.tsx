import { Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Data from './component/Data';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/data' element={<Data />} />
    </Routes>
  )
}

export default App;
