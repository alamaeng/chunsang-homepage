export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* 헤더 */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue-600">천상수학</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">학원소개</a>
              <a href="#programs" className="text-gray-700 hover:text-blue-600 transition-colors">교육과정</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">특징</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">연락처</a>
            </nav>
          </div>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-[600px] flex items-center overflow-hidden">
        {/* 기본 배경 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />
        {/* 배경 이미지 레이어 - 이미지가 있으면 표시됨 */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/hero-math-bg.jpg')",
          }}
        />
        {/* 오버레이 - 텍스트 가독성을 위해 */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white/60" />
        
        {/* 콘텐츠 */}
        <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            천상수학
          </h2>
          <p className="text-2xl md:text-3xl text-blue-600 font-semibold mb-4">
            꿈을 향한 첫 걸음
          </p>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8 font-medium">
            학생들의 잠재력을 발견하고 실현시켜 나가는 교육기관입니다.
            <br />
            함께 성장하고, 함께 꿈꾸며, 함께 성공합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              상담 신청
            </a>
            <a
              href="#about"
              className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-md"
            >
              더 알아보기
            </a>
          </div>
        </div>
      </section>

      {/* 학원 소개 섹션 */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">학원 소개</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">천상수학에 오신 것을 환영합니다</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                천상수학은 학생 개개인의 특성과 능력을 존중하며, 체계적인 교육 프로그램을 통해 
                학생들이 자신의 꿈을 찾고 실현할 수 있도록 돕는 교육기관입니다.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                우리는 단순히 지식을 전달하는 것을 넘어, 학생들이 스스로 생각하고 
                문제를 해결할 수 있는 능력을 기르는 것을 목표로 합니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                경험 많은 강사진과 개별 맞춤형 학습 시스템을 통해 
                모든 학생이 최상의 학습 환경에서 성장할 수 있도록 지원합니다.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-xl text-gray-700">년의 교육 경험</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 교육 과정 섹션 */}
      <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">교육 과정</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">기초 학습 프로그램</h3>
              <p className="text-gray-600">
                기초를 탄탄히 다지는 체계적인 학습 프로그램으로 
                학생들의 학습 기반을 확실히 만들어갑니다.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">심화 학습 프로그램</h3>
              <p className="text-gray-600">
                심화된 내용을 다루는 프로그램으로 
                학생들의 실력을 한 단계 더 끌어올립니다.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">특별 프로그램</h3>
              <p className="text-gray-600">
                다양한 특별 프로그램을 통해 
                학생들의 관심사와 재능을 발견하고 발전시킵니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 특징 섹션 */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">천상수학의 특징</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">전문 강사진</h3>
              <p className="text-gray-600 text-sm">
                풍부한 경험과 전문성을 갖춘 강사진
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📖</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">맞춤형 학습</h3>
              <p className="text-gray-600 text-sm">
                개인별 특성에 맞는 맞춤형 학습 시스템
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">체계적 관리</h3>
              <p className="text-gray-600 text-sm">
                학습 진도와 성과를 체계적으로 관리
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">소통과 피드백</h3>
              <p className="text-gray-600 text-sm">
                학생과 학부모와의 활발한 소통
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 연락처 섹션 */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">연락처 및 위치</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-2">전화</h3>
              <p className="text-blue-100">010-4468-8011</p>
            </div>
            <div>
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-xl font-semibold mb-2">이메일</h3>
              <p className="text-blue-100">alamaeng@gmail.com</p>
            </div>
            <div>
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-2">주소</h3>
              <p className="text-blue-100">서울특별시 양천구<br />목동서로 57</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a
              href="tel:010-4468-8011"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              지금 바로 상담하기
            </a>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2025 천상수학. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
