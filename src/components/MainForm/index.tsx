import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameRef = useRef<HTMLInputElement>(null);

  // Configurações e cálculo do próximo ciclo
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

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
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => ({
      ...prevState,
      config: { ...prevState.config },
      activeTask: newTask,
      currentCycle: nextCycle,
      secondsRemaining,
      formattedTimeRemaining: formatSecondsToMinutes(secondsRemaining),
      tasks: [...prevState.tasks, newTask],
    }));
  }

  function handleInterruptedTask() {
    setState(prevState => ({
      ...prevState,
      activeTask: null,
      secondsRemaining: 0,
      formattedTimeRemaining: '00:00',
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
          disabled={!!state.activeTask}
        />
      </div>

      <div className='formRow'>
        <p>Próximo intervalo é de X min</p>
      </div>

      {state.currentCycle > 0 && (
        <div className='formRow'>
          <Cycles />
        </div>
      )}

      <div className='formRow'>
        {!state.activeTask && (
          <DefaultButton
            aria-label='Iniciar nova tarefa'
            title='Iniciar nova tarefa'
            type='submit'
            icon={<PlayCircleIcon />}
            color='green'
            key='botao_submit'
          />
        )}

        {!!state.activeTask && (
          <DefaultButton
            aria-label='Interromper tarefa atual'
            title='Interromper tarefa atual'
            type='button'
            icon={<StopCircleIcon />}
            color='red'
            onClick={handleInterruptedTask}
            key='botao_button'
          />
        )}
      </div>
    </form>
  );
}
