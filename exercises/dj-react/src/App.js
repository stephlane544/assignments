import React, { Component } from 'react';
import Buzzer from './sounds.mp3/Buzzer.mp3';
import Boom from './Boom.mp3';
import DamnSon from './Damn Son.mp3';
import Nope from './Nope.mp3';
import Tadaah from './TADAAH.mp3';
import WTF from './WTF.mp3';

class App extends Component {
  constructor(){
    super()
    this.state= {
      box1: 'lightPink',
      box2: 'lightPink',
      box3:  'lightPink',
      box4:  'lightPink',
      height1: '150px',
      width1: '150px',
      height2: '150px',
      width2: '150px',
      height3: '150px',
      width3: '150px',
      height4: '150px',
      width4: '150px',
      opacity1: '1',
      opacity4: '1',
      boxShadow2: 'none',
      boxShadow3: 'none',
      play1: 'false',
      play2: 'false',
      play3: 'false',
      play4: 'false',
      play5: 'false',
      play6: 'false',
    }
  }
  audio1 = new Audio(Buzzer)
  audio2 = new Audio(Boom)
  audio3 = new Audio(DamnSon)
  audio4 = new Audio(Nope)
  audio5 = new Audio(Tadaah)
  audio6 = new Audio(WTF)
  blue = () => {
    if(this.state.box1 === 'lightBlue'){
      this.setState({
        box1: 'lightPink',
        box2: 'lightPink',
        box3:  'lightPink',
        box4:  'lightPink',
        play1: !this.state.play1
      })
    }else{
      this.setState({
        box1: 'lightBlue',
        box2: 'lightBlue',
        box3:  'lightBlue',
        box4:  'lightBlue',
        play1: !this.state.play1
      }) 
    }
    this.state.play1 ? this.audio1.play() : this.audio1.pause();
  }

  purple = () => {

    if(this.state.box1 === 'lightBlue' || this.state.box1 === 'lightPink'){
      this.setState({
        box1: 'purple',
        box2: 'purple',
        play2: !this.state.play2
      })
    }else{
      this.setState({
        box1: 'lightBlue',
        box2: 'lightBlue',
        play2: !this.state.play2
      }) 
    }
    this.state.play2 ? this.audio2.play() : this.audio2.pause();
  }

  size = () => {
    if(this.state.height1 === '150px'){
      this.setState({
        height1: '50px',
        width1: '50px',
        height2: '50px',
        width2: '50px',
        height3: '50px',
        width3: '50px',
        height4: '50px',
        width4: '50px',
        play3: !this.state.play3
      })
    }else{
      this.setState({
        height1: '150px',
        width1: '150px',
        height2: '150px',
        width2: '150px',
        height3: '150px',
        width3: '150px',
        height4: '150px',
        width4: '150px',
        play3: !this.state.play3
      }) 
    }
    this.state.play3 ? this.audio3.play() : this.audio3.pause();
  }

  transparent = () => {
    if(this.state.opacity1 === '0.5'){
      this.setState({
        opacity1: '1',
        opacity3: '1',
        play4: !this.state.play4
      })
    }else{
      this.setState({
        opacity1: '0.5',
        opacity3: '0.5',
        play4: !this.state.play4
      }) 
    }
    this.state.play4 ? this.audio4.play() : this.audio4.pause();
  }

  boxShadow = () => {
    if(this.state.boxShadow2 === '10px 10px #7b7b7b'){
      this.setState({
        boxShadow2: 'none',
        boxShadow4: 'none',
        play5: !this.state.play5
      })
    }else{
      this.setState({
        boxShadow2: '10px 10px #7b7b7b',
        boxShadow4: '10px 10px #7b7b7b',
        play5: !this.state.play5
      }) 
    }
    this.state.play5 ? this.audio5.play() : this.audio5.pause();
  }
  borderRadius = () => {
    if(this.state.borderRadius === '15px'){
      this.setState({
        borderRadius1: '0px',
        borderRadius2: '0px',
        borderRadius3:  '0px',
        borderRadius4:  '0px',
        play6: !this.state.play6
      })
    }else{
      this.setState({
        borderRadius1: '15px',
        borderRadius2: '15px',
        borderRadius3:  '15px',
        borderRadius4:  '15px',
        play6: !this.state.play6
      }) 
    }
    this.state.play6 ? this.audio6.play() : this.audio6.pause();
  }

  render() {
    const boxes = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridAutoRows: 'max-content',
        justifyContent: 'space-around',
        gridGap: '50px',
        marginLeft: '130px',
    }
    const box1 = {
      height: this.state.height1,
      width: this.state.width1,
      backgroundColor: this.state.box1,
      opacity: this.state.opacity1,
      borderRadius: this.state.borderRadius1
    }
    const box2 = {
      height: this.state.height2,
      width: this.state.width2,
      backgroundColor: this.state.box2,
      boxShadow: this.state.boxShadow2,
      borderRadius: this.state.borderRadius2
    }
    const box3 = {
      height: this.state.height3,
      width: this.state.width3,
      backgroundColor: this.state.box3,
      opacity: this.state.opacity3,
      borderRadius: this.state.borderRadius3
    }
    const box4 = {
      height: this.state.height4,
      width: this.state.width4,
      backgroundColor: this.state.box4,
      boxShadow: this.state.boxShadow4,
      borderRadius: this.state.borderRadius4
    }
    const buttons = {
      marginTop: '100px',
      gridRow: '3/4',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      margin: '50px'
    }
    return (
      <div>
        <div style={boxes}>
          <div className='box1' style={box1}></div>
          <div className='box2' style={box2}></div>
          <div className='box3' style={box3}></div>
          <div className='box4' style={box4}></div>
        </div>
        <div style={buttons}>
          <button onClick={this.blue}>blue</button>
          <button onClick={this.purple}>Top Purple</button>
          <button onClick={this.size}>size</button>
          <button onClick={this.transparent}>Transparent</button>
          <button onClick={this.boxShadow}>Box Shadow</button>
          <button onClick={this.borderRadius}>Border Radius</button>
        </div>
      </div>
    )
  }
}

export default App;
