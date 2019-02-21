import React from 'react';
import InfoBox from './InfoBox';

const App = () => {
  const container = {
    display: "grid",
    gridAutoRows: "maxContent",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "50px",
    backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE5EHgd_hjY60R0-jmofnnEjjwjML8tmPY_sjzMxjlqeUlBPkM)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    margin: "-10px"
  }


    return (
      <div style={container}>
        <InfoBox title="Yoo-hoo" subtitle="Yee-hoo" info="chocolate"/>
        

      </div>
    )
}

export default App;
