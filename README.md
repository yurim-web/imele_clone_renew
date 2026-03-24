# IMELE 클론 웹사이트

🔗 **Live Demo**: https://yurim-web.github.io/imele_clone_renew/

IMELE 브랜드의 뷰티 제품을 소개하는 반응형 웹사이트입니다. 미니멀리즘 디자인과 부드러운 애니메이션을 통해 브랜드의 철학을 표현합니다.

## 🚀 주요 기능

### 📱 반응형 디자인

- PC와 모바일 환경에 최적화된 레이아웃
- 모바일에서는 스와이퍼를 통한 제품 슬라이드
- 화면 크기에 따른 동적 메뉴 전환

### 🎨 인터랙티브 요소

- **스크롤 애니메이션**: GSAP를 활용한 부드러운 스크롤 트리거 애니메이션
- **메인 배너**: 자동 재생되는 제품 슬라이드쇼
- **헤더 효과**: 스크롤 시 배경색 변화
- **호버 효과**: 제품 카드와 버튼의 인터랙티브 효과

### 🛍️ 제품 섹션

- **베스트셀러**: 인기 제품 4종 소개
- **브랜드 스토리**: YouTube 임베드 비디오
- **브랜드 가치**: 4가지 핵심 가치 제시
- **실제 리뷰**: Instagram 위젯 연동

## 🛠️ 기술 스택

### Frontend

- **HTML5**: 시맨틱 마크업, 웹 접근성(alt 텍스트, lang 속성)
- **SCSS (Dart Sass)**: CSS 전처리기를 활용한 스타일 관리
- **CSS3**: Flexbox, Grid, 미디어 쿼리
- **JavaScript (ES6+)**: 모던 자바스크립트

### SCSS 활용 기능

- **변수(`$`)**: 색상, 폰트, 브레이크포인트, 레이아웃 값 관리
- **네스팅**: 선택자 중첩으로 가독성 향상 (3단계 이내)
- **믹스인(`@mixin`)**: 반응형 브레이크포인트, 섹션 타이틀 공통 패턴
- **@use 모듈 시스템**: `@import` 대신 최신 Dart Sass 표준 사용
- **파셜(`_`)**: 기능별 파일 분리 후 단일 진입점에서 통합

### 라이브러리

- **GSAP 3.12**: 고성능 스크롤 트리거 애니메이션
- **Swiper 11**: 터치 슬라이더
- **Font Awesome 6.7**: 아이콘 폰트

### 폰트

- **Newsreader**: 제목용 가변 폰트 (세리프)
- **Pretendard**: 본문용 한글 가변 폰트 (산세리프)

## 📁 프로젝트 구조

```
imele_clone/
├── scss/                       # SCSS 소스 파일
│   ├── style.scss              # 메인 진입점 (@use로 통합)
│   ├── _variables.scss         # 색상, 폰트, 브레이크포인트 변수
│   ├── _mixins.scss            # 반응형 믹스인, 공통 패턴
│   ├── _reset.scss             # CSS 리셋
│   ├── _common.scss            # 공통 스타일, @font-face
│   ├── _top_banner.scss        # 상단 배너
│   ├── _header.scss            # 헤더 (네스팅 활용)
│   ├── _main.scss              # 베스트셀러 섹션
│   ├── _main2.scss             # 브랜드 스토리 섹션
│   ├── _main3.scss             # 브랜드 가치 섹션
│   ├── _main4.scss             # Promotion, Real Review 섹션
│   ├── _swiper.scss            # PC + 모바일 스와이퍼 통합
│   └── _footer.scss            # 푸터 스타일
├── css/                        # 컴파일된 CSS 출력
│   └── style.css               # SCSS 컴파일 결과물
├── script/                     # 자바스크립트
│   ├── header.js               # 헤더 스크롤 효과
│   ├── swiper.js               # PC 메인 배너 슬라이더
│   ├── mo_swiper.js            # 모바일 제품 슬라이더
│   ├── animation.js            # GSAP 스크롤 애니메이션
│   ├── animation2.js           # 추가 애니메이션
│   ├── animation3.js           # 추가 애니메이션
│   └── top_banner.js           # 상단 배너 기능
├── img/                        # 이미지 리소스
├── font/                       # 폰트 파일
│   ├── Newsreader-VariableFont_opsz,wght.ttf
│   └── PretendardVariable.ttf
├── index.html                  # 메인 HTML 파일
├── package.json                # 프로젝트 설정 및 빌드 스크립트
└── .gitignore
```

## 🚀 실행 방법

```bash
# 1. 의존성 설치
npm install

# 2. SCSS 컴파일 (1회)
npm run build:css

# 3. 개발 시 실시간 감시 모드
npm run watch:css

# 4. 브라우저에서 index.html 열기
```

## 📱 반응형 브레이크포인트

| 디바이스 | 너비 | 레이아웃 |
|----------|------|----------|
| PC | 1000px 초과 | 4열 그리드, 전체 네비게이션 |
| 모바일 | 1000px 이하 | 1~2열 레이아웃, 햄버거 메뉴 |

## 🎨 디자인 특징

- **컬러 팔레트**: 자연스러운 베이지, 그레이 톤 (`#f0edec`, `#f7f7f5`, `#47433f`)
- **타이포그래피**: 세리프(Newsreader)와 산세리프(Pretendard) 폰트 조합
- **레이아웃**: 미니멀하고 깔끔한 그리드 시스템
- **애니메이션**: GSAP ScrollTrigger 기반 부드러운 전환 효과

## 🔧 커스터마이징

### 색상 변경

`scss/_variables.scss`에서 SCSS 변수를 수정한 후 `npm run build:css`로 컴파일합니다.

```scss
// scss/_variables.scss
$color-body-bg: #f0edec;
$color-text-primary: #47433f;
$color-accent: #df6e3a;
```

### 반응형 브레이크포인트 변경

```scss
// scss/_variables.scss
$breakpoint-mobile: 1000px;
```

### 믹스인 사용 예시

```scss
// 반응형 모바일 적용
.section {
  padding: 100px 80px;

  @include mobile {
    padding: 30px;
  }
}
```

## 📄 라이선스

이 프로젝트는 교육 목적으로 제작된 클론 프로젝트입니다.

---

**참고**: 이 프로젝트는 IMELE 브랜드의 공식 웹사이트를 클론한 것으로, 교육 및 포트폴리오 목적으로만 사용되어야 합니다.
