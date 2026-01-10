import { TrashIcon } from 'lucide-react';
import { useMemo, useState } from 'react';

import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

import styles from './styles.module.css';

import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { sortTasks, type SortTasksOptions } from '../../utils/sortTasks';
import { showMessage } from '../../adapters/showMessage';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

const statusLabelMap = {
  completed: 'Completa',
  interrupted: 'Interrompida',
  inProgress: 'Em progresso',
  abandoned: 'Abandonada',
} as const;

export function History() {
  const { state, dispatch } = useTaskContext();
  const hasTasks = state.tasks.length > 0;

  // ✅ State guarda apenas o que o usuário controla
  const [sortConfig, setSortConfig] = useState<{
    field: SortTasksOptions['field'];
    direction: SortTasksOptions['direction'];
  }>({
    field: 'startDate',
    direction: 'desc',
  });

  // ✅ Tasks ordenadas são um valor derivado
  const sortedTasks = useMemo(() => {
    return sortTasks({
      tasks: state.tasks,
      field: sortConfig.field,
      direction: sortConfig.direction,
    });
  }, [state.tasks, sortConfig.field, sortConfig.direction]);

  function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
    setSortConfig(prev => ({
      field,
      direction: prev.direction === 'desc' ? 'asc' : 'desc',
    }));
  }

  function handleResetHistory() {
    showMessage.dismiss();

    showMessage.confirm('Tem certeza?', confirmation => {
      if (!confirmation) return;

      dispatch({ type: TaskActionTypes.RESET_STATE });
    });
  }

  const taskTypeDictionary: Record<string, string> = {
    workTime: 'Foco',
    shortBreakTime: 'Descanso curto',
    longBreakTime: 'Descanso longo',
  };

  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>Histórico</span>

          {hasTasks && (
            <span className={styles.buttonContainer}>
              <DefaultButton
                icon={<TrashIcon />}
                color='red'
                aria-label='Apagar todo o histórico'
                title='Apagar histórico'
                onClick={handleResetHistory}
              />
            </span>
          )}
        </Heading>
      </Container>

      <Container>
        {hasTasks && (
          <div className={styles.responsiveTable}>
            <table>
              <thead>
                <tr>
                  <th
                    onClick={() => handleSortTasks({ field: 'name' })}
                    className={styles.thSort}
                  >
                    Tarefa ↕
                  </th>
                  <th
                    onClick={() => handleSortTasks({ field: 'duration' })}
                    className={styles.thSort}
                  >
                    Duração ↕
                  </th>
                  <th
                    onClick={() => handleSortTasks({ field: 'startDate' })}
                    className={styles.thSort}
                  >
                    Data ↕
                  </th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>

              <tbody>
                {sortedTasks.map(task => {
                  const status = getTaskStatus(task, state.activeTask);

                  return (
                    <tr key={task.id}>
                      <td>{task.name}</td>
                      <td>{task.duration} min</td>
                      <td>{formatDate(task.startDate)}</td>
                      <td className={styles[`status-${status}`]}>
                        {statusLabelMap[status]}
                      </td>
                      <td>{taskTypeDictionary[task.type]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {!hasTasks && (
          <p
            style={{
              textAlign: 'center',
              fontWeight: '300',
            }}
          >
            <em>Ainda não existem tarefas criadas.</em>
          </p>
        )}
      </Container>
    </MainTemplate>
  );
}
