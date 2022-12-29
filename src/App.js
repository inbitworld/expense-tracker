import { Routes, Route } from 'react-router-dom'
import Home from './Components/Pages/Home.js'
import About from './Components/Pages/About.js'
import Navbar from './Components/Pages/Navbar.js';
import Expense from './Components/Pages/Expense.js';
import Expenselist from './Components/Pages/Expenselist.js';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/expense' element={<Expense />}></Route>
        <Route path='/expenselist' element={<Expenselist />}></Route>

      </Routes>
    </>
  );
}

export default App;
