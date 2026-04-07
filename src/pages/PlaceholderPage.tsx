import { motion } from 'motion/react';

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-academy-black mb-4">{title}</h1>
        <p className="text-gray-600 max-w-md mx-auto">
          This page is currently under construction. Check back soon for updates.
        </p>
      </motion.div>
    </div>
  );
}
