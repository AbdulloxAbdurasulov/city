const HealthAndWellbeing = () => {
    return (
      <section 
        id="health-wellbeing" 
        className="py-20 bg-green-300 text-center"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Здоровье и Благополучие</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-lg transition-transform hover:scale-105">
            <h3 className="text-xl font-bold mb-4">Фитнес-трекеры</h3>
            <p className="text-gray-700">
              Поддержка активного образа жизни и мониторинг здоровья.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg transition-transform hover:scale-105">
            <h3 className="text-xl font-bold mb-4">Умные медицинские устройства</h3>
            <p className="text-gray-700">
              Технологии для удаленного контроля здоровья.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg transition-transform hover:scale-105">
            <h3 className="text-xl font-bold mb-4">Гармония в жизни</h3>
            <p className="text-gray-700">
              Решения для психического и физического благополучия.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default HealthAndWellbeing;
  