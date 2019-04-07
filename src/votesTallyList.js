import React, { Component } from 'react'
import { DEFAULTVOTERESULTS } from './constants'
import './votesTallyList.css'

class VotesTallyList extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    // TODO: Load this from server somehow
    let voteTitle = DEFAULTVOTERESULTS["title"]
    let votesMade = DEFAULTVOTERESULTS["votes"]

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
      if (voteTally[option] > highestVoteCount) {
        highestVoteCount = voteTally[option]
        highestVote = option
      }
    }

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
            {votesMade.map((vote, index) => {
            return (
              <tr>
                <td>{ vote.vote }</td>
                <td className="voterCol">{ vote.voter }</td>
              </tr>
            )
            })}
          </table>
          <div className="card-deck"> Winner: {highestVote} </div>
      </div>
    );
  }
}

export default VotesTallyList
