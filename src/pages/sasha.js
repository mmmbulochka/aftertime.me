// import {useEffect, useState} from 'react';
//
// function Sasha() {
//   const [name, setName] = useState('anon');
//   const [age, setAge] = useState(0);
//
//   useEffect(() => {
//     (async () => {
//       const response = await fetch('/api/test');
//       const json = await response.json();
//       setName(json.name);
//       setAge(json.age);
//     })();
//   }, []);
//   return (
//     <div>
//       name is {name}, age is {age}
//     </div>
//   );
// }
//
// export default Sasha;

import {useState} from 'react';

function AccordionMenu() {
  const [state, setState] = useState('chocolate');
  return (
    <div>
      <div>
        <div onClick={() => setState('chocolate')}>menu chocolate</div>
        {state === 'chocolate' && <h1>chocolate</h1>}
      </div>
      <div>
        <div onClick={() => setState('cake')}>menu cake</div>
        {state === 'cake' && <h1>cake</h1>}
      </div>
      <div>
        <div onClick={() => setState('muffin')}>menu muffin</div>
        {state === 'muffin' && <h1>muffin</h1>}
      </div>
    </div>
  );
}

export default AccordionMenu;
