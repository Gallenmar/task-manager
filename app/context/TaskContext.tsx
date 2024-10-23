'use client';

import { createContext, FC, ReactNode, useContext, useState } from 'react';
import tasksData from '../tasks.json';
export interface Task {
  id: string;
  title: string;
  description: string | null;
  status: 'open' | 'in-progress' | 'closed' | null;
  type: 'feature' | 'bug' | 'enhancement' | 'task' | null;
}

interface TaskContextType {
  tasks: Task[];
  addOrEditTask: (newTask: Task) => void;
  deleteTask: (taskId: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskContextProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const [tasks, setTasks] = useState<Task[]>(tasksData as Task[]);

  const addOrEditTask = (newTask: Task) => {
    setTasks((prevTasks) => {
      const existingTaskIndex = prevTasks.findIndex(
        (task) => task.id === newTask.id
      );

      if (existingTaskIndex !== -1) {
        // If task exists, update it
        const updatedTasks = [...prevTasks];
        updatedTasks[existingTaskIndex] = newTask;
        return updatedTasks;
      } else {
        // If task does not exist, add it
        return [...prevTasks, newTask];
      }
    });
  };

  const deleteTask = (taskId: string) => {
    console.log(tasks);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <TaskContext.Provider value={{ tasks, addOrEditTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export function useTaskContext(): TaskContextType {
  const task = useContext(TaskContext);

  if (!task) {
    throw new Error('No task provided to the useContext');
  }

  return task;
}
