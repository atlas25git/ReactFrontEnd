import React, { useState, useEffect } from 'react';

const url = 'https://shielded-mountain-60766.herokuapp.com/posts';

// second argument

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
    });
    const users = await response.json();
    setUsers(users);
    console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h3>Posts</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, title, content } = user;
          console.log(user);
          return (
            <li key={id}>
              <div>
                <h3>{title}</h3><hr></hr>
                <h4>{content}</h4>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
