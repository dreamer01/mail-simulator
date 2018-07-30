import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './login.css'
import { ImgPack } from './promo';

class Login extends Component{
  constructor(){
    super();
    this.state= {user: ''}
    this.onChange= this.onChange.bind(this)
  }

  onChange(e){
    this.setState({user:e.target.value});
  }

  render(){
  return (
    <div className="lg-wrapper" >
      <div className='lg-header' >
        Welcome to i-Mail
      </div>

      <div className='lg-container' >
        <div className='lg-promo' >
          <ImgPack/>
        </div>

        <form className='lg-form' >
          <div className='txtBox' >
            <input className='form-txt' id='username' type='email' placeholder=" Enter Email... " onChange={this.onChange} />
            <input className='form-txt' id="password" type='password' placeholder="Provide Password..." />
          </div>
          <div className='btnBox' >
            <Link to={`/dashboard/${this.state.user}`} ><button className='form-btn' id='btnSignin' > Login </button></Link>
            <button className='form-btn' id="btnSignup" > Register </button>
          </div>
          <div>
            In case you  <a href='#'> Forget Password </a>
          </div> 
        </form>
      </div>

      <div className='lg-footer' >Virtual Assistants to your rescue.</div>
    </div>
  )
}
}

export default Login;