import Container from 'src/components/container';
import Plus from './plus';
import {useState} from 'react';
function Home() {
  const [message, setMessage] = useState('hih');
  return (
    <div>
      <Container message={message} />
      <Container />
      <Container />
      <Container />
      <Container />
      <Plus message={message} setMessage={setMessage} />
    </div>
  );
}
export default Home;
