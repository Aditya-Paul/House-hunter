import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import Router from './Routes/Router.jsx';
import Authprovider from './Provider/Authprovider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={Router}>
          <App />
        </RouterProvider>
      </div>
    </Authprovider>
  </React.StrictMode>,
)
