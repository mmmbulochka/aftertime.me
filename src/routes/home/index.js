import Container from 'src/components/container';
import Plus from './plus';
import {useState} from 'react';
import useMemories from '../../hooks/useMemories';

function Home() {
  const [message, setMessage] = useState('hih');
  const memories = useMemories();
  return (
    <div>
      {memories.map((memory) => {
        return <Container message={memory.id} />;
      })}
      {/*<Container message={message} />*/}

      <Plus message={message} setMessage={setMessage} />
    </div>
  );
}
export default Home;
