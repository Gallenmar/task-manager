'use client';

import { Box, Card, IconButton, Typography } from '@mui/material';
import { Task, useTaskContext } from './context/TaskContext';
import DeleteButton from './components/deleteButton';
import { useEffect, useState } from 'react';

export default function Home() {
  const { tasks } = useTaskContext();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }
  return (
    <div>
      <Typography variant="h4" sx={{ p: 2, mb: 2 }}>
        Task List:
      </Typography>
      {tasks.length === 0 ? (
        <Typography sx={{ display: 'flex', justifyContent: 'center' }}>
          No tasks created.
        </Typography>
      ) : (
        tasks.map((task: Task, index: number) => (
          <Card variant="outlined" key={index} sx={{ p: 2, mb: 2 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'start'
                }}
              >
                {(task.status || task.type) && (
                  <Typography sx={{ color: 'gray', fontSize: '0.875rem' }}>
                    {task.status} - {task.type}
                  </Typography>
                )}

                <Typography variant="h6" sx={{ mb: 1 }}>
                  {task.title}
                </Typography>
                {task.description && (
                  <Typography variant="body2" color="textSecondary">
                    {task.description}
                  </Typography>
                )}
              </Box>
              <IconButton aria-label="delete" color="error">
                <DeleteButton taskId={task.id} />
              </IconButton>
            </Box>
          </Card>
        ))
      )}
    </div>
  );
}
