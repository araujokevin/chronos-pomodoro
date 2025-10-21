import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import sytles from './styles.module.css';

export function Cycles() {
  const { state } = useTaskContext();
  const cyclesStep = Array.from({ length: state.currentCycle });

  const cyclesDescriptionMap = {
    workTime: 'foco',
    shortBreakTime: 'descanso curto',
    longBreakTime: 'descanso longo',
  };

  return (
    <div className={sytles.cycles}>
      <span>Ciclos:</span>

      <div className={sytles.cycleDots}>
        {/* <span className={`${sytles.cycleDot} ${sytles.workTime}`}></span> */}

        {cyclesStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);

          return (
            <span
              key={`${nextCycleType}_${nextCycle}`}
              className={`${sytles.cycleDot} ${sytles[nextCycleType]}`}
              aria-label={`Indicador de ciclo de ${cyclesDescriptionMap[nextCycleType]}`}
              title={`Indicador de ciclo de ${cyclesDescriptionMap[nextCycleType]}`}
            >
              {' '}
            </span>
          );
        })}
      </div>
    </div>
  );
}
