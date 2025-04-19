import { useEffect, useState } from 'react';
import Gallery from './Gallery';
import DestinationSelector from './DestinationSelector';
import localTours from './data';

const App = () => {
  const [tours, setTours] = useState([]);
  const [selected, setSelected] = useState('all');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Fetch tours from backup data (localTours)
  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      try {
        setTours(localTours); // Using localTours instead of external API to avoid CORS
        setError(false);
      } catch (error) {
        console.error(error);
        setError(true);
      }
      setLoading(false);
    };

    fetchTours();
  }, []);

  // Remove one tour from the list
  const handleRemove = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  // Reset tours to original local data
  const resetTours = () => {
    setTours(localTours);
    setSelected('all');
  };

  // Filter by selected tour
  const filteredTours = selected === 'all'
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
        onRefresh={resetTours}
      />
    </main>
  );
};

export default App;
