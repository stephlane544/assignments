import React from 'react'
import Toggle from './shared/Toggle'
import Form from './shared/Form'
import NameForm from './NameForm'

const App = () => {
    return (
        <div className="container">
            <Toggle render={({ toggle, isToggled }) =>                       
                <>

                    <button onClick={toggle}>                                     
                        {isToggled ? "Close" : "Edit"}
                    </button>
                    {!isToggled ? 
                        <NameForm
                        render={() => <Form/>} 

                        inputs={{name: "", age: "" }}           
                        onSubmit={inputs => {
                            alert(`My name is ${inputs.name} and I am ${inputs.age}!`)
                            toggle()
                        }}
     
                        reset
                        />
                        : 
                        <div></div>
                    }
                </>
            } />
        </div>
    )
}

export default App