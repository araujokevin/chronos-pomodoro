import { Home } from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  // return <Home />;

  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
