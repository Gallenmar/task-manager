'use client';

import { Button } from '@mui/material';
import Link from 'next/link';

const AddButton: React.FC = () => {
  return (
    <Link href="/add" passHref>
      <Button variant="contained">Add Task</Button>
    </Link>
  );
};

export default AddButton;
