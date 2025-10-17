import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

export function MainForm() {
  const { setState } = useTaskContext();
  const taskNameRef = useRef<HTMLInputElement>(null);

  function handleSubmitNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!taskNameRef.current) return;

    const taskName = taskNameRef.current.value.trim();

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

    setState(prevState => ({
      ...prevState,
      config: { ...prevState.config },
      activeTask: newTask,
      currentCycle: 1,
      secondsRemaining,
      formattedTimeRemaining: '00:00',
      tasks: [...prevState.tasks, newTask],
    }));
  }

  return (
    <form onSubmit={handleSubmitNewTask} className='form'>
      <div className='formRow'>
        <DefaultInput
          id='taskName'
          type='text'
          labelText='Task'
          placeholder='Digite algo...'
          ref={taskNameRef}
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
