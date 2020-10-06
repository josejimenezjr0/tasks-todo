import React, { Component } from 'react'

class TaskList extends Component {
  render() {
    const list = this.props.tasks.map((task, ind) => (
      <div className="flex justify-between items-center" key={ task._id }>
        <div className="mt-4 mr-2">
          <div className="flex items-center">
          {
            task.done ?
            <svg onClick={ () => this.props.handleDone(task._id) } className="bg-green-300 rounded-full mr-2 text-2xl fill-current" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            :
            <svg onClick={ () => this.props.handleDone(task._id) } className="bg-blue-200 rounded-lg mr-2 text-2xl p-1 fill-current" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 401.998 401.998">
              <path d="M377.87 24.126C361.786 8.042 342.417 0 319.769 0H82.227C59.579 0 40.211 8.042 24.125 24.126 8.044 40.212.002 59.576.002 82.228v237.543c0 22.647 8.042 42.014 24.123 58.101 16.086 16.085 35.454 24.127 58.102 24.127h237.542c22.648 0 42.011-8.042 58.102-24.127 16.085-16.087 24.126-35.453 24.126-58.101V82.228c-.004-22.648-8.046-42.016-24.127-58.102zm-12.422 295.645c0 12.559-4.47 23.314-13.415 32.264-8.945 8.945-19.698 13.411-32.265 13.411H82.227c-12.563 0-23.317-4.466-32.264-13.411-8.945-8.949-13.418-19.705-13.418-32.264V82.228c0-12.562 4.473-23.316 13.418-32.264 8.947-8.946 19.701-13.418 32.264-13.418h237.542c12.566 0 23.319 4.473 32.265 13.418 8.945 8.947 13.415 19.701 13.415 32.264v237.543h-.001z"/>
            </svg>
          }
          {
            this.props.editList[task._id] ? 
            <input onChange={ (e) => this.props.handleTaskEdit(e, task._id) } value={ this.props.getEditTitle(task._id) } className="shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" ></input>
            :
            <p className={`${task.done ? 'line-through font-normal text-gray-600' :'text-gray-800 font-semibold'}`}>{ task.title }</p>
          }
          </div>
        </div>
          <div className="flex mt-4 mr-2">
          {
            this.props.editList[task._id] ? 
            <svg onClick={ () => this.props.submitEdit(task._id) } className="bg-blue-300 rounded-full p-1 mr-4 text-2xl fill-current" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            :
            <svg onClick={ () => this.props.editTask(task._id) } className="bg-gray-600 text-white rounded-full mr-2 text-2xl p-1 mr-4 fill-current" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"/><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd"/>
            </svg>
          }
            <svg onClick={ () => this.props.deleteTask(task._id) } className="bg-red-600 text-white rounded-full text-2xl p-1 text-center fill-current" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"/>
            </svg>
          </div>
      </div>
    ))

    return (
      <div className="w-full max-w-xs mt-16 bg-gray-300 rounded-lg">
        <div className="px-4 pt-6 pb-8 mb-4">
          <p className="block text-gray-800 font-bold text-center">List</p>
          <div className="flex flex-col justify-around">
            <div className="flex justify-between items-center">
              <div className="mt-4 mr-2">
                <div className="flex items-center">
                  <svg onClick={ () => this.props.handleDoneAll(true) } className="bg-green-300 rounded-full mr-2 text-2xl fill-current" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <svg onClick={ () => this.props.handleDoneAll(false) } className="bg-blue-200 rounded-lg mr-2 text-2xl p-1 fill-current" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 401.998 401.998">
                    <path d="M377.87 24.126C361.786 8.042 342.417 0 319.769 0H82.227C59.579 0 40.211 8.042 24.125 24.126 8.044 40.212.002 59.576.002 82.228v237.543c0 22.647 8.042 42.014 24.123 58.101 16.086 16.085 35.454 24.127 58.102 24.127h237.542c22.648 0 42.011-8.042 58.102-24.127 16.085-16.087 24.126-35.453 24.126-58.101V82.228c-.004-22.648-8.046-42.016-24.127-58.102zm-12.422 295.645c0 12.559-4.47 23.314-13.415 32.264-8.945 8.945-19.698 13.411-32.265 13.411H82.227c-12.563 0-23.317-4.466-32.264-13.411-8.945-8.949-13.418-19.705-13.418-32.264V82.228c0-12.562 4.473-23.316 13.418-32.264 8.947-8.946 19.701-13.418 32.264-13.418h237.542c12.566 0 23.319 4.473 32.265 13.418 8.945 8.947 13.415 19.701 13.415 32.264v237.543h-.001z"/>
                  </svg>
                </div>
              </div>
                <div className="flex mt-4 mr-2">
                { 
                  this.props.allActions.edit ? 
                  <svg onClick={ this.props.submitEditAll } className={`${this.props.allActions.delete && 'hidden'} bg-blue-300 rounded-full p-1 mr-4 text-2xl fill-current`} width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  :
                  <svg onClick={ this.props.editTaskAll } className={`${this.props.allActions.delete && 'hidden'} bg-gray-600 text-white rounded-full mr-2 text-2xl p-1 mr-4 fill-current`} width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"/><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd"/>
                  </svg>
                }
                {
                  this.props.allActions.delete && 
                    <div className="flex">
                      <p className="text-gray-900 font-semibold mr-2">Delete all?</p>
                      <button onClick={ this.props.deleteTaskAll } className={`bg-red-400 cursor-default text-gray-900 tracking-wide font-semibold px-1 rounded focus:outline-none`}>Yes</button>
                      <button onClick={ this.props.confirmDelete } className={`bg-blue-300 cursor-default text-gray-900 tracking-wide font-semibold px-1 ml-4 rounded focus:outline-none`}>No</button>
                    </div>
                }
                
                  <svg onClick={ this.props.confirmDelete } className={`${this.props.allActions.delete && 'hidden'} bg-red-600 text-white rounded-full text-2xl p-1 text-center fill-current`} width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                </div>
            </div>
            <div className="h-1 mt-2 bg-gray-500"/>
            { list }
          </div>
        </div>
      </div>
    )
  }
}

export default TaskList