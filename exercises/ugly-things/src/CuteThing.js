import React, { Component } from 'react';
import deleteButton from './Icons/delete.png';
import editButton from './Icons/edit.png'
import saveButton from './Icons/save.ico'

class CuteThing extends Component {
    constructor(props){
        super(props)
        this.state = {
            edit: false,
            title: props.item.title,
            image: props.item.imgUrl,
            description: props.item.description
        }
    }
    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    render() {
        let {title, image, description} = this.state
        return (
            <div style={{backgroundColor: '#17b7758c', padding: '30px', display: 'grid', gridTemplateColumns: '1fr', gridAutoRows: 'max-content'}}>
                {this.state.edit ?
                <>
                    <div style={{fontSize:'30px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <input type="text" placeholder={title}/>
                        <div>
                            <img style={{height: '30px'}} onClick={this.toggleEdit} src={saveButton} alt=""/>                        
                        </div>
                    </div>
                    <input type="text" placeholder={description}/>
                    <input type="text" placeholder={image}/>
                </>
                :
                <>
                    <div style={{fontSize:'30px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <div>{title}</div>
                        <div>
                            <img style={{height: '30px', paddingRight: '10px'}} onClick={this.toggleEdit} src={editButton} alt=""/>
                            <img style={{height: '30px'}} src={deleteButton} alt=""/>
                        </div>
                    </div>
                    <div>{description}</div>
                    <img style={{width: '300px'}} src={image} alt=""/>
                </>
                }
            </div>
        )
    }
}

export default CuteThing;