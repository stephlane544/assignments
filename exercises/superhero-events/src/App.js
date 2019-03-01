import React, { Component } from 'react';
import Superhero from './Superhero';

class App extends Component {
  
  render() {
    const superheros = [
      {
        name: 'Aquaman',
        image: 'https://images-na.ssl-images-amazon.com/images/I/91JRHTfLvHL._SY445_.jpg',
        catchphrase: 'My man!'
      },
      {
        name: 'Batman',
        image: 'https://www.mezcotoyz.com/mas_assets/cache/image/1/0/4/f/4175.Jpg',
        catchphrase: 'To the Bat-pole Robin!'
      },
      {
        name: 'Aquaman',
        image: 'https://cdn3.movieweb.com/i/article/2oLJPTSD1ezyRd01dTatxq18hj4wam/798:50/Aquaman-Movie-Test-Screening-Response-Reaction.jpg',
        catchphrase: 'My man!'
      },
      {
        name: 'Captain America',
        image: 'https://cdn.britannica.com/s:500x350/30/182830-004-61C7794A.jpg',
        catchphrase: 'Avengers Assemble!'
      },
      {
        name: 'Aquaman',
        image: 'https://www.dccomics.com/sites/default/files/Marquee_AQAMN_VERT_ArthurCurry_DOM_2764x4096_master_5be33d991c9ed8.41217060.jpg',
        catchphrase: 'My man!'
      },
      {
        name: 'Catwoman',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Catwoman_poster.jpg/220px-Catwoman_poster.jpg',
        catchphrase: 'Meow'
      },
      {
        name: 'Aquaman',
        image: 'https://cdn.arstechnica.net/wp-content/uploads/2018/11/aquaALTTOP.jpg',
        catchphrase: 'My man!'
      },
      {
        name: 'Daredevil',
        image: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/daredevil_lob_crd_02.jpg',
        catchphrase: 'Bullseye'
      },
      {
        name: 'Aquaman',
        image: 'https://consequenceofsound.files.wordpress.com/2018/12/aquaman-e1544565258166.jpg?quality=80&w=380&h=380&crop=1',
        catchphrase: 'My man!'
      },
      {
        name: 'Green Lantern',
        image: 'https://m.media-amazon.com/images/M/MV5BMTMyMTg3OTM5Ml5BMl5BanBnXkFtZTcwNzczMjEyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        catchphrase: 'In brightest day... in blackest night, no evil shall escape my sight! Let those who worship evil\'s might beware my power--Green Lantern\'s light!'
      },
      {
        name: 'Iron Man',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Iron_Man_bleeding_edge.jpg/250px-Iron_Man_bleeding_edge.jpg',
        catchphrase: 'Iron man doesn\'t have a catchphrase'
      },
      {
        name: 'Spider-Man',
        image: 'https://pmcvariety.files.wordpress.com/2018/09/marvels-spider-man-review.png?w=1000&h=563&crop=1',
        catchphrase: 'My Spider-Sense is tingling.'
      },
      {
        name: 'Aquaman',
        image: 'https://pixel.nymag.com/imgs/daily/vulture/2018/12/19/19-aquaman-2.w700.h700.jpg',
        catchphrase: 'My man!'
      },
      {
        name: 'Wolverine',
        image: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/blogs/39242/2013/08/130648-130225.jpg?itok=wurm87-K',
        catchphrase: 'I\'m the best there is at what I do.'
      },
      {
        name: 'Wonder Woman',
        image: 'https://media1.s-nbcnews.com/i/newscms/2018_24/1345765/gal-gadot-wonder-woman-today-tease-4-180613_711673b7dd891415a88be754436ae233.jpg',
        catchphrase: 'Merciful Minerva!'
      },
      {
        name: 'Aquaman',
        image: 'https://revengeofthefans.com/wp-content/uploads/2018/02/Jason-Momoa-as-Aquaman-by-MauLoa-840x420.jpg',
        catchphrase: 'My man!'
      }
    ]
    const mappedSuperheros = superheros.map(superhero => {
      return(
        <Superhero 
        name={superhero.name}
        image={superhero.image}
        catchphrase={superhero.catchphrase}
        />
      )
    })

    const superheroes ={
      textAlign:'center'
    }
    
    return (
      <div style={superheroes}>
        {mappedSuperheros}
      </div>
    );
  }
}

export default App;
