import {createBrowserRouter} from 'react-router-dom'
import {Home} from './pages/home'
import {AddClients} from './pages/addclients'
import {AddProducts} from './pages/addproduct'
import {AddSales} from './pages/addsales'
import {Dashboard} from './pages/dashboard'
import {Login} from './pages/login'
import {Products} from './pages/products'

import { RouteProtection } from './services/routeProtection'

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
    element: <RouteProtection><AddClients/></RouteProtection>
  },
  {
    path: '/addproducts',
    element: <RouteProtection><AddProducts/></RouteProtection>
  },
  {
    path: '/addsales',
    element: <RouteProtection><AddSales/></RouteProtection>
  },
  {
    path: '/Dashboard',
    element: <RouteProtection><Dashboard/></RouteProtection>
  },
  {
    path: '/products',
    element: <Products/>
  }
])

export {router}