import { useState, useEffect } from 'react';

function Home() {
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [name, setName] = useState([]);

  useEffect(() => {
    fetch("/home")
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setName(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }, [])

  if(error){
    return <div>Error: {error.message}</div>;
  }
  else if(!isLoaded){
    return <div>Loading...</div>;
  }
  else{
    return (
      <ul>
        {
          name.map(name=>(
            <li key={name.id}>{name.firstName} {name.lastName}</li>
          ))
        }
      </ul>
    )
  }

}

export default Home;