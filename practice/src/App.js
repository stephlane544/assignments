import React, { Component } from 'react';


class App extends Component {
  constructor (){
    super ()
    this.state = {
      isTrue: true
    }
  }
  render() {
    const styles = {
      height: '50px'
    }
    let text = this.state.isTrue ? 
    <div>
      <div>Like</div>
      <img  style={styles} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bot%C3%B3n_Me_gusta.svg/1200px-Bot%C3%B3n_Me_gusta.svg.png" alt=""/>
    </div> 
    : 
    <div>
      <div>Unlike</div>
      <img style={styles} src="http://humans-first.com/wp-content/uploads/2018/11/How-to-Unlike-Multiple-Facebook-Pages-at-Once-e1542361859101.png" alt=""/>
    </div> 

    const likeUnlike = () => {
      this.setState((prevState) => {
        return {
          isTrue: !prevState.isTrue
        }
      })
    }
    
    return (
      <div>
        <button onClick={likeUnlike}>{text}</button>
      </div>
    )
  }
}

export default App;
