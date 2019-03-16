import React, { Component } from 'react';
import './App.css';
import {withProvider} from './BountiesProvider'
import BountyCard from './BountyCard';
import Form from './Form';

class App extends Component {
  
  componentDidMount(){
    this.props.getBounties()
  }

  render() {
    const mappedBounties = this.props.bounties.map(bounty => <BountyCard key={bounty._id} bounty={bounty} />)
    return (
      <div className='body'>
        <div className='header'>
          {this.props.newBounty ?
              <>
                <Form formType='add' bounty={this.props.bounty}/>
                <header>Bounties</header>
              </>
          :
              <>
                <div className='hamburger' onClick={this.props.toggleNew}>
                    <div className='dropMenu'></div>
                    <div className='dropMenu'></div>
                    <div className='dropMenu'></div>
                </div>
                <header>Bounties</header>
              </>
          }
        </div>
        <div className='bounties'>
          {mappedBounties}
        </div>
      </div>
    );
  }
}

export default withProvider(App);
