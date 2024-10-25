'use client';

import { Card, Container, Stack, Typography } from '@mui/material';
import TaskForm from '../../components/TaskForm';

export default function Edt({ params }: { params: { id: string } }) {
  const { id } = params;

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
            Edit a Task
          </Typography>

          <TaskForm id={id} />
        </Card>
      </Stack>
    </Container>
  );
}
