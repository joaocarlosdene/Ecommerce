import {createBrowserRouter} from 'react-router-dom'
import {Home} from './pages/home'
import {AddClients} from './pages/addclients'
import {AddProducts} from './pages/addproduct'
import {AddSales} from './pages/addsales'
import {Dashboard} from './pages/dashboard'
import {Login} from './pages/login'
import {Products} from './pages/products'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/addclients',
    element: <AddClients/>
  },
  {
    path: '/addproducts',
    element: <AddProducts/>
  },
  {
    path: '/addsales',
    element: <AddSales/>
  },
  {
    path: '/Dashboard',
    element: <Dashboard/>
  },
  {
    path: '/products',
    element: <Products/>
  }
])

export {router}