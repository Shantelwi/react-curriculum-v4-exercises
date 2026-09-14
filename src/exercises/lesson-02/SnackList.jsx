function SnackList() {
  const snacks = [
    { name: 'popcorn', rank: 3 },
    { name: 'Twix', rank: 2 },
    { name: 'Granola', rank: 4 },
    { name: 'Fruit', rank: 1 },
    { name: 'Cake', rank: 5 },
  ];

  const ranked = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <>
      {ranked.map((item) => (
        <div key={item.name}>
          {item.name}: {item.rank}
        </div>
      ))}
    </>
  );
}

export default SnackList;
