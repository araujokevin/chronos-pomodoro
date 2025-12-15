import { PlayCircleIcon } from 'lucide-react';
import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { DefaultInput } from './components/DefaultInput';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
import { Heading } from './components/Heading';
import { useState } from 'react';

export function App() {
  //Que todos os componentes que usam 'numero'.
  //Saibam das mudanças em seu valor.

  //Sempre que eu usar useState, não vou usar atribuição diretamente
  // const [numero, configurarNumero] = useState(() => {
  //   console.log('Lazy initialization');

  //   return 0;
  // });

  const [numero, configurarNumero] = useState(0);

  function handleClick() {
    configurarNumero(prevState => prevState + 1);
  }

  return (
    <>
      <Heading>
        Número: <span id='numero'>{numero}</span>
      </Heading>
      <button onClick={handleClick}>Aumenta</button>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form'>
          <div className='formRow'>
            <DefaultInput
              id='meuInput'
              type='text'
              labelText={numero.toString()}
              placeholder='Digite algo'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
