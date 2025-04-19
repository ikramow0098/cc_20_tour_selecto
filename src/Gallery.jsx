// Gallery.jsx
import TourCard from './TourCard';

export default function Gallery({ tours, loading, error, onRemove, onRefresh }) {
  if (loading) return <p>⏳ Loading tours...</p>;
  if (error) return <p>❌ Error loading tours.</p>;
  if (tours.length === 0)
    return (
      <div>
        <h2>No tours left. Refresh to reload.</h2>
        <button onClick={onRefresh}>🔄 Refresh</button>
      </div>
    );

  return (
    <div className="gallery">
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={onRemove} />
      ))}
    </div>
  );
}