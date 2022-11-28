import React, {Component} from 'react'
import './App.css'

class App extends Component{
  state={
    data: []
  }
componentDidMount(){
  fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood')
  .then(res=>res.json())
  .then(json=> {this.setState({data: json})
    console.log(json)
    })
}
render(){
  return (
    <div className='App'>
      {this.state.data.map((item)=>{
        return <React.Fragment key={item.id}>
          <p>{item.name}</p>
          <p>{item.department}</p>
          <p>{item.role}</p>
          <hr />
        </React.Fragment>
      })}
    </div>
  )
}
}
export default App
