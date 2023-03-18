import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router/router';

function App() {
  return (
    <div>
      <h1 className='text-4xl font-bold text-indigo-700 text-center'>Demo Task Web IT Rangpur</h1>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
