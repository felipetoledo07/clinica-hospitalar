function Login() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='login-form-wrap'>
            <h2>Login</h2>
            <form>
              <input type='text' name='username' placeholder='Username' required/>
              <input type='password' name='password' placeholder='Password' required/>
              <button type='submit' className='btn-login'>Login</button>
            </form>
          </div>
        </header>
      </div>
    );
  }

  export default Login;