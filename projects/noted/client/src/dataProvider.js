import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
const{ Provider, Consumer } = React.createContext();
const tokenAxios = axios.create();

tokenAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

class dataProvider extends Component {
    constructor() {
        super();
        this.state = {
            user: JSON.parse(localStorage.getItem('user')) || {},
            token: localStorage.getItem('token') || '',
            notes: '',
            username: '',
            password: '',
            firstName: '',
            email: '',
            login: false,
            createNote: false,
            createCollection: false,
            createPage: false,
            editCollectionBoolean: false,
            newNote: '',
            _id:'',
            title: '',
            description: '',
            postItColor: ''
        }
    }

    toggleCreateNote = () => {
        this.setState(prevState => ({
            createNote: !prevState.createNote
        }))
    }

    toggleCreateCollection = () => {
        this.setState(prevState => ({
            createCollection: !prevState.createCollection
        }))
    }

    toggleCreatePage = () => {
        this.setState(prevState => ({createPage: !prevState.createPage}))
        
    }


    setLogin = () => {
        this.setState(prevState => ({
            login: !prevState.login
        }));
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        let userInfo;
        this.state.login ? userInfo = {username: this.state.username, password: this.state.password} : userInfo = {username: this.state.username, password: this.state.password, firstName: this.state.firstName, email: this.state.email};
        this.state.login ? 
                this.login(userInfo).then(() => this.props.history.push(`/dashboard/${this.state.username}`)) 
            : 
                this.signup(userInfo).then(() => this.props.history.push(`/dashboard/${this.state.username}`))
    }

    signup = (userInfo) => {
        return axios.post('/auth/signup', userInfo).then(res => {
            const { user, token } = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            this.setState({
                user,
                token
            })
            return res;
        })
    }

    login = (credentials) => {
        return axios.post('/auth/login', credentials).then(res => {
            const { token, user } = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            this.setState({
                user,
                token
            })
            return res;
        })
    }

    logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.setState({
            user: {},
            token: '',
            login: false,
            title: '',
            description: '',
        });
        this.props.history.push('/');

    }

    editNote = (editedNote) => {
        return tokenAxios.put(`api/user/${this.state.user._id}/notes/${editedNote._id}`, editedNote).then(res => {
            const user = res.data;
            localStorage.setItem('user', JSON.stringify(user));
            this.setState({
                user
            })
            return res;
        })
    }

    deleteNote = (noteId) => {
        return tokenAxios.delete(`api/user/${this.state.user._id}/notes/${noteId}`).then(res => {
            const user = res.data;
            localStorage.setItem('user', JSON.stringify(user));
            this.setState({
                user
            })
            return res;
        })
    }

    addNote = (newNote) => {
        
        this.setState(prevState => ({
            newNote,
            createNote: !prevState.createNote
        }))
        return tokenAxios.put(`api/user/${this.state.user._id}/notes`, newNote).then(res => {
            const user = res.data;
            localStorage.setItem('user', JSON.stringify(user));
            this.setState({
                user
            })
            return res;
        })
    }

    addCollection = (newCollection) => {
        
        this.setState(prevState => ({
            newCollection,
            createCollection: !prevState.createCollection
        }))
        return tokenAxios.put(`api/user/${this.state.user._id}/collections`, newCollection).then(res => {
            const user = res.data;
            localStorage.setItem('user', JSON.stringify(user));
            this.setState({
                user
            })
            return res;
        })
    }

    editCollection = (editedCollection) => {
        console.log('fired')
        return tokenAxios.put(`api/user/${this.state.user._id}/collections/${editedCollection._id}`, editedCollection).then(res => {
            const user = res.data;
            localStorage.setItem('user', JSON.stringify(user));
            this.setState({
                user
            })
            return res;
        })
    }

    deleteCollection = (collectionId) => {
        return tokenAxios.delete(`api/user/${this.state.user._id}/collections/${collectionId}`).then(res => {
            const user = res.data;
            localStorage.setItem('user', JSON.stringify(user));
            this.setState({
                user
            })
            return res;
        })
    }

    addPage = (newPage, collection) => {
        console.log(collection)
        this.setState(prevState => ({
            newPage,
            createPage: !prevState.createPage,
        }))
        return tokenAxios.put(`api/user/${this.state.user._id}/collections/${collection._id}/pages`, newPage).then(res => {
            const user = res.data;
            localStorage.setItem('user', JSON.stringify(user));
            this.setState({
                user
            })
            return res;
        }).then(() => this.props.history.push({pathname:`/collections/${collection._id}`, state: {collection}}))
    }

    editPage = (editedPage) => {
        return tokenAxios.put(`api/user/${this.state.user._id}/pages/${editedPage._id}`, editedPage).then(res => {
            const user = res.data;
            localStorage.setItem('user', JSON.stringify(user));
            this.setState({
                user
            })
            return res;
        })
    }

    deletePage = (pageId) => {
        return tokenAxios.delete(`api/user/${this.state.user._id}/pages/${pageId}`).then(res => {
            const user = res.data;
            localStorage.setItem('user', JSON.stringify(user));
            this.setState({
                user
            })
            return res;
        })
    }

    editUser = (editedUser) => {
        return tokenAxios.put(`api/user/${this.state.user._id}`, editedUser).then(res => {
            const { user } = res.data;
            localStorage.setItem('user', JSON.stringify(user));
            this.setState({
                user
            })
            return res;
        })
    }
    render() {
        return (
            <Provider value = {{
                logout: this.logout,
                login: this.login,
                signup: this.signup,
                editUser: this.editUser,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit,
                setLogin: this.setLogin,
                toggleCreateNote: this.toggleCreateNote,
                editNote: this.editNote,
                deleteNote: this.deleteNote,
                addNote: this.addNote,
                toggleCreateCollection: this.toggleCreateCollection,
                editCollection: this.editCollection,
                deleteCollection: this.deleteCollection,
                addCollection: this.addCollection,
                toggleCreatePage: this.toggleCreatePage,
                editPage: this.editPage,
                deletePage: this.deletePage,
                addPage: this.addPage,
                toggleEditCollection: this.toggleEditCollection,
                ...this.state
            }}>
                    {this.props.children}
            </Provider>
        );
    }
}

export default withRouter(dataProvider);

export function withContext (C) {
    return props => <Consumer>
                        {value => <C {...value} {...props}/>}
                    </Consumer>
}