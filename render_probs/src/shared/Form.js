import { Component } from 'react'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputs: {
                name: '',
                age:''
            }
        }
    }
    handleChange = e => {
        const { name, age } = e.target
        this.setState({
            inputs: {
                name: name,
                age: age
            }
        })
        console.log(this.state.inputs)
    }

    handleSubmit = e => {
        e.preventDefault()
        let {name, age} = e.target
        alert(`${name} is ${age}`)
        // this.props.submit(alert(this.state.inputs))
        // this.props.reset && this.setState({ inputs: {[name]: name}})
        
    }

    render(){
    console.log(this.state.props)

        return this.props.render({
            inputs: this.state.inputs,
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit
        })
    }
}
export default Form;