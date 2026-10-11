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
- `src/data/site.ts` — 회사 정보, 메뉴, 구매처 링크
- `src/components/` — Nav, Footer, Button, Badge, ProductCard, StepCard, CtaBanner, FaqItem, TrustStrip, CompareTable
- `src/pages/index.astro` — 홈

## 진행 상황
- [x] 기반(토큰·공통 컴포넌트·데이터) / 홈 `/`
- [ ] 제품 상세 `/products/[slug]` ×4
- [ ] 안심 공정 `/process`, 브랜드 스토리 `/story`
- [ ] 식단 가이드 `/guide`, B2B `/b2b` (폼 전송 방식 미정)
- [ ] 개인정보 처리방침 `/privacy`

## 오픈 전 채울 값 (`[ ]` 표시)
제품·원료·공정·농가 사진 / 제품별 영양성분·열량·가격·품목보고번호 / 구매처 URL(`site.ts`의 `purchaseUrl`, 제품별 `purchaseUrl`) / 대표자명·사업자등록번호 / 인증서 이미지·번호 / 연혁 / 소개서 PDF / 개인정보 처리방침
