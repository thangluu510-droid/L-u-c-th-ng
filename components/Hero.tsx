import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full border border-gray-700 bg-gray-900/50 backdrop-blur-sm text-sm font-medium text-primary mb-4">
            👋 Xin chào, tôi là Alex
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            Biến ý tưởng thành <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Hiện thực số.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed">
            Tôi thiết kế trải nghiệm thương hiệu và giao diện người dùng giúp doanh nghiệp của bạn nổi bật trong thế giới kỹ thuật số.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a href="#portfolio" className="px-8 py-3.5 rounded-full bg-white text-dark font-bold hover:bg-gray-200 transition-colors shadow-lg">
              Xem Portfolio
            </a>
            <a href="#contact" className="px-8 py-3.5 rounded-full border border-gray-600 text-white font-bold hover:border-primary hover:text-primary transition-all">
              Liên hệ ngay
            </a>
          </div>
          
          <div className="flex items-center justify-center md:justify-start gap-8 pt-8 text-gray-500">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">5+</span>
              <span className="text-sm">Năm kinh nghiệm</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">100+</span>
              <span className="text-sm">Dự án hoàn thành</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">98%</span>
              <span className="text-sm">Khách hàng hài lòng</span>
            </div>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="relative w-full h-[600px] bg-gradient-to-tr from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 group">
             {/* Mockup UI representation */}
             <div className="absolute top-10 left-10 right-10 bottom-0 bg-dark rounded-t-xl p-4 shadow-inner border-t border-l border-r border-gray-700">
                <div className="flex space-x-2 mb-4">
                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                   <img src="https://picsum.photos/800/600?random=10" alt="Work Showcase" className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                </div>
             </div>
             {/* Floating Badge */}
             <div className="absolute bottom-20 -left-6 bg-white p-4 rounded-xl shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <i className="fas fa-check"></i>
                  </div>
                  <div>
                    <p className="text-dark font-bold text-sm">Chất lượng cao</p>
                    <p className="text-gray-500 text-xs">Cam kết pixel-perfect</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;