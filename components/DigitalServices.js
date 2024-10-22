const DigitalServices = () => {
    return (
      <section 
        id="digital-services" 
        className="py-20 bg-gray-800 text-center"
      >
        <h2 className="text-4xl font-bold text-yellow-400 mb-8">Цифровые Услуги</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-900 rounded-lg shadow-md transition-transform hover:scale-105">
            <h3 className="text-2xl font-bold text-white mb-4">Умные парковки</h3>
            <p className="text-gray-300">
              Легкость поиска и бронирования парковочных мест через приложение.
            </p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg shadow-md transition-transform hover:scale-105">
            <h3 className="text-2xl font-bold text-white mb-4">Городские приложения</h3>
            <p className="text-gray-300">
              Мобильные решения для управления городской инфраструктурой.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default DigitalServices;
  