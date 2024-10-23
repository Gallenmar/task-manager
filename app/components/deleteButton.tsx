'use client';

import React from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTaskContext } from '../context/TaskContext';
import { useRouter } from 'next/navigation';

interface DeleteButtonProps {
  taskId: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ taskId }) => {
  const { deleteTask } = useTaskContext();
  const router = useRouter();

  const handleSubmit = () => {
    deleteTask(taskId);
    router.push('/');
  };

  return (
    <>
      <Button variant="contained" color="error" onClick={handleSubmit}>
        <DeleteIcon />
      </Button>
    </>
  );
};

export default DeleteButton;
