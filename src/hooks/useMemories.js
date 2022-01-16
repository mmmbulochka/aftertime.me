import {useEffect, useState} from 'react';

function useMemories() {
  const [memories, setMemories] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch('/api/memories');
      const memories = await response.json();
      setMemories(memories);
    })();
  }, []);
  return memories;
}

export default useMemories;
