import React, { Component } from 'react';
import bookImg from '../Images/book.png';
import '../Styles/DisplayPages.css';
import { withContext } from '../dataProvider.js';
import { withRouter } from 'react-router-dom';


class DisplayPages extends Component {
    constructor(){
        super();
        this.state = {
            _id: '',
            title: '',
            description: '',
            editPage: false
        }
    }

    handleChange = e =>{
        this.setState({[e.target.name]: e.target.value})
    }

    toggleEditPage = () => {
        let {page, collection} = this.props
        this.props.history.push({pathname: `/editpage/${page._id}`, state: {page, collection}})
    }

    handleEdit = e => {
        e.preventDefault();
        const editedPage = {
            _id: this.props.page._id,
            title: this.state.title,
        }
        this.props.editPage(editedPage).then(this.toggleEditPage())
    }

    deletePage = () => {
        if(window.confirm('Do you really wish to delete this page?')) this.props.deletePage(this.state._id, this.props.collection)
    }

    componentDidUpdate(prevProps){
        if(prevProps.page.description !== this.props.page.description){
            let { title, description, _id} = this.props.page
            console.log(description)
            this.setState({ _id, title, description})
        }
    }

    componentDidMount(){
        let { title, description, _id} = this.props.page
            this.setState({ _id, title, description})
    }

    render() {
        console.log(this.props)
        return (
            <article className='page pageContent' style={{backgroundImage:`url(${bookImg})`}}>
                <div className='pageTitle'>{this.state.title}</div>
                <textarea type="text"
                    className='pageDescription'
                    value={this.state.description}
                    disabled
                />
                <div className='editAndDeletePage'>
                    <div className='editAndDeleteContainer'>
                        <img onClick={this.toggleEditPage} className='editPage' src="https://img.icons8.com/dotty/80/000000/edit.png" alt=''></img>
                        <img className='deletePage' onClick={this.deletePage} src='https://img.icons8.com/windows/32/000000/trash.png' alt=''></img>
                    </div>
                </div>
            </article>
        );
    }
}

export default withRouter(withContext(DisplayPages));


