export default function SnackList() {
    const snackArray = [
        {rank: 5, name: 'Peanut Butter Protein Bar'},
        {rank: 4, name: 'Sour gummy worms'},
        {rank: 3, name: 'Lays w/ Hotsauce'},
        {rank: 2, name: 'Chocolate Chip Cookies'},
        {rank: 1, name: 'PB&J Sandwich'}
    ]
    const sortedSnacks = snackArray.toSorted();
    return (
        <div>
            {sortedSnacks.map(snack => <li key={snack.rank}>{snack.name}</li>)}
        </div>
    );
}