import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-50 border-b border-gray-200 fixed top-0 left-0 w-full z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 bg-gray-50 focus:outline-none dark:text-gray-400"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:block md:w-auto text-center`}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 justify-center">
            <li>
              <a href="#inicio" className="block py-2 px-3 text-gray-900 md:p-0">
                Início
              </a>
            </li>
            <li>
              <a href="#galery" className="block py-2 px-3 text-gray-900 md:p-0">
                Galeria
              </a>
            </li>
            <li>
              <a href="#emprend" className="block py-2 px-3 text-gray-900 md:p-0">
                Empreendimento
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5511910760369"
                className="flex items-center gap-2 py-2 px-3 bg-green-500 text-white rounded-lg md:p-2 hover:bg-green-600"
              >
                <MessageCircle className="w-5 h-5" /> Entre em contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
