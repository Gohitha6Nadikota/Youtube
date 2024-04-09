
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import {useSelector} from "react-redux";
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Watchpage from './components/Watchpage';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element:<MainContainer/>
      },
      {
        path: "/watch",
        element:<Watchpage/>
      }
    ]
  }
])
function App() {
  const isDarkMode = useSelector(store => store.mode.darkmode);
  return (
    <div className={`w-full h-full ${isDarkMode? 'bg-black':'bg-white'}`} >
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
