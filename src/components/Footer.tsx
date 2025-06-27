import { FaGlobe, FaLinkedin, FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
        
        <div className="text-center sm:text-left">
          <p className="text-xl font-bold">Administrador de Productos</p>
          <p className="text-gray-300">Desarrollado por <strong>Jesús Pineda</strong></p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          <a
            href="https://jesus-pineda-portafolio.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sitio Web personal"
            className="flex items-center gap-2 text-gray-200 hover:text-orange-500 transition"
          >
            <FaGlobe size={18} />
            <span>Sitio Web</span>
          </a>

          <a
            href="https://www.linkedin.com/in/jesús-pineda-630a3b300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de LinkedIn"
            className="flex items-center gap-2 text-gray-200 hover:text-orange-500 transition"
          >
            <FaLinkedin size={18} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/JesusPineda29"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Repositorio en GitHub"
            className="flex items-center gap-2 text-gray-200 hover:text-orange-500 transition"
          >
            <FaGithub size={18} />
            <span>GitHub</span>
          </a>
        </nav>

        <div className="text-center sm:text-right text-gray-200">
          © {new Date().getFullYear()} - Todos los derechos reservados
        </div>

      </div>
    </footer>
  );
};

