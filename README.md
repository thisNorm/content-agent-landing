# content-agent-landing

> **Notion에 글만 쓰면, 블로그·썸네일·SNS 배포까지 자동화되는 콘텐츠 운영 시스템의 서비스 소개 사이트**

[![Vercel](https://img.shields.io/badge/Live-content--agent--landing.vercel.app-0d0d0d?style=flat&labelColor=f5f5f5)](https://content-agent-landing.vercel.app)
[![Built with Vite](https://img.shields.io/badge/Vite-5-0d0d0d?style=flat&labelColor=f5f5f5)](https://vitejs.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-0d0d0d?style=flat&labelColor=f5f5f5)](https://www.typescriptlang.org)

[content-agent](https://github.com/thisNorm/content-agent) 프로젝트의 서비스 소개 랜딩페이지입니다.  
Vite + TypeScript로 구성된 정적 사이트로, Vercel을 통해 배포됩니다.

🔗 **라이브 사이트**: https://content-agent-landing.vercel.app

---

## 이 사이트가 소개하는 서비스

**content-agent**는 Notion 페이지 하나를 실행하면 콘텐츠 발행의 전체 흐름을 자동화하는 오픈소스 도구입니다.

| 단계 | 내용 |
|------|------|
| **01 콘텐츠 가공** | Notion 원문을 발행 흐름에 맞게 제목·본문·태그 구조로 정리 |
| **02 썸네일 생성** | Gemini Image API로 콘텐츠 맥락에 맞는 1280×720 썸네일 자동 생성 |
| **03 Tistory 발행** | Playwright 브라우저 자동화로 HTML 본문 + 썸네일 포함 발행 |
| **04 X 포스팅** | Twitter API v2로 요약 + 링크 자동 포스팅 |
| **05 실행 로그** | Notion 페이지에 발행 결과 자동 기록 |

👉 실제 구현 코드: [github.com/thisNorm/content-agent](https://github.com/thisNorm/content-agent)

---

## 기술 스택

- **프레임워크**: Vite 5 + TypeScript
- **폰트**: Noto Sans KR (Google Fonts)
- **배포**: Vercel

---

## 로컬 실행

```bash
git clone https://github.com/thisNorm/content-agent-landing.git
cd content-agent-landing
npm install
npm run dev
```

빌드:

```bash
npm run build
```

---

## 관련 프로젝트

- **[content-agent](https://github.com/thisNorm/content-agent)** — 실제 자동화 파이프라인 구현체

---

## 라이선스

[MIT License](LICENSE) © 2026 thisNorm
