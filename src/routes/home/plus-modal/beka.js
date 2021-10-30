import {useState} from 'react';
import * as React from 'react';

function nameForm() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [name, setName] = useState();
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <input type='text' name='name' onChange={handleChange} value={name} />

      <input type='submit' value='Отправить' />
    </div>
  );
}
