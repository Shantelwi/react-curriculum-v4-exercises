import { useState } from 'react';
import TaskFilterButton from './taskFilterButton';
import SingleTaskItem from './singleTaskItem';
import UserProfile from './userProfile';
import filterTasks from './utils/filterTasks';
import useTasks from './hooks/useTasks';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');

  const { tasks, loading } = useTasks();

  const visibleTasks = filterTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <UserProfile name="Student" />
      <TaskFilterButton filter={filter} setFilter={setFilter} />

      {visibleTasks.map((task) => (
        <SingleTaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
