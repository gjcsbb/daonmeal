---
version: 1.0
name: daonmeal-design-system
description: 다온한끼(DAON MEAL, 그린팜푸드) 브랜드 사이트 리뉴얼 디자인 시스템. Miro 마케팅 사이트의 구조·컴포넌트 문법(흰 캔버스, 블랙 필 버튼, 28px 라운드 파스텔 카드, 타이트한 대형 헤드라인, 다크 CTA·푸터)을 차용하고, 색은 '황금강황' 옐로({colors.brand-turmeric})와 친환경 리프 그린({colors.leaf})으로 재정의했다. 제품 4종은 각자 고유 파스텔 컬러를 가진다. 1순위 방문자는 건강 식단을 관리하는 소비자이며, 사이트의 목적은 브랜드 인지·신뢰 구축이다.

colors:
  # Core
  primary: "#1c1c1e"            # 기본 CTA, 다크 배너, 푸터
  on-primary: "#ffffff"
  charcoal: "#2c2c34"           # pressed / 다크 위 서브 면
  # Brand — Turmeric (Miro yellow 자리)
  brand-turmeric: "#F5B925"     # 로고 마크, 구매 전환 버튼, 프로모 배지
  turmeric-deep: "#E09A00"      # 장식용만 (텍스트 사용 금지, 대비 2.4:1)
  turmeric-text: "#A86F00"      # 옐로 계열 텍스트/큰 숫자 (흰 배경 4.25:1)
  turmeric-light: "#FFF4C4"     # 강조 섹션 면, 태그 칩 배경
  turmeric-dark: "#6B5310"      # 옐로 면 위 텍스트
  # Sub — Leaf green (Miro blue 자리)
  leaf: "#2F7D4F"               # 링크, 섹션 아이브로우, 현재 메뉴
  leaf-light: "#DDF1E3"         # 인증·신뢰 배지 배경, 안심 공정 히어로
  leaf-dark: "#1E5434"          # 그린 면 위 텍스트, 링크 hover
  # Product tints (sticky-note 팔레트 자리)
  product-turmeric: "#FFE58A"   # 황금강황밥
  product-turmeric-ink: "#6B5310"
  product-mint: "#CFF5EA"       # 저당건강밥
  product-mint-ink: "#11604F"
  product-chlorella: "#D9EFC2"  # 저탄수건강밥
  product-chlorella-ink: "#3D5A1A"
  product-rice: "#F5EEDC"       # 순(純)쌀밥
  product-rice-ink: "#5E4B2A"
  # Surface
  canvas: "#ffffff"
  surface: "#f7f8fa"
  surface-soft: "#fafbfc"
  hairline: "#e0e2e8"
  hairline-soft: "#eef0f3"
  hairline-strong: "#c7cad5"
  # Text
  ink: "#1c1c1e"
  body-strong: "#2c2c34"
  slate: "#555a6a"              # 본문 보조
  steel: "#6b6f7e"              # 캡션, 메타 (흰 배경 5.0:1)
  placeholder: "#8e91a0"        # 입력 placeholder·미확정 값 표시 전용 (3.1:1, 본문 금지)
  on-dark: "#ffffff"
  on-dark-muted: "#a5a8b5"

typography:
  fontFamily: "IBM Plex Sans KR"   # 대안: Pretendard. fallback: 'Apple SD Gothic Neo', sans-serif
  weights: [400, 500, 600]         # 700 이상 사용하지 않음
  hero-display:   { fontSize: "clamp(40px, 6.4vw, 84px)", fontWeight: 600, lineHeight: 1.05, letterSpacing: -2.5px }
  display-lg:     { fontSize: "clamp(32px, 4vw, 52px)",  fontWeight: 600, lineHeight: 1.10, letterSpacing: -1.5px }
  heading-1:      { fontSize: "clamp(30px, 3.6vw, 48px)", fontWeight: 600, lineHeight: 1.12, letterSpacing: -1.5px }
  heading-2:      { fontSize: 32px, fontWeight: 600, lineHeight: 1.20, letterSpacing: -1px }
  heading-3:      { fontSize: 24px, fontWeight: 600, lineHeight: 1.30, letterSpacing: -0.5px }
  heading-4:      { fontSize: 19px, fontWeight: 600, lineHeight: 1.40 }
  subtitle:       { fontSize: 19px, fontWeight: 400, lineHeight: 1.60 }
  body-md:        { fontSize: 16px, fontWeight: 400, lineHeight: 1.70 }
  body-sm:        { fontSize: 15px, fontWeight: 400, lineHeight: 1.60 }
  caption:        { fontSize: 13px, fontWeight: 400, lineHeight: 1.40 }
  eyebrow:        { fontSize: 13px, fontWeight: 600, lineHeight: 1.40, letterSpacing: 0.5px, color: "{colors.leaf}", textTransform: uppercase }
  badge:          { fontSize: 13px, fontWeight: 600, lineHeight: 1.40 }
  button-md:      { fontSize: 15px, fontWeight: 500, lineHeight: 1.30 }
  step-number:    { fontSize: 44px, fontWeight: 600, letterSpacing: -1.5px, color: "{colors.turmeric-text}" }
  wordBreak: keep-all              # 한글 어절 단위 줄바꿈 필수

