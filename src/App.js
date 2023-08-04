import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Landing } from './pages/Landing';
import { Headphone } from './pages/Headphone';

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/headphones", element: <Headphone /> },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
