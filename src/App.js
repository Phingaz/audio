import { Routes, Route } from 'react-router-dom'

import { Landing } from './pages/Landing';
import { Headphones } from './pages/Headphones';
import { Speakers } from './pages/Speakers';
import { Earphones } from './pages/Earphones';
import ScrollToTop from './components/Utilities/ScrollToTop';


function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/headphones' element={<Headphones />} />
        {/* <Route path='/headphones/mark-ii' element={<Mark2 />} />
        <Route path='/headphones/mark-i' element={<Mark1 />} />
        <Route path='/headphones/xx59' element={<Xx59 />} /> */}

        <Route path='/speakers' element={<Speakers />} />
        {/* <Route path='/speakers/zx9' element={<Zx9 />} />
        <Route path='/speakers/zx7' element={<Zx7 />} /> */}

        <Route path='/earphones' element={<Earphones />} />
        {/* <Route path='/earphones/yx1' element={<Yx1 />} /> */}

        {/* <Route path='/checkout' element={<Checkout />} /> */}
      </Routes>
    </div>
  );
}

export default App;
