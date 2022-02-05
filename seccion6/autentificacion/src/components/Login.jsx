import React from 'react';

const Login = () => {
  return(
    <div className='row mt-5'>
        <div className='col'></div>
        <div style={{textAlign:'center'}} className='col'>
            <h2>Login</h2>
            <form className='form-group mt-4'>
                <input
                    className='form-control'
                    placeholder='Introduce el email'
                    type="text" />
                <input
                    className='form-control mt-4'
                    placeholder='Introduce la constraseña'
                    type="text" />
                <input
                    className='btn btn-dark col-12 mt-4'
                    value='Registrar Usuario'
                    type="submit" />
            </form>
        </div>
        <div className='col'></div>
    </div>
  );
};

export default Login;
