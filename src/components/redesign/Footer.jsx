import styles from "./styles";
import { instagram, linkedin, twitter, facebook, logo } from "../../assets";

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-10">
      <div className={`${styles.boxWidth} mx-auto ${styles.paddingX}`}>
        <div className="w-full flex items-center justify-center flex-col gap-7">
          
          {/* Logo */}
          <div>
            <img 
              alt="BeeFirst" 
              src={logo} 
              className="w-10 h-10"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a href="#solucao" className="font-poppins font-normal text-sm text-slate-300 hover:text-yellow-400 transition-colors">
              Solução
            </a>
            <a href="#beneficios" className="font-poppins font-normal text-sm text-slate-300 hover:text-yellow-400 transition-colors">
              Benefícios
            </a>
            <a href="#demo" className="font-poppins font-normal text-sm text-slate-300 hover:text-yellow-400 transition-colors">
              Demo
            </a>
            <a href="#contato" className="font-poppins font-normal text-sm text-slate-300 hover:text-yellow-400 transition-colors">
              Contato
            </a>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-4">
            <a href="/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
              <img src={instagram} alt="Instagram" className="w-6 h-6 brightness-0 invert" />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6 brightness-0 invert" />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
              <img src={twitter} alt="Twitter" className="w-6 h-6 brightness-0 invert" />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
              <img src={facebook} alt="Facebook" className="w-6 h-6 brightness-0 invert" />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center">
            <p className="text-slate-400 font-poppins font-normal text-xs">
              © 2024 BeeFirst • Hive - Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
