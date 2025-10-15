import type { TaskStateModel } from './TaskStateModel';

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  endDate: number | null; // quando o timer chega ao final
  interruptedAt: number | null; // quando a tarefa é interrompida
  type: keyof TaskStateModel['config'];
};
