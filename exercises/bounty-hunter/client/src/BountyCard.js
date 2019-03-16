import React, { Component } from 'react';
import {withProvider} from './BountiesProvider'
import Delete from './icon_delete.png';
import Edit from './Icons/edit.png'
import Form from './Form'


class BountyCard extends Component {
    constructor(props){
        super(props)
        this.state ={
            edit: false
        }
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }
    render() {
        const {firstName, lastName, living, bounty, type, imageUrl, _id} = this.props.bounty
        console.log(this.props.bounty)
        return (
            <div className='bountyCard'>
                <img src={imageUrl} alt="" className='image'/>
                <div className='bountyInfo'>
                    {this.state.edit ? 
                        <>
                            <Form formType='edit' bounty={this.props.bounty} toggleEdit={this.toggleEdit} />
                        </>
                    :
                        <>
                            <div className='name'>{firstName} {lastName}</div>
                            <div className='living'>{living}</div>
                            <div className='bounty'>{bounty}</div>
                            <div className='type'>{type}</div>
                            <img onClick={() => this.props.deleteBounty(_id)} className='deleteButton' src={Delete} alt=""/>
                            <img className='editButton' onClick={this.toggleEdit} src={Edit} alt=""/>
                        </>
                    }
                </div>
            </div>  
        );
    }
}

export default withProvider(BountyCard);