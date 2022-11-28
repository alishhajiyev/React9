import React, {Component} from 'react'
import './App.css'

class App extends Component{
  state={
    search: "",
    employees: [
      {
        id:1,
        name:"Frodo Baggins",
        department:"Management",
        role:"CEO",
        alive:true
      },
      {
        id:2,
        name:"Samwise Gamgee",
        department:"Management",
        role:"CTO",
        alive:false
      },
      {
        id:3,
        name:"Gandalf the Gray",
        department:"Recruitment",
        role:"Leadrecruiter",
        alive:false
      },
      {
        id:4,
        name:"Aragorn",
        department:"Security",
        role:"Security officer",
        alive:true
      },
      {
        id:5,
        name:"Legolas",
        department:"Management",
        role:"Office manager",
        alive:true
      }]
  }
  handleInput=(e)=>{
    this.setState({search: e.target.value})
    this.setState({len: e.target.value.length})
  }

  
render(){
  return (
    <div className='App'>
      <p>{JSON.stringify(this.state)}</p>
      <input value={this.search} onChange={this.handleInput} placeholder='Search something' type="text" />
      {this.state.employees.map(item => {
        console.log("")
        let x = item.name.slice(0, this.state.len)
        if(this.state.search==x){
          return <React.Fragment key={item.id}>
          <p>{item.name}</p>
          <p>{item.department}</p>
          <p>{item.role}</p>
          <hr />
        </React.Fragment> 
        }

      })
      }
    </div>
  )
}
}
export default App

