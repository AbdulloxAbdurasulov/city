const SmartBuildings = () => {
    return (
      <section id="smart-buildings" className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10">Умные Здания</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">Автоматизация</h3>
            <p className="text-gray-600">
              Современные умные здания автоматически контролируют освещение, климат и системы безопасности для экономии ресурсов и повышения комфорта.
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">Энергоэффективность</h3>
            <p className="text-gray-600">
              Умные здания проектируются с использованием энергоэффективных технологий, что позволяет сократить потребление энергии и уменьшить выбросы CO2.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default SmartBuildings;
  