import React, { Component } from 'react';
import deleteButton from './Icons/delete.png';
import editButton from './Icons/edit.png'
// import {withProvider} from './CuteThingsProvider'
import Form from './Form'


class CuteThing extends Component {
    constructor(){
        super()
        this.state = {
            edit: false
        }
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }    


    render() {
        let {title, imgUrl, description, _id} = this.props.item
        return (
            <div style={{backgroundColor: '#8D6AB2', padding: '30px', display: 'grid', gridTemplateColumns: '1fr', gridAutoRows: 'max-content'}}>
                {this.state.edit ?
                <>
                    <Form type='edit' item={this.props.item} toggleEdit={this.toggleEdit} />
                </>
                :
                <>
                    <div style={{fontSize:'30px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <div style={{lineHeight: '2'}}>{title}</div>
                        <div style={{padding: '17px'}}>
                            <img style={{height: '30px', paddingRight: '10px'}} onClick={this.toggleEdit} src={editButton} alt=""/>
                            <img style={{height: '30px'}} onClick={() => this.props.deleteItem(_id)} src={deleteButton} alt=""/>
                        </div>
                    </div>
                    <div style={{lineHeight: '2'}}>{description}</div>
                    <div>
                        <img style={{width:'300px', padding: '10px', paddingLeft: '10%'}} src={imgUrl} alt=""/>
                    </div>
                </>
                }
            </div>
        )
    }
}

// export default withProvider(CuteThing);
export default CuteThing;