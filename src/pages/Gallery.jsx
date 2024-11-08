import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const events = [
    {
      title: 'C-Workshop',
      images: Array(6).fill('/placeholder.jpg'),
    },
    {
      title: 'Code Jam',
      images: Array(6).fill('/placeholder.jpg'),
    },
    {
      title: 'Recruitment',
      images: Array(6).fill('/placeholder.jpg'),
    },
    {
      title: 'Farewell',
      images: Array(6).fill('/placeholder.jpg'),
    },
  ];

  return (
    <div className="pt-20">
      <PageHeader title="Gallery" subtitle="Memories from our events" />

      <div className="section-container">
        {events.map((event, eventIndex) => (
          <motion.div
            key={eventIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">{event.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {event.images.map((image, imageIndex) => (
                <motion.div
                  key={imageIndex}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square bg-white/10 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`${event.title} ${imageIndex + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full p-4"
          />
        </div>
      )}
    </div>
  );
}
