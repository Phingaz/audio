import { Routes, Route } from 'react-router-dom'

import { Landing } from './pages/Landing';
import { Headphones } from './pages/headphones/Headphones';
import { Speakers } from './pages/speakers/Speakers';
import { Earphones } from './pages/earphones/Earphones';
import ScrollToTop from './components/Utilities/ScrollToTop';

import { MarkI } from './pages/headphones/MarkI';
import { MarkII } from './pages/headphones/MarkII';
import { XX59 } from './pages/headphones/XX59';
import { ZX9 } from './pages/speakers/ZX9';
import { ZX7 } from './pages/speakers/ZX7';
import { YX1 } from './pages/earphones/YX1';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/headphones' element={<Headphones />} />
        <Route path='/headphones/mark_i' element={<MarkI />} />
        <Route path='/headphones/mark_ii' element={<MarkII />} />
        <Route path='/headphones/xx59' element={<XX59 />} />

        <Route path='/speakers' element={<Speakers />} />
        <Route path='/speakers/zx9' element={<ZX9 />} />
        <Route path='/speakers/zx7' element={<ZX7 />} />

        <Route path='/earphones' element={<Earphones />} />

        <Route path='/earphones/yx1' element={<YX1 />} />
      </Routes>
    </div>
  );
}

export default App;
