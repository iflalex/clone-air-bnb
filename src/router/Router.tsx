import { ReactElement } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import App from '../App';
import Explorer from 'src/views/Explorer';
import Favoris from 'src/views/Favoris';
import Voyages from 'src/views/Voyages';
import Messages from 'src/views/Messages';
import Profil from 'src/views/Profil';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App/>}>
        <Route index element={<Explorer/>} />
        <Route path="/Favoris" element={<Favoris/>} />
        <Route path="/Voyages" element={<Voyages/>} />
        <Route path="/Messages" element={<Messages/>} />
        <Route path="/Profil" element={<Profil/>} />
      </Route>
      {/* <Route path="*" element={<Error/>} /> */}
    </Route>
    
  )
)

export default function Router():ReactElement {
  return <RouterProvider router={router} />;
}