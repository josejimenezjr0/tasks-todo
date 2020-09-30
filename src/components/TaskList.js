import React, { Component } from 'react'


class TaskList extends Component {
  render() {
    const sampleList = [
      'Wash dishes',
      'Mow lawn',
      'Do laundry'
    ]

    const list = sampleList.map((task, ind) => (
      <div className="flex justify-between items-center" key={ ind }>
        <div className="mt-4 mr-2">
          <p className="text-gray-800 font-semibold">{task}</p>
        </div>
        {/* <div className="mt-4 mr-2"> */}
        <div className="mt-4 mr-2">
          <button className={`bg-green-300 cursor-default' text-gray-900 tracking-wide font-semi bold py-1 px-2 mr-2 rounded focus:outline-none`} name="new">Done</button>
          <button className={`bg-red-300 cursor-default' text-gray-900 tracking-wide font-semi bold px-1 rounded focus:outline-none`} name="new">remove</button>
        </div>
      </div>
    ))

    return (
      <div className="w-full max-w-xs mt-16 bg-gray-300 rounded-lg">
        <div className="px-4 pt-6 pb-8 mb-4">
          <div>
            <div className="mb-4">
              <p className="block text-gray-800 font-bold mb-2 text-center">List</p>
            </div>
          </div>
          <div className="flex flex-col justify-around">
            { list }
          </div>
        </div>
      </div>
    )
  }
}

export default TaskList