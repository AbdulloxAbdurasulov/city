const Hero = () => {
    return (
      <section
        id="hero"
        className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-black"
        style={{ backgroundImage: "url('eco.jpg')" }}
      >
        <h1 className="text-5xl font-bold mb-4 animate-fade-in-down">
          Добро пожаловать в Умный Город
        </h1>
        <p className="text-lg mb-8 animate-fade-in-up delay-2">
          Город будущего, доступный уже сегодня
        </p>
        <a
          href="#features"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-105"
        >
          Узнать больше
        </a>
      </section>
    );
  };
  
  export default Hero;
  