import React from 'react';  

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/sbhbenjamin>">sbhbenjamin</a>
    </div>
  )
}

const App = () => {
  return (
  <>
    <h1>Greetings</h1>
    <Hello name="George" age={26+10}/>
    <Footer />
  </>
  );
}

export default App;
