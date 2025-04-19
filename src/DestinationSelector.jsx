// DestinationSelector.jsx
export default function DestinationSelector({ tours, selected, setSelected }) {
  const names = ['all', ...new Set(tours.map((t) => t.name))];

  return (
    <div>
      <label htmlFor="dest-select">Select Destination:</label>
      <select
        id="dest-select"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {names.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}