import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

export function MainForm() {
  const { setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Digite o nome da tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: 1,
      type: 'workTime',
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: 1, // Conferir
        secondsRemaining, // Conferir
        formattedSecondsRemaining: '00:00', // Conferir
        tasks: [...prevState.tasks, newTask],
      };
    });
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
