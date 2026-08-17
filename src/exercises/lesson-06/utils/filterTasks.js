function filterTasks(tasks, filter) {
  // #2: Filtering logic inside component
  if (filter === 'completed') {
    return tasks.filter((task) => task.completed);
  }
  if (filter === 'pending') {
    return tasks.filter((task) => !task.completed);
  }
}
export default filterTasks;
