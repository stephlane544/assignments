import React, { Component } from 'react';
import {withProvider} from './CuteThingsProvider';
import saveButton from './Icons/save.ico'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            _id: '',
            title: '',
            description: '',
            imgUrl: '',
        }
    }

    handleSubmit = e => {
        const newItem = {
            title: this.state.title,
            description: this.state.description,
            imgUrl: this.state.imgUrl
        }
        if (this.props.type === 'add'){
            e.preventDefault()
            this.props.postItem(newItem)
        }else {
            this.props.editItem(this.state._id, this.state)
            this.props.toggleEdit()
        }
    }
    handleChange = e =>{
        this.setState({[e.target.name]:e.target.value})
    }

    componentDidMount(){
        if(this.props.type === 'edit'){
            let {title, description, imgUrl, _id} = this.props.item
            this.setState({title, description, imgUrl, _id})
        }
    }
 
    render() {
        let {title, description, imgUrl} = this.state
        return (
            <>
                {this.props.type === 'edit' ? 
                    <form onSubmit={this.handleSubmit} style={{padding: '20px', marginTop: '20px', gridColumn: '1/2', display: 'grid', gridTemplateColumns: '1fr', gridAutoRows: 'max-content'}}>
                        <input 
                            type="text" 
                            value={title} 
                            placeholder='title'
                            name='title' 
                            onChange={this.handleChange} 
                            style={{gridRow: '1/2', marginBottom: '10px', borderRadius: '10px', backgroundColor: 'white', textAlign: 'center'}}/>
                        <input 
                            type="text" 
                            value={description} 
                            placeholder='description'
                            name='description' 
                            onChange={this.handleChange} 
                            style={{gridRow: '2/3', marginBottom: '10px', borderRadius: '10px', backgroundColor: 'white', textAlign: 'center'}}/>
                        <input 
                            type="text" 
                            value={imgUrl} 
                            placeholder='image url'
                            name='imgUrl' 
                            onChange={this.handleChange} 
                            style={{gridRow: '3/4', marginBottom: '10px', borderRadius: '10px', backgroundColor: 'white', textAlign: 'center'}}/>
                        <img onClick={this.handleSubmit} style={{height:'30px', width: '30px'}} src={saveButton} alt=""/> 
                    </form>
                :
                    <form onSubmit={this.handleSubmit} style={{padding: '20px', marginTop: '20px', gridColumn: '1/2', display: 'grid', gridTemplateColumns: '1fr', gridAutoRows: 'max-content'}}>
                        <input 
                            type="text" 
                            value={title} 
                            placeholder='Title' 
                            name='title' 
                            onChange={this.handleChange} 
                            style={{gridRow: '1/2', marginBottom: '10px', borderRadius: '10px', backgroundColor: 'white', textAlign: 'center'}}/>
                        <input 
                            type="text" 
                            value={description} 
                            placeholder='Description' 
                            name='description' 
                            onChange={this.handleChange} 
                            style={{gridRow: '2/3', marginBottom: '10px', borderRadius: '10px', backgroundColor: 'white', textAlign: 'center'}}/>
                        <input 
                            type="text" 
                            value={imgUrl} 
                            placeholder='Image' 
                            name='imgUrl' 
                            onChange={this.handleChange} 
                            style={{gridRow: '3/4', marginBottom: '10px', borderRadius: '10px', backgroundColor: 'white', textAlign: 'center'}}/>
                        <button onSubmit={this.handleSubmit} style={{borderRadius: '10px', backgroundColor: 'white', width: '50%', marginLeft: '25%'}}>Submit</button>
                    </form>
                }
            </>
        );
    }
}

export default withProvider(Form);