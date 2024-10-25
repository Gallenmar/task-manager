'use client';

import React from 'react';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from 'next/navigation';

interface EditButtonProps {
  taskId: string;
}

const EditButton: React.FC<EditButtonProps> = ({ taskId }) => {
  const router = useRouter();
  const handleSubmit = () => {
    router.push(`/edit/${taskId}`);
  };

  return (
    <>
      <Button variant="contained" onClick={handleSubmit}>
        <EditIcon />
      </Button>
    </>
  );
};

export default EditButton;
