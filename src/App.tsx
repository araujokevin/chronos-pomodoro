import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';

export function App() {
  return (
    <>
      <Heading>
        Olá, mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt et sint
        accusamus quisquam dicta ipsam, iste perferendis quaerat consequatur at.
      </p>
    </>
  );
}
