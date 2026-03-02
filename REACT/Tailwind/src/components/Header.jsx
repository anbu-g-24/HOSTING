function Display({ value }) {
  return <h2>{value}</h2>;
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Display value={count} />
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}
