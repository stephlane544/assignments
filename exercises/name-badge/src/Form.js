import React, { Component } from 'react';
import Badge from './Badge';

class Form extends Component {
    constructor(){
        super()
        this.state={
          firstName: '',
          lastName: '',
          email: '',
          birthPlace: '',
          phone: '',
          favFood: '',
          about: '',
          array: [],
          backgroundColor: ''
        }
    }
    popBadge = (e) => {
        e.preventDefault();
        this.changeColor()
        this.setState((prevState) => {
            return {
                array: [
                    ...prevState.array,
                    {
                        name: prevState.firstName + " " + prevState.lastName,
                        email: prevState.email,
                        birthPlace: prevState.birthPlace,
                        phone: prevState.phone,
                        favFood: prevState.favFood,
                        about: prevState.about,
                        backgroundColor: prevState.backgroundColor
                    }
                ],
                firstName: '',
                lastName: '',
                email: '',
                birthPlace: '',
                phone: '',
                favFood: '',
                about: '',
            }
        })
    }

    changeColor = () => {
        if(this.state.backgroundColor === '#343e50'){
            this.setState({backgroundColor: '#606060'})
        }else {
            this.setState({backgroundColor: '#343e50'})
        }
    }

    changeState = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        const inputStyle = {
            width: '250px', 
            height: '20px', 
            fontSize: '20px', 
            margin: '20px', 
            lineHeight: '1.5',
            one: {gridColumn: '1/2', gridRow: '1/2'},
            two: {gridColumn: '2/3', gridRow: '1/2'},
            three: {gridColumn: '1/2', gridRow: '2/3'},
            four: {gridColumn: '2/3', gridRow: '2/3'},
            five: {gridColumn: '1/2', gridRow: '3/4'},
            six: {gridColumn: '2/3', gridRow: '3/4'}
        }
        const formStyle = {
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gridAutoRows: 'maxContent', 
            marginLeft: '175px', 
            marginRight: '175px', 
            marginTop: '50px', 
            border: '3px solid'
        }
        const mappedArray = this.state.array.map((object, index) => {
                return(
                    <Badge
                        key={object.name + index}
                        name={object.name}
                        email={object.email}
                        birthPlace={object.birthPlace}
                        phone={object.phone}
                        favFood={object.favFood}
                        about={object.about}
                        backgroundColor={object.backgroundColor}
                    />
                )
        })
        const {firstName, lastName, email, birthPlace, phone, favFood, about} = this.state;
        const isEnabled = firstName.length > 0 && lastName.length > 0 && email.length > 0 && birthPlace.length > 0 && phone.length > 0 && favFood.length > 0 && about.length > 0;
        return (
            <div>
                <form onSubmit={this.popBadge} style={formStyle}>
                    <input  style={{...inputStyle, ...inputStyle.one}} pattern='.{3,}' value={firstName} name='firstName' onChange={this.changeState} type="text" placeholder='First Name' required/>
                    <input  style={{...inputStyle, ...inputStyle.two}} pattern='.{3,}' value={lastName} name='lastName' onChange={this.changeState} type="text" placeholder='Last Name' required/>
                    <input  style={{...inputStyle, ...inputStyle.three}} pattern='.{3,}' value={email} name='email'  onChange={this.changeState} type="text" placeholder='Email' required/>
                    <input  style={{...inputStyle, ...inputStyle.four}} pattern='.{3,}' value={birthPlace} name='birthPlace' onChange={this.changeState} type="text" placeholder='Place of Birth' required/>
                    <input  style={{...inputStyle, ...inputStyle.five}} pattern='.{7,}' value={phone} name='phone' onChange={this.changeState} type="number" placeholder='Phone' required/>
                    <input  style={{...inputStyle, ...inputStyle.six}} pattern='.{3,}' value={favFood} name='favFood' onChange={this.changeState} type="text" placeholder='Favorite Food' required/>
                    <textarea  rows='auto' style={{height: '100px', width:'1000px', gridColumn: '1/3', gridRow: '4/5', fontSize: '20px', margin: '20px'}} pattern='.{3,}' value={about} name='about' onChange={this.changeState} type="text" placeholder='Tell us about yourself' required/>
                    <button style={{width:'100px', fontSize: '20px', marginLeft: '470px', backgroundColor: '#ffffff00', color: 'grey', gridColumn: '1/3', marginBottom: '20px'}} disabled={!isEnabled}>Submit</button>
                </form>
                {mappedArray}
            </div>
        )
    }
}

export default Form;