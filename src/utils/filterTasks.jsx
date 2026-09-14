export function filterTasks(tasks, filter) {
    if (filter === 'completed') {
        return tasks.filter((task) => task.completed);
    }
    return tasks;
}