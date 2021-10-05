import './App.css';
import React from 'react';
import Pro from './Pro';

class  App extends React.Component {
  constructor() {
    super();
    this.state = {
      index : 0,
      description: [
        {
        fullName:"Mbarek Anis",
        bio:"Formation Developpement Web",
        imageUrl:"http://jade01.j.a.pic.centerblog.net/o/9bf5ba39.jpg",
        profession:"Developpeur Web"
      },
      {
        fullName: "Hide",
        bio: "Unknown",
        imageUrl: "Unknown",
        profession: "Unknown"
      }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        {
        this.state.description.map((x,currentIndex)=> <button onClick= {() => this.setState({index: currentIndex})}>{x.fullName}</button>)
        }
        
        
   <Pro fullName={this.state.description[this.state.index].fullName} 
        bio={this.state.description[this.state.index].bio}
        imageUrl={this.state.description[this.state.index].imageUrl} 
        profession={this.state.description[this.state.index].profession}/>
         
      </div>
 
    );
  }
}
export default App;
