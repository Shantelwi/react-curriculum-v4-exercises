export default function Child({onIncrement}) {
  return (
    <div>
      <button onClick={onIncrement}>Increment Counter</button>
    </div>
    ) 
export default function Child({ onIncrement }) {
  return <button onClick={onIncrement}>Increment Counter</button>;
}
