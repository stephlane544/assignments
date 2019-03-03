import React from 'react'
import Form from './shared/Form'

const NameForm = (props => {
    console.log(props)
    const { inputs: { name, age }, handleSubmit, handleChange } = props
    return (
        <form onSubmit={handleSubmit} className="form">
            <input type="text" onChange={handleChange} name="name" value={props.inputs.name} placeholder="Name"/>
            <input type="text" onChange={handleChange} name="age"  value={props.inputs.age} placeholder="Age"/>
            <button>Submit</button>
        </form>
    )
})

export default NameForm;