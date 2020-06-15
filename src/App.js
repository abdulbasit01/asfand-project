import React, { Component } from 'react'
import firebase from './component/firebase';
export class App extends Component {
  state={
    speed:10
  }
  componentDidMount(){
      const rootRef=firebase.database.ref().child('react-app-9a030')
      const speedRef=rootRef.chlid('speed');
      speedRef.on('value',snap=>{
        this.setState({
          speed:snap.val()
        })
      })
  }
  render() {
    return (
      <div>
        {this.state.speed}
      </div>
    )
  }
}

export default App
