const SmartMobility = () => {
  return (
    <section 
      id="smart-mobility" 
      className="py-20 bg-gradient-to-r from-blue-500 to-green-500 text-center"
    >
      <h2 className="text-4xl font-bold text-white mb-10">Умная Мобильность</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-8 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform">
          <h3 className="text-3xl font-semibold mb-4">Беспилотные автомобили</h3>
          <p className="text-gray-800">
            Инновационные технологии для безопасного и эффективного передвижения.
          </p>
        </div>
        <div className="p-8 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform">
          <h3 className="text-3xl font-semibold mb-4">Интеллектуальные транспортные системы</h3>
          <p className="text-gray-800">
            Оптимизация движения через использование данных в реальном времени.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SmartMobility;
