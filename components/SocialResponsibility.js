const SocialResponsibility = () => {
    return (
      <section 
        id="social-responsibility" 
        className="py-20 bg-gradient-to-r from-orange-400 to-red-500 text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-10">Социальная Ответственность</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md transition-transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4">Доступная инфраструктура</h3>
            <p className="text-gray-700">
              Городская инфраструктура, доступная для всех граждан.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md transition-transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4">Поддержка местных сообществ</h3>
            <p className="text-gray-700">
              Инициативы для поддержки и развития местных сообществ.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default SocialResponsibility;
  