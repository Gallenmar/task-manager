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

  return (
    <>
      <Button
        variant="contained"
        color="error"
        onClick={() => deleteTask(taskId)}
      >
        <DeleteIcon />
      </Button>
    </>
  );
};

export default DeleteButton;
