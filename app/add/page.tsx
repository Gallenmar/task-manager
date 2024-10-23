'use client';

import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { useTaskContext } from '../context/TaskContext';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

interface FormValues {
  title: string;
  description: string;
  type: string;
  status: string;
}

export default function Add() {
  const { addTask } = useTaskContext();
  const router = useRouter();

  // Set up react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    addTask({
      id: Math.random().toString(36).slice(2, 9),
      title: data.title,
      description: data.description,
      type: data.type as 'feature' | 'bug' | 'enhancement' | 'task',
      status: data.status as 'open' | 'in-progress' | 'closed'
    });
    router.push('/');
  };

  return (
    <div>
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
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)} // react-hook-form handleSubmit
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2
              }}
            >
              <FormControl fullWidth>
                <TextField
                  id="title"
                  label="Title"
                  placeholder="Write a task title"
                  {...register('title', {
                    required: 'Title is required',
                    maxLength: {
                      value: 20,
                      message: "Title can't be more than 20 characters"
                    }
                  })}
                  error={Boolean(errors.title)}
                  helperText={errors.title?.message}
                />
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  id="description"
                  label="Description"
                  placeholder="Describe a task"
                  {...register('description', {
                    maxLength: {
                      value: 200,
                      message: "Description can't be more than 200 characters"
                    }
                  })}
                  error={Boolean(errors.description)}
                  helperText={errors.description?.message}
                  multiline
                  rows={3}
                />
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="type-label">Type</InputLabel>
                <Select
                  labelId="type-label"
                  id="type"
                  {...register('type')}
                  error={Boolean(errors.type)}
                  label="Type"
                >
                  <MenuItem value="">---None---</MenuItem>
                  <MenuItem value="feature">Feature</MenuItem>
                  <MenuItem value="bug">Bug</MenuItem>
                  <MenuItem value="enhancement">Enhancement</MenuItem>
                  <MenuItem value="task">Task</MenuItem>
                </Select>
                {errors.type && (
                  <Typography variant="body2" color="error">
                    {errors.type.message}
                  </Typography>
                )}
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="status-label">Status</InputLabel>
                <Select
                  labelId="status-label"
                  id="status"
                  {...register('status')}
                  error={Boolean(errors.status)}
                  label="Status"
                >
                  <MenuItem value="">---None---</MenuItem>
                  <MenuItem value="open">Open</MenuItem>
                  <MenuItem value="in-progress">In Progress</MenuItem>
                  <MenuItem value="closed">Closed</MenuItem>
                </Select>
                {errors.status && (
                  <Typography variant="body2" color="error">
                    {errors.status.message}
                  </Typography>
                )}
              </FormControl>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
              >
                Create Task
              </Button>
            </Box>
          </Card>
        </Stack>
      </Container>
    </div>
  );
}
