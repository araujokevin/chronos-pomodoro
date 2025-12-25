import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';

export function MainForm() {
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log('DEU CERTO');
  }

  return (
    <>
      <form onSubmit={handleCreateNewTask} className='form'>
        <div className='formRow'>
          <DefaultInput
            id='meuInput'
            type='text'
            labelText='Task'
            placeholder='Digite algo'
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
          <DefaultButton type='submit' icon={<PlayCircleIcon />} />
        </div>
      </form>
    </>
  );
}
