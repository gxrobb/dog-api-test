import './App.scss';
import DogsList from './components/DogsList';
// import { useEffect, useState } from 'react';

//grab the api url from the env
// const API_BASE = process.env.REACT_APP_API_BASE

// const [data, setData] = useState([])

// useEffect(() => {
//   fetch(API_BASE + '/breeds/image/random')
//   .then(res => res.json())
//   .then(json => setData(json))
// }, [])

// console.log(data)
function App() {
  
  return (
    <div className="App">
      <DogsList />
    </div>
  );
}

export default App;
