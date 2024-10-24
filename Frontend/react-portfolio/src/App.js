import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import Aboutme from './components/Aboutme'
function App() {
  return (
  <>
  <Routes>
    <Route path='/' element={<Layout/>} ></Route>
    <Route path='/aboutme' element={<Aboutme/>}></Route>
  </Routes>
  </>
  );
}
console.log(App);
export default App;
