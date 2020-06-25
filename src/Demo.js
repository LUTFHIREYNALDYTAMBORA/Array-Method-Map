import React, {Component} from 'react';

class Demo extends Component {
  render() {
    let users = [
      {
        id : 1,
        name : 'Lutfhi',
        age : 27
      },
      {
        id : 2,
        name : 'Reynaldy',
        age : 28
      },
      {
        id : 3,
        name : 'Tambora',
        age : 29
      }
    ];
  
    let element = users.map((user, index) => {
      return  <div key={user.id}>
                <h2>Name : {user.name}</h2>
                <p>Age : {user.age}</p>
              </div>
  
    return (
      <div>
        <h1>Halloooooo</h1>
        <hr/>

        { element }
        <hr/>
      </div>
    );
  }
}

export default Demo;
