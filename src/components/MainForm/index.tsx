import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useTaskContext } from '../../contexts/TaskContext';

export function MainForm() {
  const { setState } = useTaskContext();
  function handleClick() {
    setState(prevState => {
      return {
        ...prevState,
        formattedTimeRemaining: '21:00',
      };
    });
  }

  return (
    <form className='form'>
      <button type='button' onClick={handleClick}>
        Clicar
      </button>
      <div className='formRow'>
        <DefaultInput
          id='meuInput'
          type='text'
          labelText='Task'
          placeholder='Digite algo...'
        />
      </div>

      <div className='formRow'>
        <p>Próximo intervalo é de X min</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} color='green' />
      </div>
    </form>
  );
}
