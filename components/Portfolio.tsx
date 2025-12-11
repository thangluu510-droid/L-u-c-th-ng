import React, { useState } from 'react';
import { Project, Category } from '../types';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.ALL);

  const projects: Project[] = [
    {
      id: 1,
      title: "Neon Brand Identity",
      category: Category.BRANDING,
      image: "https://picsum.photos/600/400?random=1",
      description: "Xây dựng thương hiệu cho startup công nghệ."
    },
    {
      id: 2,
      title: "E-Commerce Mobile App",
      category: Category.UIUX,
      image: "https://picsum.photos/600/400?random=2",
      description: "Thiết kế trải nghiệm mua sắm mượt mà."
    },
    {
      id: 3,
      title: "Abstract Art Series",
      category: Category.ILLUSTRATION,
      image: "https://picsum.photos/600/400?random=3",
      description: "Bộ sưu tập minh họa số cho tạp chí."
    },
    {
      id: 4,
      title: "Finance Dashboard",
      category: Category.UIUX,
      image: "https://picsum.photos/600/400?random=4",
      description: "Hệ thống quản lý tài chính cá nhân."
    },
    {
      id: 5,
      title: "Coffee Shop Branding",
      category: Category.BRANDING,
      image: "https://picsum.photos/600/400?random=5",
      description: "Nhận diện thương hiệu chuỗi cà phê."
    },
    {
      id: 6,
      title: "Character Design",
      category: Category.ILLUSTRATION,
      image: "https://picsum.photos/600/400?random=6",
      description: "Thiết kế nhân vật cho game mobile."
    }
  ];

  const filteredProjects = activeCategory === Category.ALL 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const categories = [
    { id: Category.ALL, label: 'Tất cả' },
    { id: Category.BRANDING, label: 'Thương hiệu' },
    { id: Category.UIUX, label: 'UI/UX' },
    { id: Category.ILLUSTRATION, label: 'Minh họa' },
  ];

  return (
    <section id="portfolio" className="py-20 bg-dark relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Dự án tiêu biểu</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tuyển tập những dự án tâm huyết nhất mà tôi đã thực hiện trong suốt hành trình sáng tạo của mình.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative rounded-2xl overflow-hidden cursor-pointer">
              <div className="aspect-[4/3] w-full bg-gray-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2">{project.category}</span>
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-2">{project.description}</p>
                <div className="mt-4 flex items-center text-white text-sm font-medium">
                  Xem chi tiết <i className="fas fa-arrow-right ml-2 text-primary"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;