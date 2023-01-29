import { Alchemy, Network } from 'alchemy-sdk';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import './App.css';
import { Block, Blocks, Home, Transaction, Transactions } from './pages';
import { About } from './pages/about';

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};


// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
export const alchemy = new Alchemy(settings);


const router = createBrowserRouter(createRoutesFromElements(
  <>
      <Route exact path='/' element={<Home />} />
      <Route path='about' element={<About />}/>
      <Route path='blocks' element={<Blocks />} />
      <Route path='blocks/:id' element={<Block />}/>
      <Route path='transactions' element={<Transactions />} />
      <Route path='transactions/:id' element={<Transaction />}/> 
  </>
));


function App() {

  return <RouterProvider router={router} />

}

export default App;
