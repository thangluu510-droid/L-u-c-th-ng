import React from 'react';
import { Service } from '../types';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Thiết kế Logo",
      price: "$500+",
      features: ["2 Concept Logo", "File Vector gốc", "Quy chuẩn sử dụng", "Hỗ trợ chỉnh sửa 3 lần"],
      icon: "fa-pen-nib"
    },
    {
      id: 2,
      title: "Bộ Nhận Diện",
      price: "$1,200+",
      popular: true,
      features: ["Logo & Slogan", "Bộ ấn phẩm văn phòng", "Profile công ty", "Social Media Kit", "Brand Guidelines chi tiết"],
      icon: "fa-layer-group"
    },
    {
      id: 3,
      title: "UI/UX Website",
      price: "$1,000+",
      features: ["Nghiên cứu người dùng", "Wireframe & Prototype", "Thiết kế giao diện hiện đại", "Tối ưu hóa trải nghiệm"],
      icon: "fa-laptop-code"
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#0b1120]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Dịch vụ cung cấp</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Tôi mang đến các giải pháp thiết kế toàn diện, từ xây dựng thương hiệu đến trải nghiệm kỹ thuật số, giúp doanh nghiệp của bạn phát triển bền vững.
            </p>
            <div className="flex gap-4">
              <div className="p-4 rounded-xl bg-gray-800 border border-gray-700">
                <i className="fas fa-clock text-2xl text-primary mb-2"></i>
                <h4 className="text-white font-bold">Đúng tiến độ</h4>
              </div>
              <div className="p-4 rounded-xl bg-gray-800 border border-gray-700">
                <i className="fas fa-star text-2xl text-secondary mb-2"></i>
                <h4 className="text-white font-bold">Chất lượng cao</h4>
              </div>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:col-span-1 lg:w-[150%] lg:-ml-[25%]">
             {/* Note: This layout trick (w-150%) is to make cards overflow slightly or span wider if needed, 
                 but for simplicity, let's keep it standard grid in the card list below */}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`relative p-8 rounded-3xl border ${
                service.popular 
                  ? 'bg-gray-800/50 border-primary shadow-xl shadow-primary/10 scale-105 z-10' 
                  : 'bg-gray-900 border-gray-800 hover:border-gray-700'
              } transition-all duration-300 flex flex-col`}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                  POPULAR
                </div>
              )}
              
              <div className="w-14 h-14 rounded-2xl bg-gray-800 flex items-center justify-center mb-6 text-primary text-2xl">
                <i className={`fas ${service.icon}`}></i>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 mb-6">
                {service.price}
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-400 text-sm">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className={`w-full py-3 rounded-xl font-bold text-center transition-colors ${
                  service.popular 
                    ? 'bg-primary hover:bg-secondary text-white' 
                    : 'bg-gray-800 hover:bg-gray-700 text-white'
                }`}
              >
                Chọn gói này
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;