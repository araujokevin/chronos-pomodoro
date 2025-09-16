import { Container } from './components/Container/Container';
import { Heading } from './components/Heading/Heading';
import { Logo } from './components/Logo/Logo';
import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  );
}
