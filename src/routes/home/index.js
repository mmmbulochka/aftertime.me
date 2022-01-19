import Container from 'src/components/container';
import Plus from './plus';
import {useState} from 'react';
import useMemories from '../../hooks/useMemories';

function Home() {
  const [message, setMessage] = useState('hih');
  const memories = useMemories();
  return (
    <div style={{display: 'flex'}}>
      <div
        style={{
          display: 'flex',
          gap: 40,
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: 40,
        }}
      >
        {memories.map((memory) => {
          return <Container memory={memory} key={memory.id} />;
        })}
      </div>
      <Plus message={message} setMessage={setMessage} />
    </div>
  );
}
export default Home;
