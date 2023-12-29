import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';

// import {
//   QueryClient,
//   QueryClientProvider,
// } from '@tanstack/react-query';


// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

      <HelmetProvider>
        {/* <div className='max-w-screen-xl mx-auto'> */}
        <RouterProvider router={router} />
        {/* </div> */}
      </HelmetProvider>  
    </QueryClientProvider>
  </React.StrictMode>,
  

)


