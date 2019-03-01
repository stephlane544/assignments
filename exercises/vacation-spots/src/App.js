import React, { Component } from 'react';
import VacationCard from './VacationCard';


let vacationSpots = [
  {
    place: "Meridian, Idaho",
    price: 40,
    timeToGo: "Spring"
  },{
    place: "Cancun",
    price: 900,
    timeToGo: "Winter"
  },{
    place: "China",
    price: 1200,
    timeToGo: "Fall"
  },{
    place: "Russia",
    price: 1100,
    timeToGo: "Summer"
  },{
    place: "Lebanon",
    price: 400,
    timeToGo: "Spring"
  }]
const App = () => {
  const container = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "50px"
  }
  const title ={
    fontSize:"50px",
    textAlign:"center"
  }
  const mappedSpots = vacationSpots.map((spot, i) => {
    let price;
    if(spot.price <= 500){
      price = `$${spot.price}`
    }else if(spot.price > 500 && spot.price <= 1000){
      price = `$$${spot.price}`
    }else if(spot.price > 1000){
      price = `$$$${spot.price}`

    }

    let backgroundColor;
    if(spot.timeToGo == "Spring"){
      backgroundColor = "lightGreen"
    }else if(spot.timeToGo == "Summer"){
      backgroundColor = "#9d8cfd"
    }else if(spot.timeToGo == "Fall"){
      backgroundColor = "#fdc256"
    }else if(spot.timeToGo == "Winter"){
      backgroundColor = "lightBlue"
    }

    return(
      <VacationCard 
        place={spot.place}
        price={price}
        timeToGo={spot.timeToGo}
        key={i + spot.place}
        backgroundColor={backgroundColor}
      />
    )
})
  return(
    <div>
    <div style={title}>Vacation Spots</div>
      <div style={container}>
        {mappedSpots}
      </div>
    </div>
  )
}

export default App;
