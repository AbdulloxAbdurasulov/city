const SmartGovernance = () => {
    return (
      <section 
        id="smart-governance" 
        className="py-20 bg-blue-900 text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-10">Умное Управление</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-800 rounded-lg shadow-md transition-transform hover:scale-105">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">Цифровые госуслуги</h3>
            <p className="text-gray-200">
              Доступ к государственным услугам через электронные платформы.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-md transition-transform hover:scale-105">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">Городская аналитика</h3>
            <p className="text-gray-200">
              Сбор и анализ данных для улучшения городской жизни.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default SmartGovernance;
  