import { Component } from 'react'

export default class Toggle extends Component {
    constructor(){
        super()
        this.state = { isToggled: false }
    }

    toggle = () => {
        this.setState(prevState => {
            return{ 
                isToggled: !prevState.isToggled 
            }
        })
    }
    
    render(){
        return this.props.render({
            isToggled: this.state.isToggled,
            toggle: this.toggle
        })
    }
}