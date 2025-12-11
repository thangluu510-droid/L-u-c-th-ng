import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050911] border-t border-gray-800 pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">ALEX.DESIGN</h3>
            <p className="text-gray-500 text-sm">Thiết kế sáng tạo cho kỷ nguyên số.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Trang chủ</a>
            <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a>
            <a href="#services" className="text-gray-400 hover:text-white transition-colors">Dịch vụ</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Liên hệ</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Alex Design Portfolio. All rights reserved.
          </p>
          <div className="flex space-x-4">
             <a href="#" className="text-gray-600 hover:text-primary transition-colors"><i className="fab fa-facebook-f"></i></a>
             <a href="#" className="text-gray-600 hover:text-primary transition-colors"><i className="fab fa-twitter"></i></a>
             <a href="#" className="text-gray-600 hover:text-primary transition-colors"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;