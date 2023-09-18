import { ReactElement } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import App from '../App';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App/>} />
      {/* <Route path="*" element={<Error/>} /> */}
    </Route>
    
  )
)

export default function Router():ReactElement {
  return <RouterProvider router={router} />;
}