'use client';

import TaskList from './components/taskList';
import { Button, Container, Link } from '@mui/material';
import { useTaskContext } from './context/TaskContext';

export default function Home() {
  const { tasks } = useTaskContext();

  return (
    <div>
      <Container maxWidth="sm">
        <TaskList n={10} />
        {tasks.length > 10 && (
          <Link sx={{ display: 'flex', justifyContent: 'center' }} href="/list">
            <Button variant="contained">View all tasks</Button>
          </Link>
        )}
      </Container>
    </div>
  );
}
