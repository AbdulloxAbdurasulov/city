const Features = () => {
    return (
      <section id="features" className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-10">Особенности Умного Города</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold mb-4">Энергосбережение</h3>
            <p className="text-gray-600">Использование возобновляемых источников энергии для минимизации углеродного следа.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold mb-4">Безопасность</h3>
            <p className="text-gray-600">Современные системы безопасности для защиты жителей и инфраструктуры.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold mb-4">Транспорт будущего</h3>
            <p className="text-gray-600">Умные транспортные системы, снижающие пробки и улучшающие экологию.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  