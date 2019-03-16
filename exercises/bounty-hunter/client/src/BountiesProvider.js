import React, { Component } from 'react';
import axios from 'axios';
const {Provider, Consumer} = React.createContext()

class BountiesProvider extends Component {
    constructor(){
        super()
        this.state = {
            bounties: [],
            newBounty: false,
            inputs: {
                _id: '',
                firstName: '',
                lastName: '',
                bounty: 0,
                living: true,
                imageUrl: '',
                type: ''
            }
        }
    }

    toggleNew = () => {
        this.setState(prevState => ({
            newBounty: !prevState.newBounty
        }))
    }

    getBounties = () =>{
        axios.get('/bounties').then(res => {
            this.setState({
                bounties: res.data
            })
        })
    }

    editBounty = (_id, editedBounty) => {
        axios.put(`/bounties/${_id}`, editedBounty).then(res => {
            this.setState(prevState => ({
                bounties: prevState.bounties.map(bounty => bounty._id === _id ? bounty = editedBounty : bounty)
            }))
        })
    }

    deleteBounty = _id => {
        axios.delete(`/bounties/${_id}`).then(() => {
            this.setState(prevState => ({
                bounties: prevState.bounties.filter(bounty => bounty._id !== _id)
            }))
        })
    }

    postBounty = newBounty => {
        axios.post(`/bounties`, newBounty).then(res => {
            this.setState(prevState => ({
                bounties: [...prevState.bounties, res.data]
            }))
        })
        this.setState(prevState => ({
            newBounty: !prevState.newBounty
        }))
    }

    render() {
        return (
            <Provider value={{
                getBounties: this.getBounties,
                editBounty: this.editBounty,
                postBounty: this.postBounty,
                deleteBounty: this.deleteBounty,
                toggleNew: this.toggleNew,
                ...this.state
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export default BountiesProvider;
export function withProvider (C) {
    return props => <Consumer>
                        {value => <C {...value}{...props} />}
                    </Consumer>
}