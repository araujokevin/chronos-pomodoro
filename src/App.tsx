import { Home } from './pages/Home';
import type { TaskStateModel } from './models/TaskStateModel';

import { useState } from 'react';
import { TaskContext } from './contexts/TaskContext';

import './styles/theme.css';
import './styles/global.css';

/*
export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  formattedTimeRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number; // 1 to 8
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};
*/

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedTimeRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

export function App() {
  const [state, setState] = useState(initialState);

  // return <Home />;

  return (
    <TaskContext.Provider value={{ outraCoisa: 321 }}>
      <Home />
    </TaskContext.Provider>
  );
}
