
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Autotype = () => {
  const [text] = useTypewriter({
    words: ['Spend.', 'Exchange.', 'Save.'], 
    loop: 0, // Loop infinitely
    typeSpeed: 80,
    deleteSpeed: 30,
  });

  return (
    <div>
      <h1>
        
        <span style={{ color: 'red', fontWeight: 'bolder' }}>
          {text}
        </span>
        <Cursor />
      </h1>
    </div>
  );
};

export default Autotype;
