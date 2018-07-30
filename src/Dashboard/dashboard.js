import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

import './dashboard.css'
import Compose from './compose'
import Inbox from './inbox'
import Sent from './sent'

export class DashBoard extends Component{
  constructor(props){
    super(props)
    this.state= {showmail: false, sent:[], inbox:[],action:'Inbox', details:{}, showdetails:false, user:this.props.match.params.user };
    this.clickCompose= this.clickCompose.bind(this);
    this.clickAction= this.clickAction.bind(this);
    this.updateSent= this.updateSent.bind(this);
    this.updateInbox= this.updateInbox.bind(this);
    this.showDetails= this.showDetails.bind(this);    
  }

  clickCompose(){
    this.setState({showmail: true, showdetails:false})
  }

  clickAction( action){
    this.setState({showmail: false, showdetails:false , action:action})
  }

  showDetails(msgObj){
    this.setState({details:msgObj, showdetails:true});
  }

  updateInbox(msgObj){
    if(msgObj != undefined){   
      let preinbox= this.state.inbox;
      preinbox.push(msgObj);
      this.setState({inbox:preinbox});
      this.setState({showmail:false}) 
    }        
  }

  updateSent(msgObj){
    if(msgObj.msg != null && msgObj != undefined){   
      let present= this.state.sent;
      present.push(msgObj);
      this.setState({sent:present});
      this.setState({showmail:false}) 
    }
    else console.log("Invalid Response");        
  }

  render(){
    return (
        <div className='db-wrapper' >
          <div className='db-container' >
            <div className='db-actions' >
              <div id='compose' onClick={() => this.clickCompose()} > + New Message </div>
              <div className='action-list' >
                <button onClick={() => this.clickAction('Inbox')} > <FontAwesome name='inbox' /> Inbox </button>
                <button onClick={() => this.clickAction('Sent')} > <FontAwesome name='paper-plane-o' /> Sent </button>
                <button onClick={() => this.clickAction('Inbox')} > <FontAwesome name='save' /> Drafts </button>
                <button onClick={() => this.clickAction('Inbox')} > <FontAwesome name='trash-o' /> Trash </button>
                <button onClick={() => this.clickAction('Inbox')} > <FontAwesome name='archive' /> Archive </button>
              </div>
            </div>
            <div className='db-content' >
              <div className='header' >
                <div className='search'>
                  <input type='text' id='txtSearch' placeholder='Seacrh for Mail...' />
                </div>
                <div className='filter'>
                  <select id='ddFilter' > 
                    <option> Unread </option> 
                    <option> Important </option> 
                    <option> Stared </option> 
                    <option> Read </option> 
                  </select>
                </div>
                <div className='profile'>
                  {this.state.user} <FontAwesome name='user-circle-o' size='2x' /> 
                </div>
              </div>
              <div className='main' >
                { 
                  this.state.showdetails
                  ? this.state.details.to === undefined
                    ? <div className='details' > <p> {this.state.details.Complain_product_class} </p> <p> {this.state.details.response} </p> </div>
                    : <div> <p> {this.state.details.to} </p> <p> {this.state.details.msg} </p> </div>
                  : this.state.showmail 
                    ? <div className='mail'>
                        <Compose returnMail={this.updateSent} returnRes={this.updateInbox} user={this.state.user} />                  
                      </div>
                    : <div className='list' >
                        { this.state.action === 'Inbox'
                          ? <Inbox inMsgs={this.state.inbox} showMsg={this.showDetails} />
                          : <Sent sentMsgs = {this.state.sent} showMsg={this.showDetails} />
                        }
                      </div>
                }                
              </div>
            </div>
          </div>
        </div>
    )
  }
}