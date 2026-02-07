import { useState, useEffect } from 'react';

export default function HomeEn() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = ['/hero1.jpg', '/hero2.jpg'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <a href="/en" className="flex items-center gap-2">
              <span className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Jungwoo Autosys
              </span>
            </a>
            <div className={`hidden md:flex items-center gap-8 text-lg font-medium transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              <a href="#problems" className="hover:text-red-600 transition-colors whitespace-nowrap cursor-pointer">Product</a>
              <a href="#advantages" className="hover:text-red-600 transition-colors whitespace-nowrap cursor-pointer">Advantages</a>
              <a href="#spec" className="hover:text-red-600 transition-colors whitespace-nowrap cursor-pointer">Specs</a>
              <a href="#contact" className="hover:text-red-600 transition-colors whitespace-nowrap cursor-pointer">Contact</a>
              <a href="/" className="border border-white/40 text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap">
                Korean
              </a>
            </div>
            <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <i className={`ri-menu-line text-2xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}></i>
            </button>
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white rounded-b-2xl shadow-lg px-6 py-4 space-y-4">
              <a href="#problems" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 hover:text-red-600 transition-colors font-medium">Product</a>
              <a href="#advantages" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 hover:text-red-600 transition-colors font-medium">Advantages</a>
              <a href="#spec" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 hover:text-red-600 transition-colors font-medium">Specs</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 hover:text-red-600 transition-colors font-medium">Contact</a>
              <a href="/" className="block text-center border border-gray-300 text-gray-700 px-6 py-2.5 rounded-lg hover:bg-gray-100 transition-colors font-medium">Korean</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((src, idx) => (
            <img
              key={src}
              alt="Industrial site"
              className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              src={src}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center w-full">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-[zoomIn_1s_ease-out]">
            Beyond Sensor Limits
          </h1>
          <p className="text-4xl md:text-6xl lg:text-7xl font-bold text-white/90 mt-6 leading-tight animate-[zoomIn_1.2s_ease-out]">
            Enhancing Safety &amp; Efficiency
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl font-medium mt-8 tracking-wide animate-[zoomIn_1.4s_ease-out]" style={{ color: '#ffc000' }}>
            JWLS-V2 2WAY Level Sensor by Jungwoo Autosys
          </p>
        </div>
        {/* Slide Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <i className="ri-arrow-left-s-line text-white text-2xl"></i>
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroImages.length)}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <i className="ri-arrow-right-s-line text-white text-2xl"></i>
        </button>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <i className="ri-arrow-down-line text-white text-2xl"></i>
        </div>
      </section>

      {/* Problems Section - Limitations of Existing Level Sensors */}
      <section id="problems" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-white" style={{ backgroundColor: '#2d3338' }}>
              <i className="ri-error-warning-line"></i>
              <span className="text-sm font-semibold">Existing Problems</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Were Conventional<br />Level Sensors Inconvenient?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We analyzed the limitations of conventional level sensors encountered in the field and resolved them with JWLS-V2.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Lack of Visual Visibility',
                desc: 'Conventional sensors often lacked indicator lamps or used simple lighting, making it difficult to recognize when critical water levels were reached.',
                img: '/ChatGPT Image 2025년 7월 31일 오전 10_42_36.png',
                features: ['No indicator lamps', 'Simple lighting only', 'Hard to detect danger levels', 'Cannot distinguish fault from normal']
              },
              {
                title: 'Difficult Maintenance',
                desc: 'Corrosion-prone structures and complex designs made installation difficult, requiring full replacement when faults occurred.',
                img: '/ChatGPT Image 2025년 7월 31일 오전 10_42_26.png',
                features: ['Corrosion-prone structure', 'Difficult installation', 'Full replacement on failure', 'High maintenance costs']
              },
              {
                title: 'Poor Industrial Adaptability',
                desc: 'Difficulty in changing materials made it hard to adapt to various environments such as chemicals, wastewater, and food processing.',
                img: '/ChatGPT Image 2025년 7월 31일 오전 10_42_31.png',
                features: ['Hard to change materials', 'Limited adaptability', 'Restricted application range', 'Custom manufacturing limitations']
              }
            ].map((problem, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="relative h-56 overflow-hidden">
                  <img
                    alt={problem.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    src={problem.img}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{problem.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{problem.desc}</p>
                  <ul className="space-y-2">
                    {problem.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <i className="ri-close-circle-line text-red-400"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section - JWLS-V2 Key Advantages */}
      <section id="advantages" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-white" style={{ backgroundColor: '#2d3338' }}>
                <i className="ri-lightbulb-line"></i>
                <span className="text-sm font-semibold">JWLS-V2 Key Advantages</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Visualize Safety<br />with Intuitive Colors
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Monitor liquid levels in real-time at a glance through red and blue LEDs. Instantly distinguish between fault and normal status to improve safety response speed.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: 'ri-palette-line',
                    title: 'Intuitive Color-Based Level Display',
                    desc: 'Red/blue LEDs instantly distinguish fault vs. normal status'
                  },
                  {
                    icon: 'ri-speed-line',
                    title: 'Faster On-Site Response',
                    desc: 'Immediately detect level changes or anomalies to prevent accidents'
                  },
                  {
                    icon: 'ri-dashboard-line',
                    title: 'Simple Monitoring',
                    desc: 'Assess status instantly via LED signals, minimizing unexpected downtime'
                  },
                  {
                    icon: 'ri-building-4-line',
                    title: 'Wide Industrial Application',
                    desc: 'Semiconductor, wastewater, food, precision manufacturing, chemicals and more'
                  },
                  {
                    icon: 'ri-shield-check-line',
                    title: 'Durability + Easy Maintenance',
                    desc: 'Corrosion/acid-resistant structure with modular design for partial replacement'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className={`${item.icon} text-red-600 text-xl`}></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#contact" className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all hover:scale-105 whitespace-nowrap">
                Contact Us
              </a>
            </div>
            <div className="relative w-[83%] ml-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 flex items-center justify-center p-3">
                <img
                  alt="JWLS-V2 Level Sensor"
                  className="w-full h-auto max-h-[600px] object-contain"
                  src="/sensor.png"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl max-w-[220px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-11 h-11 bg-red-600 rounded-full flex items-center justify-center">
                    <i className="ri-award-fill text-white text-lg"></i>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Patented</div>
                    <div className="text-xs text-gray-600">No. 10-2715578</div>
                  </div>
                </div>
                <p className="text-xs text-gray-600">LED Level Sensor for Plating Tanks (Registered Oct. 2024)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patent Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-4">
              <img
                alt="Patent Certificate - LED Level Sensor for Plating Tanks"
                className="w-full h-auto object-contain rounded-lg"
                src="/certificate.jpg.jpg"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-white" style={{ backgroundColor: '#2d3338' }}>
                <i className="ri-award-line"></i>
                <span className="text-sm font-semibold">Patented Technology</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Officially Registered<br />with KIPO
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The core technology of JWLS-V2 level sensor is an original technology officially registered with the Korean Intellectual Property Office (KIPO). We deliver safe and reliable products backed by proven technology.
              </p>
              <div className="bg-white rounded-2xl p-8 shadow-sm space-y-4">
                {[
                  { label: 'Patent No.', value: '10-2715578' },
                  { label: 'Invention', value: 'LED Level Sensor for Plating Tanks' },
                  { label: 'Filed', value: 'May 19, 2023' },
                  { label: 'Registered', value: 'October 4, 2024' },
                  { label: 'Authority', value: 'KIPO (Korean Intellectual Property Office)' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <span className="text-gray-500 font-medium">{item.label}</span>
                    <span className="text-gray-900 font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-white" style={{ backgroundColor: '#2d3338' }}>
              <span className="text-sm font-semibold">Industries</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Applicable Across Various Industries</h2>
            <p className="text-lg text-gray-600">Material composition can be customized according to installation environment.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-cpu-line',
                title: 'Semiconductor & Plating',
                desc: 'Provides real-time monitoring for semiconductor manufacturing and plating processes that require precise level management.',
                color: 'bg-blue-50',
                iconColor: 'text-blue-600'
              },
              {
                icon: 'ri-drop-line',
                title: 'Wastewater Treatment',
                desc: 'Accurately detects level changes during wastewater treatment processes to ensure environmental safety.',
                color: 'bg-cyan-50',
                iconColor: 'text-cyan-600'
              },
              {
                icon: 'ri-restaurant-line',
                title: 'Food Processing',
                desc: 'Supports hygienic level management with materials that meet food safety standards.',
                color: 'bg-green-50',
                iconColor: 'text-green-600'
              },
              {
                icon: 'ri-settings-3-line',
                title: 'Precision Manufacturing',
                desc: 'Ensures manufacturing quality with precision sensors capable of detecting from as low as 1mm.',
                color: 'bg-purple-50',
                iconColor: 'text-purple-600'
              },
              {
                icon: 'ri-test-tube-line',
                title: 'Chemical Industry',
                desc: 'Operates reliably in corrosive chemical environments with corrosion and acid-resistant construction.',
                color: 'bg-orange-50',
                iconColor: 'text-orange-600'
              },
              {
                icon: 'ri-shield-star-line',
                title: 'Custom Manufacturing',
                desc: 'Materials (SUS, C-PVC, PP, PVDF) can be customized to suit your specific operating environment.',
                color: 'bg-red-50',
                iconColor: 'text-red-600'
              }
            ].map((industry, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className={`w-16 h-16 ${industry.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <i className={`${industry.icon} ${industry.iconColor} text-3xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">{industry.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-500 mb-6">※ Prior consultation required for special purpose use | Materials may vary depending on environment (chemical composition, concentration, temperature, etc.)</p>
            <a href="#contact" className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all hover:scale-105 whitespace-nowrap">
              Request Custom Quote
            </a>
          </div>
        </div>
      </section>

      {/* Spec + CTA Section */}
      <section id="spec" className="relative min-h-[52vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            alt="JWLS-V2 Installation Site"
            className="w-full h-full object-cover object-top"
            src="/hero2.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full" style={{ paddingTop: '100px', paddingBottom: '40px' }}>
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Specifications
            </h2>
            <p className="text-lg text-white/80">JWLS-V2 2WAY Level Sensor Detailed Specs</p>
          </div>

          {/* Spec Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-10">
            {[
              { icon: 'ri-flashlight-line', label: 'Power', value: 'DC 12V ~ 24V', sub: 'Low power consumption' },
              { icon: 'ri-signal-tower-line', label: 'Output', value: 'NPN Output', sub: 'NO / NC selectable' },
              { icon: 'ri-lightbulb-flash-line', label: 'LED Indicator', value: 'G / R / B LED', sub: 'Real-time status feedback' },
              { icon: 'ri-ruler-line', label: 'Detection Range', value: 'Min. 1mm~', sub: 'Precision sensing / minimal error' },
              { icon: 'ri-temp-hot-line', label: 'Operating Temp.', value: '1°C ~ 85°C', sub: 'Stable in high/low temp.' },
              { icon: 'ri-drop-line', label: 'Waterproof', value: 'O-Ring Option', sub: 'Viton / EPDM' }
            ].map((spec, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <i className={`${spec.icon} text-red-400 text-2xl mb-2`}></i>
                <div className="text-white/60 text-xs mb-1">{spec.label}</div>
                <div className="text-white text-lg font-bold mb-1">{spec.value}</div>
                <div className="text-white/70 text-xs">{spec.sub}</div>
              </div>
            ))}
          </div>

          {/* Material & Wiring Info */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h3 className="text-white text-base font-bold mb-2">
                <i className="ri-tools-line text-red-400 mr-2"></i>Materials
              </h3>
              <div className="space-y-2 text-white/80 text-sm">
                <div className="flex justify-between">
                  <span>Pipe Dedicated</span>
                  <span className="text-white font-semibold">SUS, C-PVC, PP (16A~20A)</span>
                </div>
                <div className="flex justify-between">
                  <span>Float Material</span>
                  <span className="text-white font-semibold">SUS, PVDF, PP</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h3 className="text-white text-base font-bold mb-2">
                <i className="ri-plug-line text-red-400 mr-2"></i>Wiring Guide (3-Wire)
              </h3>
              <div className="space-y-2 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></span>
                  <span>Red : P24A</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-gray-800 rounded-full flex-shrink-0 border border-white/30"></span>
                  <span>Black : N24A</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-white rounded-full flex-shrink-0"></span>
                  <span>White : I/O (Signal)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <p className="text-xl text-white/90 font-light mb-2">Product Inquiries & Custom Consultation</p>
            <p className="text-white/60 mb-8">Monday - Saturday | 9:00 AM - 6:00 PM (KST)</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="tel:010-9082-8804" className="bg-red-600 text-white px-7 py-3.5 rounded-lg font-semibold text-base hover:bg-red-700 transition-all hover:scale-105 whitespace-nowrap">
                Call Us
              </a>
              <a href="mailto:jwautosys@naver.com" className="bg-white text-gray-900 px-7 py-3.5 rounded-lg font-semibold text-base hover:bg-gray-100 transition-all hover:scale-105 whitespace-nowrap">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl font-bold text-white">Jungwoo Autosys</span>
              </div>
              <p className="text-lg text-white/70 mb-6 leading-relaxed">
                Visualizing Safety
              </p>
              <p className="text-sm text-white/50 leading-relaxed">
                Enhancing industrial safety and<br />
                efficiency with JWLS-V2 2WAY Level Sensor.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Products</h3>
              <ul className="space-y-3 text-white/70">
                <li><a href="#problems" className="hover:text-red-600 transition-colors cursor-pointer">JWLS-V2 Level Sensor</a></li>
                <li><a href="#industries" className="hover:text-red-600 transition-colors cursor-pointer">Custom Manufacturing</a></li>
                <li><a href="#spec" className="hover:text-red-600 transition-colors cursor-pointer">Specifications</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-3 text-white/70">
                <li><a href="#advantages" className="hover:text-red-600 transition-colors cursor-pointer">Key Advantages</a></li>
                <li><a href="#industries" className="hover:text-red-600 transition-colors cursor-pointer">Industries</a></li>
                <li><a href="#contact" className="hover:text-red-600 transition-colors cursor-pointer">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-3 text-white/70 text-sm">
                <li className="flex items-start gap-2">
                  <i className="ri-map-pin-line text-red-600 mt-1"></i>
                  <span>325, Sandan-ro, Danwon-gu, Ansan-si,<br />Gyeonggi-do, Korea (Lead Smart Square CC142)</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-phone-line text-red-600"></i>
                  <span>010-9082-8804</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-mail-line text-red-600"></i>
                  <span>jwautosys@naver.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm text-white/60">&copy; 2025 Jungwoo Autosys. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <a href="#" className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                <i className="ri-youtube-line"></i>
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                <i className="ri-instagram-line"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
