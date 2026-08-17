function SingleTaskItem({ task }) {
  return (
    <div>
      <p>
        {task.title} - {task.completed ? 'Completed' : 'Pending'}
      </p>
    </div>
  );
}
export default SingleTaskItem;
