import React, { Component } from 'react';
import CuteThing from './CuteThing';
import axios from 'axios'

class List extends Component {
    constructor(){
        super()
        this.state = {
            inputs: {
                title: '',
                imgUrl: ''
            },
            list: []
        }
    }
    async componentDidMount(){
        const response = await axios.get('https://api.vschool.io/uglysteph/todo')
        this.setState({
            list: response.data
        })
    }
    render () {
        const mappedThing = this.state.list.map(item => <CuteThing key={item._id} item={item}/>)
        return(
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridAutoRows: 'max-content', gridGap: '30px'}}>
                {mappedThing}
            </div>
        )
    }
}

export default List