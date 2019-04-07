import React, { Component } from 'react'
import { DEFAULTCONFIGUREDVOTE } from './constants'
import './votesList.css'

class VotesList extends Component {

  showVoteQR(e, option) {
    e.preventDefault()
    console.log("Option: "+option.name+" was picked.")
    this.setState({
      currentActiveVote: option.name,
      currentActiveVoteInvoice: option.invoice
    })
  }

  constructor(props) {
    super(props)

    this.state = {currentActiveVote: `nothing`,
                  currentActiveVoteInvoice: null
                  }
    this.showVoteQR = this.showVoteQR.bind(this)
    this.response_google = ""
  }

  render() {
    fetch("http://localhost:8080/listInvoices")
      .then(res =>{ this.response_google = res } )
    console.log(this.response_google)


    let voteTitle = DEFAULTCONFIGUREDVOTE["title"]
    let voteOptions = DEFAULTCONFIGUREDVOTE["options"]
    let voteMade = false

    const activeConfiguredVote = this.props.activeConfiguredVote
    //if (activeConfiguredVote !== null) {
    //  voteTitle = activeConfiguredVote["title"]
    //  voteOptions = activeConfiguredVote["options"]
    //  voteMade = this.props.voteMade
    //}

    if (voteMade) {
      return (
        <div className="OptionsList container">
          <h2>Topic: { voteTitle }</h2> <br/>
          <h3 className="text-center"> You have already voted on the current topic! </h3>
        </div>
      )
    }

    return (
      <div className="OptionsList container">
          <h2>Topic: { voteTitle }</h2>
          <div className="qrCodeContainer text-center">
            { (this.state.currentActiveVoteInvoice) }
          </div>
          <div className="card-deck">
            {voteOptions.map((option, index) => {
            return (
              <button 
                className={this.state.currentActiveVote === option.name ? 'btn btn-block active' :"btn btn-block"}
                 onClick={(e) => this.showVoteQR(e, option)} >
              <h4 className="card-header">{ option.name }</h4>
              </button>
            )
            })}
          </div>
      </div>
    );
  }
}

export default VotesList
