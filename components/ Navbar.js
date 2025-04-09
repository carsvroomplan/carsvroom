'use client';

export default function Navbar({ onNavClick }) {
  return (
    <nav
      className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[90%] px-8 py-3 flex items-center justify-between rounded-full bg-red-700/40 text-white border border-white/10 backdrop-blur-sm z-50"
    >
      <div className="flex items-center space-x-2">
        <img
          src="/images/Logo_Carsvroom.png"
          alt="Carsvroom Logo"
          className="h-8 w-auto"
        />
        <span className="font-bold text-lg">Carsvroom</span>
      </div>

      <div className="hidden md:flex items-center space-x-6">
        <a href="#" onClick={onNavClick.home} className="hover:text-gray-200 transition">
          Home
        </a>
        <a href="#" onClick={onNavClick.subscription} className="hover:text-gray-200 transition">
          Subscription
        </a>
        <a href="#" onClick={onNavClick.about} className="hover:text-gray-200 transition">
          About
        </a>
        <a href="#" onClick={onNavClick.services} className="hover:text-gray-200 transition">
          Services
        </a>
        <a href="#" onClick={onNavClick.contact} className="hover:text-gray-200 transition">
          Contact
        </a>
        {/* Número de telefone clicável */}
        <a href="tel:+14254776527" className="font-semibold hover:text-gray-200 transition">
          (425) 477-6527
        </a>
      </div>
    </nav>
  );
}
