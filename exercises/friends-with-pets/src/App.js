import React from 'react';
import FriendList from './FriendList';


const friends = [
  {
    name: "Ben",
    age: 29,
    pets: [
      {
        name: "spot",
        breed: "tabby"
      },{
        name: "John Johnson",
        breed: "husky"
      },{
        name: "Bear the bear",
        breed: "Grizzly"
      }
    ]
  },{
    name: "Bob",
    age: 31,
    pets: [
      {
        name: "Sally",
        breed: "Australian Shepard"
      }
    ]
  },{
    name: "Marcus",
    age: 25,
    pets: [
      {
        name: "Indy",
        breed: "Akita"
      },{
        name: "Anna",
        breed: "persian cat"
      }
    ]
  },{
    name: "Jacob",
    age: 20,
    pets: [
      {
        name: "fluffy",
        breed: "sphynx cat"
      },{
        name: "patches",
        breed: "sphynx cat"
      },{
        name: "tiger",
        breed: "sphynx cat"
      },{
        name: "oscar",
        breed: "sphynx cat"
      }
    ]
  }
]
const App = () =>{
  const parent ={
    backgroundColor: "lightBlue",
    margin: "-7px"
  }
  const title = {
    fontSize: "50px",
    textAlign: "center"
  }
  return(
    <div style={parent}>
      <div style={title}>Your Friends List</div>
      <br/>
      <br/>
      <br/>
      <br/>
      <FriendList />
    </div>
  )

}
export default App;
