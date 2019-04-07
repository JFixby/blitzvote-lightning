import React, { Component } from 'react'
import { DEFAULTVOTERESULTS } from './constants'
import './votesTallyList.css'

class VotesTallyList extends Component {

  constructor(props) {
    super(props)

    // <---- Add a predetermined starting vote (i.e. what we voted for)
    // inside this.state.votesMade
    this.state = {votesMade: [], voteTitle: "", voteResult:""}
    this.scheduledAddVote = this.scheduledAddVote.bind(this)
    this.addVote = this.addVote.bind(this)
    this.addRandomVote = this.addRandomVote.bind(this)
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * Math.floor(max-min) + Math.floor(min))
  }

  // Periodically check if we have loaded all pre-made votes. If not, load one
  scheduledAddVote(){

    //console.log("scheduledAddVote runs")
    let localVotesMade = this.state.votesMade.length
    //console.log("localVotesMade: "+localVotesMade)
    //console.log("total votes: "+DEFAULTVOTERESULTS["votes"].length)

    let delay = this.getRandomInt(3000, 10000)
    //console.log("Delay chosen to be: "+delay)

    if (localVotesMade < DEFAULTVOTERESULTS["votes"].length)
    {
      setTimeout(function() {
        //console.log("adding a new vote")
        this.addRandomVote()
        this.scheduledAddVote()
      }.bind(this),
        delay
      )
    }
  }

  // Add a random vote from the default votes to the current tally
  addRandomVote()
  {
    //console.log("addRandomVote runs")
    // Loop over all default votes.
    // Check if the voter is in the current votes
    // Else, add them to the current votes
    for (let vote of DEFAULTVOTERESULTS["votes"])
    {
      //console.log("Current testing vote by: "+vote["voter"])
      let alreadyExists = false
      for (let addedVote of this.state.votesMade) {
        //console.log("Testing vote by: "+vote["voter"]+"against: "+addedVote["voter"])
        if (vote["voter"] === addedVote["voter"]) {
          alreadyExists = true
        }
      }
      if (!alreadyExists) // Doesnt match existing vote, add it
      {
        this.addVote(vote)
        return true // only add one vote!
      }

    }
  }

  // Add a vote to the current list of accepted votes
  addVote(vote)
  {
    let newVotesList = []
    for (let oldVote of this.state.votesMade) {
      newVotesList.push(oldVote)
    }
    newVotesList.push(vote)

    this.setState({
      voteTitle: this.state.voteTitle,
      votesMade: newVotesList,
      voteWinner: this.state.voteWinner
    })

    this.tallyVotes()
  }


  componentDidMount() {
  //console.log("componentDidMount runs")
  setTimeout(function() { //Start the timer
      this.scheduledAddVote()
  }.bind(this), 1000)
  }

  tallyVotes() {
    let votesMade = this.state.votesMade

    // Tally the votes
    let voteTally = {}
    for (let vote of votesMade) {
      if (!voteTally[vote.vote]) { voteTally[vote.vote] = 1} else {voteTally[vote.vote] += 1}
    }

    // Count the highest
    // TODO: This only accepts a clear winner, not a tie
    let highestVote = ''
    let highestVoteCount = 0
    for (let option in voteTally) {
      if (voteTally[option] === highestVoteCount){
        highestVote = "Tie!"
      }
      if (voteTally[option] > highestVoteCount) {
        highestVoteCount = voteTally[option]
        highestVote = option
      }
    }

    this.setState({
      voteTitle: this.state.voteTitle,
      votesMade: this.state.votesMade,
      voteWinner: highestVote
    })

  }

  render() {

    // TODO: Load this from server somehow
    let voteTitle = DEFAULTVOTERESULTS["title"]
    let votesMade = DEFAULTVOTERESULTS["votes"]

    return (
      <div className="OptionsList container">
          <h2>Topic: { voteTitle }</h2>
          <table className="table table-dark">
            <thead className="thead-dark">
              <tr> 
                <th scope="col">Vote</th>
                <th scope="col">Voter</th>
              </tr>
            </thead>
            {this.state.votesMade.map((vote, index) => {
            return (
              <tr>
                <td>{ vote.vote }</td>
                <td className="voterCol">{ vote.voter }</td>
              </tr>
            )
            })}
          </table>
          <div className="card-deck"> Winner: {this.state.voteWinner} </div>
      </div>
    );
  }
}

export default VotesTallyList
