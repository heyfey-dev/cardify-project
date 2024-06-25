
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Autotype = () => {
  const [text] = useTypewriter({
    words: ['Spend.', 'Exchange.', 'Save.'], 
    loop: 0, // Loop infinitely
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <div>
      <h1>
        
        <span style={{ color: 'rgb(24,204,63)', fontWeight: 'bolder', fontSize:'3rem' }}>
          {text}
        </span>
        <Cursor />
      </h1>
    </div>
  );
};

export default Autotype;