rounded:
  sm: 6px      # 할인 배지
  md: 8px      # 입력창, 로고 마크
  lg: 12px     # 인증서 썸네일
  xl: 16px     # 기본 카드, 표 컨테이너, 정보 박스
  xxl: 20px    # 공정 단계 카드, 이미지 박스
  xxxl: 28px   # 파스텔 피처 카드, 제품 카드, 사진 프레임
  feature: 32px # 다크 CTA 배너, 대형 히어로 사진
  full: 9999px # 모든 버튼, 필 탭, 배지

spacing:
  base: 4px
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 96, 120]
  section: 96px        # 섹션 상하 간격
  hero-top: 96-120px
  gutter: 24px         # 좌우 여백 (모바일 16px)
  container: 1280px    # max-width

elevation:
  flat: "none; border 1px {colors.hairline-soft}"
  photo: "rgba(5, 0, 56, 0.08) 0px 12px 32px -4px"   # 히어로 제품 사진 프레임만
  modal: "rgba(5, 0, 56, 0.12) 0px 16px 48px -8px"

components:
  button-primary:   { bg: "{colors.primary}", text: "{colors.on-primary}", rounded: full, padding: "14px 28px", minHeight: 44px }
  button-buy:       { bg: "{colors.brand-turmeric}", text: "{colors.primary}", fontWeight: 600, rounded: full, padding: "14px 28px", use: "구매처 이동 전환 버튼에만" }
  button-secondary: { bg: transparent, text: "{colors.ink}", border: "1px solid {colors.hairline-strong}", rounded: full, padding: "14px 28px" }
  button-on-dark:   { bg: "{colors.on-dark}", text: "{colors.primary}", rounded: full, padding: "14px 28px" }
  link-arrow:       { text: "{colors.leaf}", fontWeight: 600, suffix: " →" }
  pill-tab:         { bg: "{colors.canvas}", text: "{colors.slate}", border: "1px solid {colors.hairline}", rounded: full, padding: "10px 18px", minHeight: 44px }
  pill-tab-active:  { bg: "{colors.primary}", text: "{colors.on-primary}" }
  badge-trust:      { bg: "{colors.leaf-light}", text: "{colors.leaf-dark}", rounded: full, padding: "4px 12px" }   # HACCP, 인증
  badge-origin:     { bg: "{colors.turmeric-light}", text: "{colors.turmeric-dark}", rounded: full, padding: "4px 12px" } # 가평 원료
  badge-promo:      { bg: "{colors.brand-turmeric}", text: "{colors.primary}", rounded: full }
  card-base:        { bg: "{colors.canvas}", border: "1px solid {colors.hairline-soft}", rounded: xl, padding: 24px }
  card-product:     { bg: "{product tint}", rounded: xxxl, padding: 28px, contains: "목적 배지(흰 바탕) + 사진 박스(rgba 255,255,255,.55, rounded 20) + 제품명 + 한 줄 설명 + 자세히 보기 →" }
  card-value:       { bg: "{pastel tint}", rounded: xxxl, padding: 36px, minHeight: 280px }
  card-step:        { bg: "{colors.canvas}", border: "1px solid {colors.hairline-soft}", rounded: xxl, padding: 28px, number: step-number }
  promo-banner:     { bg: "{colors.primary}", text: "{colors.on-primary}", padding: "12px 16px", inlineBadge: badge-promo }
  nav-top:          { bg: "{colors.canvas}", borderBottom: "1px solid {colors.hairline-soft}", height: ~64px, left: "로고 마크(32px 옐로 사각, rounded md, 잎 아이콘) + 다온한끼", center: "브랜드 스토리 / 제품 / 안심 공정 / 식단 가이드 / B2B 문의(steel)", right: "button-primary '구매처 보기'", active: "{colors.leaf}" }
  trust-strip:      { bg: "{colors.surface-soft}", items: "원형 아이콘(40px, leaf-light) + 라벨 × 4" }
  compare-table:    { border: "1px solid {colors.hairline}", rounded: xl, headerBg: "{colors.surface-soft}", rowBorder: "{colors.hairline-soft}", mobile: "overflow-x auto, min-width 760px" }
  faq-item:         { element: "<details>/<summary>", borderBottom: "1px solid {colors.hairline}", padding: "22px 4px", summary: "18px / 500" }
  text-input:       { height: 48px, border: "1px solid {colors.hairline-strong}", rounded: md, padding: "0 16px", fontSize: 16px, focus: "2px solid {colors.leaf}" }
  cta-banner-dark:  { bg: "{colors.primary}", rounded: feature, padding: "72px 32px", align: center, buttons: "button-buy + button-on-dark" }
  footer:           { bg: "{colors.primary}", text: "{colors.on-dark-muted}", brand: "{colors.brand-turmeric}", columns: "브랜드·주소 / 제품 / 브랜드 / B2B·문의" }
