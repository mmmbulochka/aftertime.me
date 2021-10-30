import {useEffect, useState} from 'react';

function Sasha() {
  const [name, setName] = useState('anon');

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/test');
      const json = await response.json();
      setName(json.name);
    })();
  }, []);
  return <div>name is {name}</div>;
}

export default Sasha;
