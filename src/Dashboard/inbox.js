
import React, {Component} from 'react'

import './inbox.css'

export default class Inbox extends Component{
    constructor(props){
      super(props)
      this.state= {messages: this.props.inMsgs}
    }

    render(){
        return(
          <div className='in-wrapper' >
            {
              this.state.messages.length > 0 
              ? this.state.messages.map(obj => {
              return (
                <div className='card'  key={1} onClick={() => this.props.showMsg(obj) } >
                  <p className='cd-to' > Bank Support </p>
                  <div className='msg-card'>
                    <p className='cd-subject' > {obj.Complain_product_class} </p>
                    <p className='cd-msg' > {obj.response} </p>
                  </div>
                </div> )            
              })
              : <p> The Inbox is empty. No message to display. </p>
            }            
          </div>
        )
    }
}