import React, { Component } from 'react';
import axios from 'axios';
const {Provider, Consumer} = React.createContext()

class CuteThingsProvider extends Component {
    constructor(){
        super()
        this.state={
            inputs: {
                id: '',
                title: '',
                description: '',
                imgUrl: ''
            },
            list: [],
            newItem: false
        }
    }

    toggleNew = () => {
        this.setState(prevState => ({
            newItem: !prevState.newItem
        }))
    }


    getItems = () => {
        axios.get('https://api.vschool.io/uglysteph/todo').then(response => {
            this.setState({
                list: response.data
            })
        })
    }

    editItem = (id, editedItem) => {
        axios.put(`https://api.vschool.io/uglysteph/todo/${id}`, editedItem).then(res => {
            this.setState(prevState => ({
                list: prevState.list.map(item => item._id === id ? item = editedItem : item)
            }))
        })
    }

    deleteItem = _id => {
        axios.delete(`https://api.vschool.io/uglysteph/todo/${_id}`).then(() => {
            this.setState(prevState => ({
                list: prevState.list.filter(item => item._id !== _id)
            }))
        })
    }

    postItem = (newItem) => {
        console.log(newItem)

        axios.post('https://api.vschool.io/uglysteph/todo/', newItem).then(response => {
            this.setState(prevState => ({
                list: [...prevState.list, response.data],
            }))
        })
        this.setState(prevState => ({
            newItem: !prevState.newItem
        }))
    }

    render() {
        return (
            <Provider value={{
                getItems: this.getItems,
                editItem: this.editItem,
                postItem: this.postItem,
                deleteItem: this.deleteItem,
                toggleNew: this.toggleNew,
                ...this.state
                }}>
                {this.props.children}
            </Provider>
        );
    }
}

export default CuteThingsProvider;

export function withProvider (C) {
    return props => <Consumer>
                        {value => <C {...value}{...props} />}
                    </Consumer>
}