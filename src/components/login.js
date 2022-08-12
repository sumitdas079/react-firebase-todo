import React from 'react'
import { signInWithGoogle } from '../firebase'
function Login() {

  return (
    <div className='container-fluid d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
      <div className='row text-center d-flex aligns-items-center'>
        <p>Sign in with Google to continue</p>
        <button onClick={signInWithGoogle} type='button' className='btn btn-primary'><i class="bi bi-google"/>   Sign in with Google</button>
      </div>
    </div>
  )
}

export default Login