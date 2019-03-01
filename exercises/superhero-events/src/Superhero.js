import React, {Component} from 'react';

class Superhero extends Component {
  
    catchphrase = () => {
        alert(this.props.catchphrase)
    }
    
    render(){
        const img = {
            height: '300px'        }
        return(
            <div>
                <div onClick={this.catchphrase}>{this.props.name}</div>
                <img style={img} onClick={this.catchphrase} src={this.props.image} alt=""/>
            </div>
        )
    }
}

export default Superhero;