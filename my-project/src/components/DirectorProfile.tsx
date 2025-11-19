'use client';

import { useState } from 'react';

export default function DirectorProfile() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8">
      <div className="text-center">
        {/* 원장 사진 */}
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white shadow-lg overflow-hidden flex items-center justify-center relative">
          {/* 원장 사진을 public 폴더에 director-profile.jpg로 저장하세요 */}
          {!imageError && (
            <img 
              src="/director-profile.jpg" 
              alt="원장 프로필 사진" 
              className="w-full h-full object-cover relative z-10"
              onError={() => setImageError(true)}
            />
          )}
          {/* 이미지가 없을 경우 표시될 기본 아이콘 */}
          {imageError && (
            <div className="absolute inset-0 flex items-center justify-center text-5xl text-blue-600 bg-white z-0">
              👨‍🏫
            </div>
          )}
        </div>
        
        {/* 원장 이름 */}
        <h3 className="text-2xl font-bold text-blue-900 mb-2">김 상 용</h3>
        <h4 className="text-1xl text-blue-800 mb-2">원장입니다. </h4>
        
        {/* 경력 정보
        <div className="mb-4">
          <div className="text-3xl font-bold text-blue-600 mb-1">30+</div>
          <div className="text-lg text-gray-700 mb-3">년의 교육 경험</div>
        </div>
         */}
        {/* 학력/자격증 */}
        <div className="text-sm text-gray-600 mb-4 space-y-1">
          <div>(전) 대치 미래영재학원 경시팀장</div>
          <div>(전) 일산 푸른학원 경시팀장</div>
          <div>(전) 목동 하이스트 학원 경시팀</div>
          <div>(전) 서울 과학고 및 영재고 내신수업</div>
          <div>(전) 완벽한수학 수학연구소장</div>
          <div></div>
          <div>서울대학교 졸업</div>
        </div>
        
        {/* 인사말 */}
        <div className="text-sm text-gray-700 italic border-t border-blue-300 pt-4">
          "학생들의 꿈과 미래를 위해 최선을 다하겠습니다."
        </div>
      </div>
    </div>
  );
}

