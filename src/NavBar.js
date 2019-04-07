import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

class NavBar extends Component {

  render() {
    const username = this.props.username
    return (
<nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
<Link className="navbar-brand" to="/">BlitzVote</Link>

<div className="collapse navbar-collapse" id="navbarsExampleDefault">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item">
      <Link className="nav-link" to="/vote">Vote</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/tally">See Results</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/create">Create Vote</Link>
    </li>
  </ul>
</div>
<ul className="navbar-nav mr-auto">
  <li className="nav-item">
    <Link className="nav-link" to='/vote'>{username}</Link>
  </li>
</ul>
<button
  className="btn btn-primary"
  onClick={this.props.signOut.bind(this)}
>Sign out
</button>
</nav>
)
}
}

export default NavBar
