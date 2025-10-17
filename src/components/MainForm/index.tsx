import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';

export function MainForm() {
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log('task:', taskNameInput.current.value);
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form'>
      <h1>O formulário foi enviado x</h1>
      <div className='formRow'>
        <DefaultInput
          id='meuInput'
          type='text'
          labelText='Task'
          placeholder='Digite algo...'
          ref={taskNameInput}
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
