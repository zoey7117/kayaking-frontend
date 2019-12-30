import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/usersAction'

const Logout = ({ logout }) => {

  return (
    <form>
<div className='log out'>
  <button type="submit" className="ui button">Log out</button>
</div>
    </form>
  )
}

export default connect(null, {logout})(Logout)