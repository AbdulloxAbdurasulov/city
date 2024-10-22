const Header = () => {
    return (
      <header className="w-full bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-500">SmartCity</div>
        <nav className="space-x-4">
          <a href="#hero" className="text-gray-600 hover:text-blue-500">Главная</a>
          <a href="#features" className="text-gray-600 hover:text-blue-500">Особенности</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-500">Контакты</a>
        </nav>
      </header>
    );
  };
  
  export default Header;
  