import React, { Component } from 'react'
import TaskList from './TaskList'
import axios from 'axios'

class Home extends Component {
  state = {
    userInput: '',
    taskList: [],
    editList: {},
    taskChanges: [],
    allActions: { title: false, edit: false, delete: false }
  }

  initEditList = (tasks) => {
    let list = {}
    tasks.map(task => {
      list[task._id] = false
    })
    return list
  }

  componentDidMount = async() => {
    try {
      const res = await axios.get('http://192.168.86.21:3000/api/v1/tasks')
      this.setState({ ...this.state, taskList: res.data, editList: this.initEditList(res.data) })
    } catch (error) {
      console.log(error)
    }
  }

  handleUserInput = (e) => {
    this.setState({ ...this.state, userInput: e.target.value })
  }

  addTask = async () => {
    try {
      const res = await axios.post('http://192.168.86.21:3000/api/v1/tasks', {
        title: this.state.userInput,
        done: false
      })
      this.setState({ ...this.state, taskList: res.data, userInput: '' })
    } catch (error) {
      console.log(error)
    }
  }

  editTask = (taskID) => {
    const [task] = this.state.taskList.filter(task => task._id === taskID)
    const change = [taskID, task.title]
    this.setState({ 
      ...this.state,
      editList: { ...this.state.editList, [taskID]: true },
      taskChanges: [...this.state.taskChanges, change] 
    })
  }

  handleTaskEdit = (e, taskID) => {
    const task = this.state.taskChanges.filter( ([id, _])=> id === taskID)
    if(task.length === 0) {
      this.setState({ ...this.state, taskChanges: [...this.state.taskChanges, [taskID, e.target.value]] })
    } else {
      const keep = this.state.taskChanges.filter(([id, _]) => id !== taskID)
      this.setState({ ...this.state, taskChanges: [...keep, [taskID, e.target.value]] })
    }
  }

  getEditTitle = (taskID) => {
    const [task] = this.state.taskChanges.filter( ([id, _])=> id === taskID)
    return task[1]
  }

  submitEdit = async (taskID) => {
    const [task] = this.state.taskChanges.filter(([id, _]) => id === taskID)
    const keep = this.state.taskChanges.filter(([id, _]) => id !== taskID)
    try {
      const res = await axios.put(`http://192.168.86.21:3000/api/v1/tasks`, { search: { _id: taskID }, change: { title: task[1] } })
      this.setState({ ...this.state, editList: { ...this.state.editList, [taskID]: false }, taskList: res.data, taskChanges: keep })
    } catch (error) {
      console.log(error)
    }
  }

  handleDone = async (taskID) => {
    const [task] = this.state.taskList.filter(task => task._id === taskID)
    try {
      const res = await axios.put(`http://192.168.86.21:3000/api/v1/tasks`, { search: { _id: taskID }, change: { done: !task.done } })
      this.setState({ ...this.state, taskList: res.data })
    } catch (error) {
      console.log(error)
    }
  }

  deleteTask = async (taskID) => {
    try {
      const res = await axios.delete(`http://192.168.86.21:3000/api/v1/tasks/${taskID}`)
      this.setState({ ...this.state, taskList: res.data })
    } catch (error) {
      console.log(error)
    }
  }

  handleDoneAll = async (done) => {
    try {
      const res = await axios.put(`http://192.168.86.21:3000/api/v1/tasks`, { search: {}, change: { done } })
      this.setState({ ...this.state, taskList: res.data })
    } catch (error) {
      console.log(error)
    }
  }

  editTaskAll = async () => {
    let editAll = {}
    this.state.taskList.map(task => editAll[task._id] = true)
    const currentChanges = this.state.taskChanges.map(([id, title]) => id)
    const addingChanges = this.state.taskList.filter(task => !currentChanges.includes(task._id))
    const addTasks = addingChanges.map(change => [change._id, change.title])
    this.setState({ 
      ...this.state,
      allActions: { ...this.state.allActions, edit: true },
      editList: editAll,
      taskChanges: [...this.state.taskChanges, ...addTasks] 
    })
  }

  submitEditAll = async () => {
    try {
      const res = await axios.put(`http://192.168.86.21:3000/api/v1/tasks`, { search: {}, change: this.state.taskChanges })
      this.setState({ ...this.state, editList: {}, taskList: res.data, taskChanges: [], allActions: { ...this.state.allActions, edit: false } })
    } catch (error) {
      console.log(error)
    }
  }

  confirmDelete = () => this.setState({ ...this.state, allActions: { ...this.state.allActions, delete: !this.state.allActions.delete } })

  deleteTaskAll = async () => {
    console.log('delete all');
    try {
      const res = await axios.delete(`http://192.168.86.21:3000/api/v1/tasks/deleteall`)
      this.setState({ ...this.state, taskList: res.data })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-xs mt-16">
          <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div>
              <div className="mb-4">
                <p className="block text-white font-bold mb-2">Task</p>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="name" type="text" placeholder="enter task" value={ this.state.userInput } onChange={ this.handleUserInput }/>
              </div>
            </div>
            <div className="flex justify-around mb-6">
              <div className="mb-4">
                <button className={`bg-green-300 cursor-default' text-gray-900 tracking-wide font-bold py-2 px-4 rounded focus:outline-none`} name="new" onClick={ this.addTask }>Add</button>
              </div>
            </div>
          </div>
        </div>
        <TaskList 
          tasks={ this.state.taskList } 
          editTask={ this.editTask } 
          handleTaskEdit={ this.handleTaskEdit } 
          editList={ this.state.editList } 
          taskChanges={ this.state.taskChanges }
          getEditTitle={ this.getEditTitle }
          submitEdit={ this.submitEdit }
          handleDone={ this.handleDone }
          deleteTask={ this.deleteTask }
          allActions={ this.state.allActions }
          handleDoneAll={ this.handleDoneAll }
          editTaskAll={ this.editTaskAll }
          submitEditAll={ this.submitEditAll }
          deleteTaskAll={ this.deleteTaskAll }
          confirmDelete={ this.confirmDelete }
        />
      </div>
    )
  }
}

export default Home