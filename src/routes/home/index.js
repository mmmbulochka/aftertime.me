import Container from 'src/components/container';
import Plus from './plus';
import {useState} from 'react';
import useMemories from '../../hooks/useMemories';
import {useEffect} from 'react';
import {memories} from 'src/stores';
import {observer} from 'mobx-react-lite';

function Home() {
  const [message, setMessage] = useState('hih');
  // const memories = useMemories();
  useEffect(() => {
    memories.loadMemories();
  }, []);

  return (
    <div style={{display: 'flex'}}>
      <div
        style={{
          display: 'flex',
          gap: 40,
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: 40,
          paddingLeft: 40,
          paddingRight: 40,
        }}
      >
        {memories.memories.map((memory) => {
          return <Container memory={memory} key={memory.id} />;
        })}
      </div>
      <Plus message={message} setMessage={setMessage} />
    </div>
  );
}
export default observer(Home);
