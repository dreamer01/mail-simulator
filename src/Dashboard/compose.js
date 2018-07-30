import React, { Component } from 'react';
import './compose.css';

class Compose extends Component {
  constructor(props){
    super(props)
    this.state={to:null,subject:null,msg:null,from:this.props.user}
    this.changeRecipent=this.changeRecipent.bind(this)
    this.changeSubject=this.changeSubject.bind(this)
    this.changeMessage=this.changeMessage.bind(this)
    this.sendMsg=this.sendMsg.bind(this)
  }

  changeMessage(e){
    this.setState({msg:e.target.value})
  }

  changeRecipent(e){
    this.setState({to:e.target.value})
  }

  changeSubject(e){
    this.setState({subject:e.target.value})
  }

  sendMsg(){
    console.log(this.state);

    fetch(`https://3140322b.ngrok.io`,{
        method: "POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(this.state)
      }).then(response=> {
          return(response.json());
      }).catch(e => console.log(e)  
      ).then(data => {
        //Returning Response from Model to Inbox DB
        //console.log(data);
        this.props.returnRes(data);
      }) 

    //Sending User Message For Sent DB.   
    this.props.returnMail(this.state);
  }

  render() {
    return (
      <div className="cp-wrapper">
        <input onChange={(text) => this.changeRecipent(text)} type='text' placeholder='Recipents' />
        <input onChange={(text) => this.changeSubject(text)} type='text' placeholder='Subject' />
        <textarea onChange={(text) => this.changeMessage(text)} />
        <button onClick={() => this.sendMsg() } > Send </button>
      </div>
    );
  }
}

export default Compose;
