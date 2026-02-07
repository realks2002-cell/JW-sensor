import { useState, useEffect } from 'react';

export default function Home() {
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
            <a href="#" className="flex items-center gap-2">
              <span className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                정우오토시스
              </span>
            </a>
            <div className={`hidden md:flex items-center gap-8 text-lg font-medium transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              <a href="#problems" className="hover:text-red-600 transition-colors whitespace-nowrap cursor-pointer">제품소개</a>
              <a href="#advantages" className="hover:text-red-600 transition-colors whitespace-nowrap cursor-pointer">핵심장점</a>
              <a href="#spec" className="hover:text-red-600 transition-colors whitespace-nowrap cursor-pointer">제품사양</a>
              <a href="#contact" className="hover:text-red-600 transition-colors whitespace-nowrap cursor-pointer">문의하기</a>
              <a href="/en" className="border border-white/40 text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap">
                English
              </a>
            </div>
            <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <i className={`ri-menu-line text-2xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}></i>
            </button>
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white rounded-b-2xl shadow-lg px-6 py-4 space-y-4">
              <a href="#problems" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 hover:text-red-600 transition-colors font-medium">제품소개</a>
              <a href="#advantages" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 hover:text-red-600 transition-colors font-medium">핵심장점</a>
              <a href="#spec" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 hover:text-red-600 transition-colors font-medium">제품사양</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 hover:text-red-600 transition-colors font-medium">문의하기</a>
              <a href="/en" className="block text-center border border-gray-300 text-gray-700 px-6 py-2.5 rounded-lg hover:bg-gray-100 transition-colors font-medium">English</a>
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
              alt="산업 현장"
              className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              src={src}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center w-full">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-[zoomIn_1s_ease-out]">
            레벨센서의 한계를 넘어
          </h1>
          <p className="text-4xl md:text-6xl lg:text-7xl font-bold text-white/90 mt-6 leading-tight animate-[zoomIn_1.2s_ease-out]">
            안전과 효율을 높이다
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl font-medium mt-8 tracking-wide animate-[zoomIn_1.4s_ease-out]" style={{ color: '#ffc000' }}>
            Beyond sensor limits, enhancing safety &amp; efficiency
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

      {/* Problems Section - 기존 레벨센서의 한계 */}
      <section id="problems" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-white" style={{ backgroundColor: '#2d3338' }}>
              <i className="ri-error-warning-line"></i>
              <span className="text-sm font-semibold">Existing Problems</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">왜 기존 레벨센서는<br />불편했을까요?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              현장에서 겪는 기존 레벨센서의 한계를 분석하여 JWLS-V2로 해결했습니다.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: '시각적 가시성 부족',
                desc: '기존 센서는 램프가 없거나 단순 점등 방식이 많아 위험 수위 도달 시 추가적인 경고 인지가 어려웠습니다.',
                img: '/ChatGPT Image 2025년 7월 31일 오전 10_42_36.png',
                features: ['램프 없는 센서', '단순 점등 방식', '위험 수위 인지 어려움', '고장/정상 구분 불가']
              },
              {
                title: '유지보수의 어려움',
                desc: '부식에 취약한 구조와 복잡한 형태로 인해 설치가 불편하고, 고장 시 전체 교체가 필요했습니다.',
                img: '/ChatGPT Image 2025년 7월 31일 오전 10_42_26.png',
                features: ['부식에 취약한 구조', '설치 불편', '고장 시 전체 교체', '높은 유지보수 비용']
              },
              {
                title: '산업 환경별 대응력 부족',
                desc: '설치 환경에 따라 재질 변경이 어려워 화학약품, 폐수, 식품 등 다양한 현장에 맞추기 힘들었습니다.',
                img: '/ChatGPT Image 2025년 7월 31일 오전 10_42_31.png',
                features: ['재질 변경 어려움', '환경별 대응 불가', '제한된 적용 범위', '맞춤 제작 한계']
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

      {/* Advantages Section - JWLS-V2 핵심 장점 */}
      <section id="advantages" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-white" style={{ backgroundColor: '#2d3338' }}>
                <i className="ri-lightbulb-line"></i>
                <span className="text-sm font-semibold">JWLS-V2 Key Advantages</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                안전을 색으로<br />직관적으로 표시
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                적색 / 청색 LED를 통해 액체 수위 상태를 실시간으로 한눈에 확인할 수 있습니다. 고장과 정상 상태를 즉시 구분하여 안전 대응 속도를 향상시킵니다.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: 'ri-palette-line',
                    title: '수위를 색으로 직관적으로 표시',
                    desc: '적색/청색 LED로 고장 vs 정상 상태를 즉각 구분'
                  },
                  {
                    icon: 'ri-speed-line',
                    title: '현장 대응 속도 향상',
                    desc: '수위 변화나 이상 상태를 즉시 인지하여 사고 사전 예방'
                  },
                  {
                    icon: 'ri-dashboard-line',
                    title: '간편한 모니터링',
                    desc: 'LED 신호만으로 즉시 상태 파악, 갑작스러운 가동 중단 최소화'
                  },
                  {
                    icon: 'ri-building-4-line',
                    title: '다양한 산업 적용',
                    desc: '반도체, 폐수, 식품, 정밀 제조, 화학약품 등 폭넓은 사용'
                  },
                  {
                    icon: 'ri-shield-check-line',
                    title: '견고함 + 유지보수 편의성',
                    desc: '내식성·내산성 구조, 모듈형 설계로 부분 교체 가능'
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
                제품 문의하기
              </a>
            </div>
            <div className="relative w-[83%] ml-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 flex items-center justify-center p-3">
                <img
                  alt="JWLS-V2 레벨센서"
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
                    <div className="text-sm font-bold text-gray-900">특허 등록</div>
                    <div className="text-xs text-gray-600">제 10-2715578 호</div>
                  </div>
                </div>
                <p className="text-xs text-gray-600">도금조용 LED수위센서 (2024.10 등록)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patent Section - 특허 인증 */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-4">
              <img
                alt="특허증 - 도금조용 LED수위센서"
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
                대한민국 특허청<br />정식 등록 기술
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                JWLS-V2 레벨센서의 핵심 기술은 한국 특허청(KIPO)에 정식 등록된 독자적 기술입니다. 검증된 기술력으로 안전하고 신뢰할 수 있는 제품을 제공합니다.
              </p>
              <div className="bg-white rounded-2xl p-8 shadow-sm space-y-4">
                {[
                  { label: '특허번호', value: '제 10-2715578 호' },
                  { label: '발명명칭', value: '도금조용 LED수위센서' },
                  { label: '출원일', value: '2023년 05월 19일' },
                  { label: '등록일', value: '2024년 10월 04일' },
                  { label: '등록기관', value: '한국 특허청 (KIPO)' }
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

      {/* Industries Section - 적용 산업 분야 */}
      <section id="industries" className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-white" style={{ backgroundColor: '#2d3338' }}>
              <span className="text-sm font-semibold">Industries</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">다양한 산업에 적용 가능</h2>
            <p className="text-lg text-gray-600">설치 환경에 따라 재질 구성을 변경 제작할 수 있습니다.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-cpu-line',
                title: '반도체 도금 화학 공정',
                desc: '정밀한 수위 관리가 필수적인 반도체 제조 및 도금 공정에서 실시간 모니터링을 제공합니다.',
                color: 'bg-blue-50',
                iconColor: 'text-blue-600'
              },
              {
                icon: 'ri-drop-line',
                title: '폐수 처리 시설',
                desc: '폐수 처리 과정에서의 수위 변화를 정확하게 감지하여 환경 안전을 확보합니다.',
                color: 'bg-cyan-50',
                iconColor: 'text-cyan-600'
              },
              {
                icon: 'ri-restaurant-line',
                title: '식품 가공 공장',
                desc: '식품 안전 기준에 적합한 재질로 위생적인 수위 관리를 지원합니다.',
                color: 'bg-green-50',
                iconColor: 'text-green-600'
              },
              {
                icon: 'ri-settings-3-line',
                title: '정밀 제조 산업',
                desc: '최소 1mm부터 감지 가능한 정밀 센서로 제조 공정의 품질을 보장합니다.',
                color: 'bg-purple-50',
                iconColor: 'text-purple-600'
              },
              {
                icon: 'ri-test-tube-line',
                title: '화학약품 취급 산업',
                desc: '내식성·내산성 구조로 부식성 화학약품 환경에서도 안정적으로 작동합니다.',
                color: 'bg-orange-50',
                iconColor: 'text-orange-600'
              },
              {
                icon: 'ri-shield-star-line',
                title: '맞춤 제작 가능',
                desc: '사용 환경에 따라 재질(SUS, C-PVC, PP, PVDF)을 변경하여 맞춤 제작할 수 있습니다.',
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
            <p className="text-gray-500 mb-6">※ 특수 목적 사용 시 사전 협의 필수 | 사용 환경에 따라 재질이 달라질 수 있습니다 (약품 성분, 농도, 온도 등)</p>
            <a href="#contact" className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all hover:scale-105 whitespace-nowrap">
              맞춤 제작 문의
            </a>
          </div>
        </div>
      </section>

      {/* Spec + CTA Section - 제품 사양 */}
      <section id="spec" className="relative min-h-[52vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            alt="JWLS-V2 설치 현장"
            className="w-full h-full object-cover object-top"
            src="/hero2.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full" style={{ paddingTop: '100px', paddingBottom: '40px' }}>
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              제품 사양
            </h2>
            <p className="text-lg text-white/80">JWLS-V2 2WAY 레벨센서 상세 스펙</p>
          </div>

          {/* Spec Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-10">
            {[
              { icon: 'ri-flashlight-line', label: '전원', value: 'DC 12V ~ 24V', sub: '저전력 소비' },
              { icon: 'ri-signal-tower-line', label: '출력 방식', value: 'NPN 출력', sub: 'NO / NC 선택 가능' },
              { icon: 'ri-lightbulb-flash-line', label: 'LED 표시', value: 'G / R / B LED', sub: '실시간 상태 피드백' },
              { icon: 'ri-ruler-line', label: '감지 범위', value: '최소 1mm~', sub: '정밀 감도 / 오차 최소화' },
              { icon: 'ri-temp-hot-line', label: '작동 온도', value: '1°C ~ 85°C', sub: '고온·저온 환경 안정 작동' },
              { icon: 'ri-drop-line', label: '방수 / 방진', value: 'O-Ring 선택', sub: 'Viton / EPDM' }
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
                <i className="ri-tools-line text-red-400 mr-2"></i>재질
              </h3>
              <div className="space-y-2 text-white/80 text-sm">
                <div className="flex justify-between">
                  <span>배관 전용</span>
                  <span className="text-white font-semibold">SUS, C-PVC, PP (16A~20A)</span>
                </div>
                <div className="flex justify-between">
                  <span>부레 재질</span>
                  <span className="text-white font-semibold">SUS, PVDF, PP</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h3 className="text-white text-base font-bold mb-2">
                <i className="ri-plug-line text-red-400 mr-2"></i>결선 안내 (3선)
              </h3>
              <div className="space-y-2 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></span>
                  <span>적색 : P24A</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-gray-800 rounded-full flex-shrink-0 border border-white/30"></span>
                  <span>흑색 : N24A</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-white rounded-full flex-shrink-0"></span>
                  <span>백색 : I/O (Signal)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <p className="text-xl text-white/90 font-light mb-2">제품 문의 및 맞춤 제작 상담</p>
            <p className="text-white/60 mb-8">월요일 - 토요일 운영 | 오전 9:00 - 오후 6:00</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="tel:010-9082-8804" className="bg-red-600 text-white px-7 py-3.5 rounded-lg font-semibold text-base hover:bg-red-700 transition-all hover:scale-105 whitespace-nowrap">
                전화 문의
              </a>
              <a href="mailto:jwautosys@naver.com" className="bg-white text-gray-900 px-7 py-3.5 rounded-lg font-semibold text-base hover:bg-gray-100 transition-all hover:scale-105 whitespace-nowrap">
                이메일 문의
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
                <span className="text-2xl font-bold text-white">정우오토시스</span>
              </div>
              <p className="text-lg text-white/70 mb-6 leading-relaxed">
                안전을 시각화하다
              </p>
              <p className="text-sm text-white/50 leading-relaxed">
                JWLS-V2 2WAY 레벨센서로<br />
                산업 현장의 안전성과 효율을 높입니다.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">제품</h3>
              <ul className="space-y-3 text-white/70">
                <li><a href="#problems" className="hover:text-red-600 transition-colors cursor-pointer">JWLS-V2 레벨센서</a></li>
                <li><a href="#industries" className="hover:text-red-600 transition-colors cursor-pointer">맞춤 제작</a></li>
                <li><a href="#spec" className="hover:text-red-600 transition-colors cursor-pointer">제품 사양</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">회사</h3>
              <ul className="space-y-3 text-white/70">
                <li><a href="#advantages" className="hover:text-red-600 transition-colors cursor-pointer">핵심 장점</a></li>
                <li><a href="#industries" className="hover:text-red-600 transition-colors cursor-pointer">적용 산업</a></li>
                <li><a href="#contact" className="hover:text-red-600 transition-colors cursor-pointer">문의하기</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">문의</h3>
              <ul className="space-y-3 text-white/70 text-sm">
                <li className="flex items-start gap-2">
                  <i className="ri-map-pin-line text-red-600 mt-1"></i>
                  <span>경기도 안산시 단원구 산단로 325,<br />리드스마트스퀘어 CC142호</span>
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
            <div className="text-sm text-white/60">© 2025 정우오토시스. All rights reserved.</div>
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
