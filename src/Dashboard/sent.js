
import React, {Component} from 'react'

import './sent.css'

export default class Inbox extends Component{
    constructor(props){
      super(props)
      this.state= {messages: this.props.sentMsgs}
    }

    render(){
        return(
          <div className='out-wrapper' >
            {
              this.state.messages.length > 0 
              ? this.state.messages.map(obj => {
              return (
                <div className='card'  key={1} onClick={() => this.props.showMsg(obj) } >
                  <p className='cd-to' > {obj.to} </p>
                  <div className='msg-card'>
                    <p className='cd-subject' > {obj.subject} </p>
                    <p className='cd-msg' > {obj.msg} </p>
                  </div>
                </div> )            
              })
              : <p> No message to display. Compose and send a message now. </p>
            }            
          </div>
        )
    }
}