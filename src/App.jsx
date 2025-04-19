// App.jsx
import { useState, useEffect } from 'react';
import Gallery from './Gallery';
import DestinationSelector from './DestinationSelector';

const url = 'https://course-api.com/react-tours-project';

export default function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState('all');

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setTours(data);
      setError(false);
    } catch (err) {
      console.error(err);
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const handleRemove = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const filteredTours =
    selected === 'all'
      ? tours
      : tours.filter((tour) => tour.name === selected);

  return (
    <main>
      <h1>🌍 Tour Destination Selector</h1>
      <DestinationSelector
        tours={tours}
        selected={selected}
        setSelected={setSelected}
      />
      <Gallery
        tours={filteredTours}
        loading={loading}
        error={error}
        onRemove={handleRemove}
        onRefresh={fetchTours}
      />
    </main>
  );
}