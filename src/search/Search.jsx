import React, { useState } from 'react';
import './Search.css';
import { Link } from 'react-router-dom';
import img10 from './searchpic/pitcher.jpg';
import charlie from './searchpic/charlieBeagle.jpg';
import toby from './searchpic/tobyBeagle.jpg';
import winston from './searchpic/winstonBeagle.avif';
import coco from './searchpic/cocoLabrador.jpg';
import max from './searchpic/maxLabrador.jpg';
import cooper from './searchpic/cooperLabrador.jpeg';
import teddy from './searchpic/teddyLabrador.jpg';
import benji from './searchpic/benjiPitbull.jpg';
import nola from './searchpic/nolaPitbull.jpg';
import snoopy from './searchpic/snoopyPitbull.jpg';
import archie from './searchpic/archiePitbull.jpg';
import apricot from './searchpic/apricotGoldenretriever.jpg';
import bella from './searchpic/bellaGoldenretrieve.jpg';
import Bear from './searchpic/BearGoldenretriever.jpg';
import Cherry from './searchpic/cherryAmericanbully.jpg';
import Macy from './searchpic/macyAmericambully.jpg';
import oliver from './searchpic/oliverGermanshepherd.avif';
import avin from './searchpic/avinGermanshephard.jpg';
import Jack from './searchpic/jackPersiancat.jpg';
import Maisy from './searchpic/MaisyPersiancat.jpg';
import Ellie from './searchpic/ElliePersiancat.jpg';
import Max from './searchpic/MaxSiamese.jpeg';
import Bailey from './searchpic/baileySiamese.jpg';
import Georgia from './searchpic/GeorgiaSiamese.jpg';
import Milo from './searchpic/MiloMainecoon.jpg';
import Piper from './searchpic/PiperMainecoon.avif';
import Charlie from './searchpic/charlieShorthair.jpeg';
import Leo from './searchpic/leoSphynx.jpg';
import aster from './searchpic/asterShorthair.jpg';
import oreo from './searchpic/oreoSphynx.jpg';
import Maple from './searchpic/MapleShorthair.jpg';
import Ivy from './searchpic/ivyMainecoon.jpg';
import Andy from './searchpic/AndySphinx.jpg';

const allDogs = [
  { id: 1, name: 'Labrador Retriever',dogName:'Coco', type: 'dog' ,image: coco,Age:'7yrs'},
  { id: 2, name: 'Pitbull', type: 'dog' , dogName:'Archie',image: archie,Age:'5yrs'},
  { id: 3, name: 'Beagle', type: 'dog' , dogName:'Winston', image: winston,Age:'6yrs'},
  { id: 4, name: 'Labrador Retriever', dogName:'Max', type: 'dog' ,image: max,Age:'5yrs'},
  { id: 5, name: 'Pitbull', type: 'dog' , dogName:'Snoopy', image: snoopy,Age:'7yrs'},
  { id: 6, name: 'Labrador Retriever', type: 'Cooper' ,dogName:'Coco',image: cooper,Age:'6yrs'},
  { id: 7, name: 'Beagle', type: 'dog' ,dogName:'Charlie',image: charlie,Age:'4yrs'},
  { id: 8, name: 'Beagle', type: 'dog' ,dogName:'Toby',image: toby,Age:'5yrs'},
  { id: 9, name: 'Labrador Retriever', dogName:'Teddy', type: 'dog' ,image: teddy,Age:'7yrs'},
  { id: 10, name: 'Pitbull', type: 'dog' ,dogName:'Benji', image: benji,Age:'8yrs'},
  { id: 11, name: 'Pitbull', type: 'dog' ,dogName:'Nola', image: nola,Age:'5yrs'},
  { id: 12, name: 'Golden Retriever', type: 'dog' ,dogName:'Apricot', image: apricot,Age:'6yrs'},
  { id: 13, name: 'Golden Retriever', type: 'dog' ,dogName:'Bella', image: bella,Age:'7yrs'},
  { id: 14, name: 'Golden Retriever', type: 'dog' ,dogName:'Bear', image: Bear,Age:'8yrs'},
  { id: 15, name: 'American Bully', type: 'dog' ,dogName:'Cherry', image: Cherry,Age:'5yrs'},
  { id: 16, name: 'American bully', type: 'dog' ,dogName:'Macy', image: Macy,Age:'7yrs'},
  { id: 17, name: 'German Shephard', type: 'dog' ,dogName:'avin', image: avin,Age:'7yrs'},
  { id: 18, name: 'German Shephard', type: 'dog' ,dogName:'oliver', image: oliver,Age:'6yrs'},
];

