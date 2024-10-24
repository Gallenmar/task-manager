'use client';

import React from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTaskContext } from '../context/TaskContext';

interface AddButtonProps {
  taskId: string;
}

const AddButton: React.FC<AddButtonProps> = ({ taskId }) => {
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

export default AddButton;
