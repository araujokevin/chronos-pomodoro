import { Container } from './components/Container/Container';
import { CountDown } from './components/CountDown/CountDown';
// import { Heading } from './components/Heading/Heading';
import { Logo } from './components/Logo/Logo';
import { Menu } from './components/Menu/Menu';
import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
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
        <form className="form">
          <div className="formRow">
            <label htmlFor="input">Task</label>
            <input id="input" type="text" />
          </div>

          <div className="formRow">Lorem ipsum dolor sit amet.</div>
          <div className="formRow">Ciclos</div>
          <div className="formRow"> 0 0 0 0 0 0</div>
          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
