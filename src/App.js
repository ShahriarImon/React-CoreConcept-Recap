import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [photo, setPhoto] = useState([]);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(data => setPhoto(data.slice(0, 20)))
    console.log(photo)
  }, [])

  return (

    <div className="App">
      <header className="App-header">
        {
          photo.map(element => <Component title={element.title} url={element.url}></Component>)
        }
      </header>
    </div>
  );
}

const Component = (props) => {
  const [count, setCount] = useState(0);
  const styleCom = {
    border: '5px solid buildQueries',
    margin: '20px',
    padding: '30px',
    color: 'black',
    backgroundColor: 'orange'
  }
  const countPLus=()=>{setCount(count+1)}
  return (
    <div style={styleCom}>
      <img onClick={countPLus} src={props.url} alt="" />
      <figcaption>
        {props.title}
      </figcaption>
      <p>{count} times clicked</p>
      <AnotherCom name={props.title} count={count} setCount={setCount}></AnotherCom>

    </div>)
}

const AnotherCom = (props) => {
  const aStyleCom = {
    border: '5px solid red',
    margin: '10px',
    padding: '10px',
    color: 'grey',
    backgroundColor: 'yellow'
  }
  const reduceCount =()=>{
    props.setCount(props.count-1)
  }
  return (
    <div onClick={reduceCount} style={aStyleCom}>
      <p>Another one: {props.name}</p>
      <p>{props.count} times clicked</p>

    </div>)

}
export default App;
