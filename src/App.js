
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Mystore from './utils/store';
import { Provider } from 'react-redux';
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
    <Provider store={Mystore}>
      <div className="bg-black w-full h-full">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
