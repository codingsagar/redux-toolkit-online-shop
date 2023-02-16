import Products from './components/Products';
import Cart from './components/Cart';
import Root from './components/Root';

import { createBrowserRouter ,createRoutesFromElements, Route,RouterProvider} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/redux-toolkit-online-shop" element={<Root/>} errorElement={<h1 className='text-danger'>ERROR</h1>}>
      <Route path="/redux-toolkit-online-shop" index element={<Products />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
  
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
