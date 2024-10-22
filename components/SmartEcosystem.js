const SmartEcosystem = () => {
    return (
      <section id="smart-ecosystem" className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-10">Умная Экосистема</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">Управление отходами</h3>
            <p className="text-gray-600">
              Инновационные системы управления отходами, которые автоматически сортируют мусор и перерабатывают материалы, уменьшая загрязнение.
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">Возобновляемые источники энергии</h3>
            <p className="text-gray-600">
              Умный город использует солнечные батареи и ветровую энергию для поддержания экологической устойчивости и снижения зависимости от ископаемых видов топлива.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default SmartEcosystem;
  