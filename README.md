# 다온한끼 (daonmeal.com) 브랜드 사이트

Astro 정적 사이트. 디자인 기준은 `DESIGN.md`, 기획은 `PLAN.md`, 작업 지침은 `CLAUDE.md`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 생성 (sitemap 포함)
npm run check    # 타입 검사
```

## 구조
- `src/styles/tokens.css` — 디자인 토큰(CSS 변수). 색·글꼴·라운드·간격은 여기서만 정의
- `src/data/products.json` — 제품 4종 단일 데이터 (홈·상세·비교표 공용)
- `public/images/certs/` — HACCP·무농약·유기농 인증서 (생년월일·개인 생산자 이름·주소를 가린 사본)
- `public/images/facility/` — 거점농산물가공센터 시설 사진 (충전 설비·레토르트 멸균기·실링·생산 라인·견학)
- `public/images/products/{slug}/` — 제품 사진 (main·package·set·ing-0·ing-1). 지금은 기존 상세페이지 이미지에서 잘라 낸 임시 저해상도 사진
- `src/data/site.ts` — 회사 정보, 메뉴, 구매처 링크
- `src/data/guides.json` — 식단 가이드 글 목록 (href 비면 준비 중)
- `src/components/` — Nav, Footer, Button, Badge, ProductCard, StepCard, CtaBanner, FaqItem, TrustStrip, CompareTable
- `src/pages/index.astro` — 홈

## 진행 상황
- [x] 기반(토큰·공통 컴포넌트·데이터) / 홈 `/`
- [x] 제품 상세 `/products/[slug]` ×4 (turmeric · low-sugar · low-carb · pure-rice)
- [x] 안심 공정 `/process`, 브랜드 스토리 `/story`
- [x] 식단 가이드 `/guide`, B2B `/b2b` (폼은 화면만 — 전송 방식 미정, `b2b.astro`의 `data-endpoint` TODO)
- [ ] 개인정보 처리방침 `/privacy`

## 오픈 전 채울 값 (`[ ]` 표시)
제품·원료·공정·농가 사진 / 제품별 영양성분·열량·가격·품목보고번호 / 구매처 URL(`site.ts`의 `purchaseUrl`, 제품별 `purchaseUrl`) / 대표자명·사업자등록번호 / 인증서 이미지·번호 / 연혁 / 소개서 PDF / 개인정보 처리방침