---

## Overview

다온한끼 사이트는 **회사 소개형에서 소비자 중심 브랜드 사이트로** 전환한다. 흐름은 항상 **알리기 → 믿게 하기 → 연결하기**다.

- **목적:** 브랜드 인지·신뢰 구축 (판매는 구매처 링크로 연결되는 결과)
- **1순위 방문자:** 건강 식단을 관리하는 30–50대 소비자 — 성분·원료 출처·안전성을 확인한 뒤 구매처를 찾는다
- **2순위:** 바쁜 직장인·1인 가구 / **보조 경로:** 유통·급식·OEM 바이어 (B2B 메뉴, 푸터)
- **브랜드 메시지:** "가평의 들에서 지은, 내 몸에 맞는 한 끼"
- **톤 키워드:** 건강하고 깨끗한 · 믿을 수 있는 · 따뜻한 지역 상생

Miro에서 가져온 것은 **구조**다: 흰 캔버스와 넉넉한 여백, 블랙 필 CTA, 28px 라운드 파스텔 카드와 흰 카드의 혼합, 음수 자간의 큰 헤드라인, 다크 CTA 배너와 다크 푸터. 색·사진·카피는 다온한끼의 것으로 바꾼다.

## Colors — 사용 규칙

- **강황 옐로 `#F5B925`**: 로고 마크, 프로모 배지, **구매 전환 버튼**에만. 넓은 배경에 쓰지 않는다 (넓은 면은 `#FFF4C4`).
- **블랙 `#1c1c1e`**: 일반 CTA의 기본. 한 화면에 블랙 필 1개 + 아웃라인 1개가 표준 조합.
- **리프 그린 `#2F7D4F`**: 링크, 섹션 아이브로우(영문 대문자 소제목), 현재 메뉴, 인증·신뢰 요소.
- **제품 컬러**는 해당 제품을 가리킬 때만 쓴다 — 제품 카드, 비교표 헤더 칩, 상세 페이지 히어로/원료 카드, 가이드 글 태그.

| 제품 | 배경 | 텍스트 | 목적 태그 |
|---|---|---|---|
| 황금강황밥 | `#FFE58A` | `#6B5310` | 강황 |
| 저당건강밥 | `#CFF5EA` | `#11604F` | 혈당 관리 |
| 저탄수건강밥 | `#D9EFC2` | `#3D5A1A` | 탄수화물 조절 |
| 순(純)쌀밥 | `#F5EEDC` | `#5E4B2A` | 원재료 그대로 |

### 대비(접근성) 메모
- `#E09A00`은 흰 배경 대비 2.4:1 → **텍스트 금지.** 시안의 큰 단계 숫자(01, 02…)는 구현 시 `turmeric-text #A86F00`(4.25:1)으로 바꾼다.
- `#8e91a0`(3.1:1)은 입력 placeholder와 `[미확정 값]` 표시 전용. 본문·캡션은 `#6b6f7e` 이상.
- 제품 틴트 위 잉크 컬러는 모두 5.8:1 이상 확인됨.

## Typography

- **IBM Plex Sans KR** (Google Fonts, 400/500/600). Pretendard로 바꿔도 스케일은 동일.
- 모든 텍스트 컨테이너에 `word-break: keep-all`.
- 디스플레이는 `clamp()`로 유동 크기, 행간 1.05–1.2, 음수 자간. 본문은 16px / 1.7.
- 섹션 헤더 패턴: `eyebrow`(영문 대문자, 그린) → `heading-1` → (선택) `subtitle`.

## Layout

- 컨테이너 `max-width: 1280px`, 좌우 패딩 24px(모바일 16px), 섹션 간 96px.
- 카드 그리드는 `grid-template-columns: repeat(auto-fit, minmax(260–320px, 1fr))` + `gap 16–24px` — 미디어쿼리 없이 4→2→1열로 접힌다.
- 2단(사진+텍스트)은 `flex-wrap: wrap`, 각 `flex: 1 1 400–520px`. 지그재그 배치는 `wrap-reverse`로 모바일에서도 사진이 위로.
- 브레이크포인트: 모바일 <768 (햄버거 메뉴, 1열) / 태블릿 768–1023 / 데스크톱 ≥1024.

