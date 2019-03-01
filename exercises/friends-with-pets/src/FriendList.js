import React from 'react';
import Friend from './Friend';

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
const FriendList = () => {
    const container ={
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        fontSize: "24px"
    }

    const mappedFriends  = friends.map((friend, i) => {
        
        return(
            <Friend 
               name={friend.name}
               age={friend.age}
               pets={friend.pets}
               key={i + friend.name}

            />
        )
    })
    return(
        <div style={container}>
            {mappedFriends}
        </div>
    )

}

export default FriendList;