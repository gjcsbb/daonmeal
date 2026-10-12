import data from './products.json';

export const SITE = {
  name: '다온한끼',
  englishName: 'DAON MEAL',
  url: 'https://daonmeal.com',
  message: '가평의 들에서 지은, 내 몸에 맞는 한 끼',
  description:
    '가평 친환경 원료로 지은 다온한끼 건강밥. 황금강황밥·저당건강밥·저탄수건강밥·순(純)쌀밥을 건강 목적에 맞게 고르고, 레토르트 HACCP 공정과 원료 출처를 확인하세요.',
  company: '그린팜푸드(주)',
  address: '경기도 가평군 가평읍 아랫마장길 59',
  phone: '010-8144-6840',
  email: 'weonsanlee@gmail.com',
  bizNumber: '[사업자등록번호]',
  ceo: '[대표자명]',
  // TODO: 구매처(판매 채널) URL 확정 전까지 비워둔다. 비어 있으면 FAQ의 구매처 안내로 연결된다.
  purchaseUrl: '',
};

export const NAV = [
  { href: '/story', label: '브랜드 스토리' },
  { href: '/#products', label: '제품', match: '/products' },
  { href: '/process', label: '안심 공정' },
  { href: '/guide', label: '식단 가이드' },
  { href: '/b2b', label: 'B2B 문의', muted: true },
];

export type Tint = 'turmeric' | 'mint' | 'chlorella' | 'rice';

export interface Product {
  slug: string;
  name: string;
  englishName: string;
  tag: string;
  tint: Tint;
  images: { main: string; package: string; set: string; ingredient: string };
  summary: string;
  description: string;
  keyIngredients: string[];
  ingredientCards: { name: string; text: string; image?: string }[];
  recommendedFor: string[];
  ingredientsLabel: string;
  foodType: string;
  weight: string;
  calories: string;
  pack: string;
  storage: string;
  cooking: string;
  reportNumber: string;
  price: string;
  purchaseUrl: string;
  nutrition: { basis: string; rows: { name: string; amount: string; dv: string }[] };
}

export const PRODUCTS = data.products as Product[];

/** 구매 버튼 링크. 제품/사이트 구매처가 비어 있으면 FAQ 구매처 항목으로 보낸다. */
export function purchaseHref(product?: Product): string {
  return product?.purchaseUrl || SITE.purchaseUrl || '/#faq-buy';
}

/** "[ ]"로 시작하는 값은 미확정 값이다. */
export function isTbd(value: string): boolean {
  return value.trim().startsWith('[');
}