const allCats = [
  { id: 1, name: 'Persian', type: 'cat' ,dogName:'Jack',image: Jack,Age:'9yrs'},
  { id: 2, name: 'Siamese', type: 'cat' ,dogName:'Max',image: Max,Age:'4yrs'},
  { id: 3, name: 'Maine Coon', type: 'cat' ,dogName:'Milo',image: Milo,Age:'5yrs'},
  { id: 4, name: 'British Shorthair', type: 'cat' ,dogName:'Charlie',image: Charlie,Age:'7yrs'},
  { id: 5, name: 'Sphynx', type: 'cat' ,dogName:'Leo',image: Leo,Age:'6yrs'},
  { id: 6, name: 'Persian', type: 'cat' ,dogName:'Maisy',image: Maisy,Age:'8yrs'},
  { id: 7, name: 'Siamese', type: 'cat' ,dogName:'Bailey',image: Bailey,Age:'5yrs'},
  { id: 8, name: 'Maine Coon', type: 'cat' ,dogName:'Piper',image: Piper,Age:'7yrs'},
  { id: 9, name: 'British Shorthair', type: 'cat' ,dogName:'Aster',image: aster,Age:'7yrs'},
  { id: 10, name: 'Sphynx', type: 'cat' ,dogName:'Oreo',image: oreo,Age:'6yrs'},
  { id: 11, name: 'Persian', type: 'cat' ,dogName:'Ellie',image: Ellie,Age:'4yrs'},
  { id: 12, name: 'Siamese', type: 'cat' ,dogName:'Georgia',image: Georgia,Age:'7yrs'},
  { id: 13, name: 'Maine Coon', type: 'cat' ,dogName:'Ivy',image: Ivy,Age:'6yrs'},
  { id: 14, name: 'British Shorthair', type: 'cat' ,dogName:'Maple',image: Maple,Age:'5yrs'},
  { id: 15, name: 'Sphynx', type: 'cat' ,dogName:'Andy',image: Andy,Age:'8yrs'},
  
];


function DogCard({ name ,image ,dogName,Age}) {
//  const imagePath = require(`./searchpic/${image}`).default;
  return (
    <div style={{borderRadius:20 ,fontSize:20, color:'black', border: '2px solid #000000', textAlign:'center',padding: '12px', margin: '15px', width: '350px',height: '400px' }}>
      <img src={image} alt={dogName} style={{ borderRadius:12, width: '100%', height: '75%', objectFit: 'cover' }} />
      <b><div>{dogName}</div></b>
      <div>{Age}</div>
      <div>{name}</div>
      
    </div>
  );
}

function Search() {
  
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  // const filteredCats = allCats.filter(cat => cat.name.toLowerCase().includes(searchQuery.toLowerCase()));
  // const filtered = allDogs.filter(dog => dog.name.toLowerCase().includes(searchQuery.toLowerCase()));

  //  const filteredDogs = filterType === 'cat' ? filteredCats : filtered;
  let filteredCats = [];
  let filtered = [];

if (filterType === 'cat') {
    filteredCats = allCats.filter(cat => cat.name.toLowerCase().includes(searchQuery.toLowerCase()));
} else if (filterType === 'dog') {
    filtered = allDogs.filter(dog => dog.name.toLowerCase().includes(searchQuery.toLowerCase()));
}

const filteredDogs = [...filteredCats, ...filtered];


  return (
    <div className='full'>
      <ul className="navbarhome">
      <li className="empty"></li>
      <li><Link className="li" to='/login'>Login</Link></li>
      <li><Link className="li" to='/sign'>Sign in </Link></li>
      <li><Link className="li" to='/eco'>Shopping</Link></li>
      <b><li><Link className="li" to='/search'>Adopt Now</Link></li></b>
      <li><Link className="li" to='/'>Home</Link></li>
      </ul>
      <center><h1 className='sdhead'>Search Your Furry Friend!</h1></center>
      <input className='searchbar'
        style={{color:'black',fontSize:20,width:1100,marginLeft:210}}
        type="text"
        placeholder="Search breed..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <select className='option' style={{color:'black',fontSize:20,width:250,marginLeft:210,marginBottom:50}} value={filterType} onChange={handleFilterChange}>
        <option>Select option</option>
        <option value="dog">Dogs</option>
        <option value="cat">Cats</option>
      </select>

      
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems:'center',justifyContent:'center',backgroundColor:'#FFCDB2'}}>
        {filteredDogs.map(dog => (
          <center><DogCard key={dog.id} name={dog.name} image={dog.image} dogName={dog.dogName} Age={dog.Age}/></center>
        ))}
      </div>
    </div>
  );
}

const Searchpage = () => {
  return (
    <>
      <Search />
    </>
  );
};

export default Searchpage;