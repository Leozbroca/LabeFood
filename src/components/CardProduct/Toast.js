import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toast() {
  const notify = () => toast.success("Adicionado");

  return (

    <div>

      <button onClick={notify}>Notify!</button>

      <ToastContainer 
        position='top-center' autoClose={1000}
      />
    </div>
  );
}
export default Toast;