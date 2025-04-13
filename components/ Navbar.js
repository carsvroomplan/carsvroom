'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar({ onNavClick }) {
  const [isOpen, setIsOpen] = useState(false);

  // Função para fechar o menu e chamar a função de navegação
  const handleNavClick = (handler) => {
    handler();
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar Principal */}
      <nav className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[90%] px-4 py-3 md:px-8 md:py-3 flex items-center justify-between rounded-full bg-red-700/70 text-white border border-white/10 backdrop-blur-sm z-50">
        <div className="flex items-center space-x-2">
          <img
            src="/images/Logo_Carsvroom.png"
            alt="Carsvroom Logo"
            className="h-6 md:h-8 w-auto"
          />
          <span className="font-bold text-base md:text-xl">Carsvroom</span>
        </div>
        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" onClick={() => onNavClick.home()} className="font-bold hover:text-gray-200 transition">
            Home
          </a>
          <a href="#" onClick={() => onNavClick.subscription()} className="font-bold hover:text-gray-200 transition">
            Subscription
          </a>
          <a href="#" onClick={() => onNavClick.about()} className="font-bold hover:text-gray-200 transition">
            About
          </a>
          <a href="#" onClick={() => onNavClick.services()} className="font-bold hover:text-gray-200 transition">
            Services
          </a>
          <a href="#" onClick={() => onNavClick.contact()} className="font-bold hover:text-gray-200 transition">
            Contact
          </a>
          <a href="tel:+14254776527" className="font-bold hover:text-gray-200 transition">
            (425) 477-6527
          </a>
        </div>
        {/* Botão de Menu Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} className="focus:outline-none">
            <FaBars size={24} />
          </button>
        </div>
      </nav>

      {/* Menu Lateral Mobile - Sidebar que surge da direita */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay com blur para o fundo */}
          <div
            className="fixed inset-0 bg-black opacity-50 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative ml-auto w-3/4 max-w-xs bg-red-700/100 text-white flex flex-col p-6 animate-slideInFromRight">
            <button onClick={() => setIsOpen(false)} className="self-end focus:outline-none mb-4">
              <FaTimes size={24} />
            </button>
            <a href="#" onClick={() => handleNavClick(onNavClick.home)} className="font-bold mb-4 hover:text-gray-200 transition">
              Home
            </a>
            <a href="#" onClick={() => handleNavClick(onNavClick.subscription)} className="font-bold mb-4 hover:text-gray-200 transition">
              Subscription
            </a>
            <a href="#" onClick={() => handleNavClick(onNavClick.about)} className="font-bold mb-4 hover:text-gray-200 transition">
              About
            </a>
            <a href="#" onClick={() => handleNavClick(onNavClick.services)} className="font-bold mb-4 hover:text-gray-200 transition">
              Services
            </a>
            <a href="#" onClick={() => handleNavClick(onNavClick.contact)} className="font-bold mb-4 hover:text-gray-200 transition">
              Contact
            </a>
            <a href="tel:+14254776527" className="font-bold hover:text-gray-200 transition">
              (425) 477-6527
            </a>
          </div>
        </div>
      )}
    </>
  );
}
