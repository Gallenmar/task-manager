'use client';

import { useRouter } from 'next/navigation';
import { Box, Card, Container, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Task, useTaskContext } from '@/app/context/TaskContext';
import DeleteButton from '@/app/components/deleteButton';
import EditButton from '@/app/components/editButton';

export default function TaskDetails({ params }: { params: { id: string } }) {
  const { id } = params;
  const { tasks } = useTaskContext();
  const [task, setTask] = useState<Task | null>(null);
  const router = useRouter();

  useEffect(() => {
    const foundTask = tasks.find((t) => t.id === id);
    if (foundTask) {
      setTask(foundTask);
    }
  }, [id, tasks]);

  if (!task) {
    return (
      <Container maxWidth="sm">
        <Typography
          variant="h5"
          sx={{ marginTop: '2rem', textAlign: 'center' }}
        >
          Task not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          marginTop: '1rem',
          marginBottom: '1rem',
          justifyContent: 'space-between'
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => router.push('/list')}
        >
          Back to Task List
        </Button>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <EditButton taskId={task.id} />
          <DeleteButton taskId={task.id} />
        </Box>
      </Box>

      <Card variant="outlined" sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h4" component="h1">
            {task.title}
          </Typography>

          <Typography variant="body1">
            <strong>Description:</strong>{' '}
            {task.description || 'No description provided'}
          </Typography>

          <Typography variant="body1">
            <strong>Type:</strong> {task.type ?? 'No type assigned'}
          </Typography>

          <Typography variant="body1">
            <strong>Status:</strong> {task.status ?? 'No status assigned'}
          </Typography>
        </Box>
      </Card>
    </Container>
  );
}