## Pages (IA)

| 경로 | 페이지 | 핵심 섹션 순서 |
|---|---|---|
| `/` | 홈 | 프로모 띠 → 내비 → 히어로(배지·헤드라인·CTA 2개·제품 사진 4장 엇갈림) → 신뢰 배지 띠 → 목적별 제품(필 탭 + 제품 카드 4) → 원료에서 식탁까지(4단계) → 비교표 → 상생 스토리 → FAQ → 다크 CTA → 푸터 |
| `/products/[slug]` | 제품 상세 ×4 | 브레드크럼 → 갤러리 + 정보(배지·제품명·스펙 dl·가격·구매 버튼) → 앵커 탭 → 원료 카드 2 → 추천 대상 3 → 영양정보 표 → 조리 3단계 → 다른 제품 3 → 다크 CTA |
| `/process` | 안심 공정 | 그린 히어로 → 4단계 지그재그(사진+설명) → 인증·시설 자료 카드 + PDF → 안전 FAQ → 소비자/B2B 이중 CTA |
| `/story` | 브랜드 스토리 | 대형 헤드라인 → 와이드 사진 → 창업 이야기 → 가치 3 카드 → 함께하는 사람들 → 연혁 → 다크 CTA |
| `/guide` | 식단 가이드 | 히어로 → 추천 글(가로형) → 주제 필터 + 글 카드 그리드 → 밥 추천 파인더 → 건강정보 고지 |
| `/b2b` | B2B 문의 | 다크 히어로 → 협업 유형 4 → 강점 3 + 진행 절차 5 → 연락처 + 문의 폼 → 소개서 다운로드 |

제품 slug 제안: `turmeric`, `low-sugar`, `low-carb`, `pure-rice`. 제품 데이터(이름, 태그, 컬러, 원료, 영양정보, 구매 링크)는 **한 개의 데이터 파일**에서 읽어 홈·상세·비교표가 같은 값을 쓰게 한다.

## Do's and Don'ts

### Do
- 모든 버튼·탭·배지는 `rounded.full`
- 파스텔 카드와 흰 카드를 한 화면에 섞기
- 실제 밥·원료·논·공정 사진 사용 (스톡 사진 지양)
- 아이콘은 1.8–2px 스트로크 라인 아이콘, 장식은 `aria-hidden`
- 확인되지 않은 수치·효능은 `[ ]` 자리표시로 두고 지어내지 않기

### Don't
- 옐로를 일반 CTA나 넓은 배경에 쓰지 않기
- 그림자를 일반 카드에 쓰지 않기 (히어로 사진 프레임만)
- 이모지, 그라데이션 배경, 왼쪽 컬러 보더 카드 금지
- 식품 표시·광고 기준을 넘는 효능 표현 금지 ("혈당을 낮춘다" ✕ → "당을 생각한" ○)

## Accessibility

- 실제 `<button>`, `<a href>`, `<label>`+`<input>` 사용. 터치 타깃 최소 44px, 입력창 48px.
- 필 탭 필터는 `aria-pressed`, 아이콘 전용 버튼은 `aria-label`.
- 표는 `<th scope>`, FAQ는 `<details>/<summary>`.

## Content placeholders (오픈 전 채울 것)

제품 사진·패키지 사진, 공정·시설·농가 사진 / 제품별 중량·열량·영양성분·가격 / 구매처(판매 채널) URL / HACCP·무농약 인증서 이미지와 번호 / 창업 이야기·브랜드명 의미·연혁 / 조리 시간·보관 방법 / 생산량·MOQ / B2B 문의 회신 기간 / 소개서 PDF / 개인정보 처리방침.

## Claude Code에 요청할 때

1. 이 파일과 시안(캔버스에서 내보낸 HTML 또는 캡처)을 프로젝트 폴더에 넣는다.
2. 요청 예시:
   > DESIGN-daonmeal.md를 디자인 기준으로, 시안과 같은 구성의 다온한끼 사이트를 만들어줘. Astro(또는 Next.js) 정적 사이트, 한국어, 반응형. 페이지는 IA 표의 6종, 제품 데이터는 `src/data/products.json` 하나로 관리. 색·글꼴·라운드는 CSS 변수(디자인 토큰)로 정의하고, 미확정 값은 `[ ]` 그대로 둬.
3. B2B 폼은 폼 서비스(예: Formspree 등)나 서버 함수 연결이 필요 — 별도로 지시한다.
4. 메타 태그(제목·설명·OG 이미지), sitemap.xml, robots.txt 생성도 함께 요청한다.
