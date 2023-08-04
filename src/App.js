import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Landing } from './pages/Landing';
import { Headphones } from './pages/Headphones';
import { Speakers } from './pages/Speakers';
import { Earphones } from './pages/Earphones';

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/headphones", element: <Headphones /> },
  { path: "/speakers", element: <Speakers /> },
  { path: "/earphones", element: <Earphones /> },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
