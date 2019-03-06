import React, { Component } from 'react';
import CuteThing from './CuteThing';
import {withProvider} from './CuteThingsProvider';
import Form from './Form';

class List extends Component {

    componentDidMount(){
        this.props.getItems()
    }

    render (props) {
        const mappedThing = this.props.list.map(item => <CuteThing key={item._id} item={item} {...this.props} />)
        return(
            <>
                <div style={{display: 'grid', gridTemplateColumns: '7fr 12fr', gridAutoRows: 'max-content'}}>
                    {this.props.newItem ?
                        <Form type='add' item={this.props.item}/>
                    :
                        <div onClick={this.props.toggleNew} style={{padding: '20px', marginTop: '20px'}}>
                            <div style={{height: '5px', width:'30px', backgroundColor: 'black', borderRadius: '10px', marginBottom: '5px'}}></div>
                            <div style={{height: '5px', width:'30px', backgroundColor: 'black', borderRadius: '10px', marginBottom: '5px'}}></div>
                            <div style={{height: '5px', width:'30px', backgroundColor: 'black', borderRadius: '10px'}}></div>
                        </div>
                    }
                    <header style={{fontSize: '50px', lineHeight: '3', marginLeft: '30px', gridColumn: '2/3'}}>Cutesy Stuff!!</header>
                </div>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridAutoRows: 'max-content', gridGap: '30px'}}>
                    {mappedThing}
                </div>
            </>
        )
    }
}

export default withProvider(List)