import {useState } from 'react';
import UserProfile from '../../components/UserProfile.jsx';
import FilterButtons from '../../components/FilterButtons.jsx';
import TaskItem from '../../components/TaskItem.jsx';
import useTasks from '../../hooks/useTasks.jsx';
import {filterTasks} from '../../utils/filterTasks.jsx';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');
  const {tasks, loading} = useTasks();
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

  return(
    <div>
      <UserProfile />
      <FilterButtons  filter={filter} setFilter={setFilter}/>

      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task}/>
        ))}
      </ul>
      <UserProfile name="Student" />
      <TaskFilterButton filter={filter} setFilter={setFilter} />

      {visibleTasks.map((task) => (
        <SingleTaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
