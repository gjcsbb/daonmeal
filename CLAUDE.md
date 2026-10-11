# 다온한끼(daonmeal.com) 리뉴얼 사이트 — 작업 지침

이 폴더는 Claude Design 캔버스에서 확정한 기획·시안을 코드로 옮기기 위한 핸드오프 묶음이다.

## 먼저 읽을 것
1. `PLAN.md` — 사이트 목적, 방문자, 메시지, 정보 구조(기획안 요약)
2. `DESIGN.md` — 디자인 토큰(색·글꼴·라운드·간격), 컴포넌트 규격, 페이지별 섹션 순서, Do/Don't
3. `mockups/*.dc.html` — 페이지별 시안 원본 (아래 참고)

## 시안 파일 읽는 법
- `mockups/`의 파일은 Claude Design 캔버스 형식이다. 브라우저에서 바로 열리지 않으며 `support.js`, `<x-dc>`, `<helmet>`, `<sc-for>`, `<sc-if>`, `{{ }}` 같은 캔버스 전용 문법이 섞여 있다.
- 마크업과 인라인 스타일(레이아웃, 색, 간격, 문구)을 **레이아웃·카피 참고용**으로 읽고, 캔버스 전용 문법은 버린다. `{{ }}`와 `<script type="text/x-dc">`의 값은 프레임워크 상태/데이터로 다시 구현한다.
- 파일 ↔ 페이지: `Home`=/ · `Product`=/products/[slug] (저당건강밥 예시, 4종 공통 템플릿) · `Process`=/process · `Story`=/story · `Guide`=/guide · `B2B`=/b2b · `Main`=기획안(구현 대상 아님).
- 시안과 DESIGN.md가 다르면 **DESIGN.md를 따른다.**

## 구현 원칙
- 정적 사이트(Astro 권장, 또는 Next.js static export), 한국어(`lang="ko"`), 반응형, 모바일 우선 확인.
- 디자인 토큰은 CSS 변수로 한 곳에 정의하고 하드코딩하지 않는다.
- 제품 4종 데이터는 `src/data/products.json` 하나에서 읽는다(이름, slug, 태그, 컬러, 원료, 설명, 영양정보, 구매 URL).
- 공통 컴포넌트: Nav, Footer, Button(primary/buy/secondary/on-dark), Badge, ProductCard, StepCard, CtaBanner, FaqItem.
- `[ ]`로 표시된 값은 확인되지 않은 정보다. **임의로 채우지 말고** 그대로 두거나 TODO로 남긴다.
- 효능 표현은 시안 문구 수준을 넘지 않는다(식품 표시·광고 기준).
- 접근성: 실제 button/a/label 사용, 터치 타깃 44px 이상, 대비 4.5:1(큰 글자 3:1).
- 메타 태그·OG 이미지·sitemap.xml·robots.txt 포함.
- B2B 문의 폼은 처음엔 UI만 만들고, 전송 방식(폼 서비스/서버 함수)은 별도로 정한다.
