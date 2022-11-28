import React, {Component} from 'react'
import './App.css'

class App extends Component{
  state={
    alive: 'false',
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

  
render(){
  return (
    <div className='App'>
      {/* <p>{JSON.stringify(this.state)}</p> */}
      <button onClick={()=>{this.setState({alive: false})}}>Diriler</button>
      <button onClick={()=>{this.setState({alive: true})}}>Oluler</button>
      <button onClick={()=>{this.setState({alive: 'all'})}}>Hamisi</button>
      {this.state.employees.map(item => {
        if(item.alive!==this.state.alive){
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
