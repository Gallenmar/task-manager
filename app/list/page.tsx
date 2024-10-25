'use client';

import { useEffect, useState } from 'react';
import TaskList from '../components/taskList';

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }
  return (
    <div>
      <TaskList n={-1} />
    </div>
  );
}
