import type { TaskModel } from '../models/TaskModel';

export function getTaskStatus(task: TaskModel, activeTask: TaskModel | null) {
  if (task.completeDate) return 'completed';
  if (task.interruptDate) return 'interrupted';
  if (task.id === activeTask?.id) return 'inProgress';
  return 'abandoned';
}
