
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
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
  return (
    <div className="w-full h-full bg-black">
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
