'use client';

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Task, useTaskContext } from '../context/TaskContext';
import { useRouter } from 'next/navigation';

interface TaskFormProps {
  id?: string;
}

interface FormValues {
  title: string;
  description: string;
  type: string;
  status: string;
}

export default function TaskForm({ id }: TaskFormProps) {
  const { tasks, addOrEditTask } = useTaskContext();
  const [defaultValues, setDefaultValues] = useState<FormValues | null>(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: defaultValues || {}
  });

  useEffect(() => {
    if (id) {
      const task = tasks.find((t) => t.id === id);
      if (task) {
        setDefaultValues({
          title: task.title,
          description: task.description as string,
          type: task.type as string,
          status: task.status as string
        });
      } else {
        router.push('/');
      }
    }
  }, [id, tasks, router]);

  const handleTaskSubmit = (data: {
    title: string;
    description: string;
    type: string;
    status: string;
  }) => {
    addOrEditTask({
      id: defaultValues
        ? (id as string)
        : Math.random().toString(36).slice(2, 9),
      title: data.title,
      description: data.description,
      type: data.type as 'feature' | 'bug' | 'enhancement' | 'task',
      status: data.status as 'open' | 'in-progress' | 'closed'
    });
    router.push('/');
  };

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  const selectedType = watch('type', defaultValues?.type || '');
  const selectedStatus = watch('status', defaultValues?.status || '');

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleTaskSubmit)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        marginTop: 2
      }}
    >
      <FormControl fullWidth>
        <TextField
          id="title"
          label="Title"
          placeholder="Write a task title"
          autoFocus
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
          value={selectedType}
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
          value={selectedStatus}
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

      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
        {defaultValues ? 'Update Task' : 'Create Task'}
      </Button>
    </Box>
  );
}
