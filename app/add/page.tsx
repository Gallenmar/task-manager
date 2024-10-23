'use client';

import { Card, Container, Stack, Typography } from '@mui/material';
import { useTaskContext } from '../context/TaskContext';
import { useRouter } from 'next/navigation';
import TaskForm from '../components/TaskForm';

export default function Add() {
  const router = useRouter();

  return (
    <Container maxWidth="sm">
      <Stack
        sx={{
          alignContent: 'center',
          height: { xs: '100%', sm: '100dvh' },
          p: 2,
          marginTop: '7rem'
        }}
      >
        <Card variant="outlined">
          <Typography
            variant="h5"
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            Create a Task
          </Typography>

          <TaskForm />
        </Card>
      </Stack>
    </Container>
  );
}
