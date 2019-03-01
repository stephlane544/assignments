import React, { Component } from 'react';
import axios from 'axios'


class App extends Component {
  constructor(){
    super()
    this.state = {
      hitList: []
    }
  }
  async componentDidMount(){
    try{
      const people = await this.getHitList()
      this.setState({hitList: people})
    }catch(err){
      console.log(err)
    }
  }
  async getHitList(){
    const response = await axios.get('https://s3.amazonaws.com/v-school/data/hitlist.json')
    return response.data
  }
  render() {
    const mappedHits = this.state.hitList.map((person, i) => {
      console.log(person)
      return (
        <div key={person.name + i} style={{display: 'grid', gridAutoRows: 'max-content', gridAutoColumns: 'max-content'}}>
          <img style={{height: '200px', gridRow: '1/3', gridColumn: '1/2'}} src={person.image} alt=""/> 
          <div style={{backgroundColor: '#004eaed9', gridRow: '2/3', gridColumn: '1/2', color: 'white', fontSize: '20px', padding: '10px'}}>{person.name}</div>
        </div>
      )
    })
    return (
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridAutoRows: 'max-content', gridGap: '20px'}}>
        {mappedHits}
      </div>
    );
  }
}

export default App;
