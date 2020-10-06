import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav className="fixed w-full z-10">
        <div className="relative bg-blue-300 items-center justify-between">
          <div className=" flex items-center justify-center px-4 py-2">
            <Link to="/" className="text-gray-700 text-sm font-semibold uppercase tracking-wide hover:text-gray-400 focus:outline-none">Tasks Todo</Link>
          </div>
        </div>
      </nav>
    )

  }
}

export default Nav