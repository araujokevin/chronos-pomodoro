import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
// import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import { Tips } from '../Tips';

export function MainForm() {
  const { state, dispatch } = useTaskContext();
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

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });

    const worker = new Worker(
      new URL('../../workers/timerWorker.js', import.meta.url),
    );

    worker.postMessage('FAVOR'); //sim, posso fazer um favor
    worker.postMessage('FALA_OI'); //OK:OI!
    worker.postMessage('BLABLA'); //não entendi
    worker.postMessage('FECHAR'); //Tá bom, vou fechar

    worker.onmessage = function (event) {
      console.log('PRINCIPAL recebeu:', event.data);
    };
  }

  function handleInterruptedTask() {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
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
        <Tips />
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
