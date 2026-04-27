import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <!-- NAV -->
    <div class="topbar-wrap">
      <div class="topbar">
        <a class="brand" href="#hero">
          <span class="brand-mark">CA</span>
          <span class="brand-name">Content Agent</span>
        </a>
        <nav class="topnav">
          <a href="#service">서비스</a>
          <a href="#process">시작하기</a>
          <a href="#usecase">활용</a>
          <a href="#faq">FAQ</a>
          <a class="btn btn-dark" href="https://github.com/thisNorm/content-agent" target="_blank" rel="noreferrer">⭐ GitHub</a>
        </nav>
      </div>
    </div>

    <main>
      <!-- HERO -->
      <section class="hero-section" id="hero">
        <div class="page-shell hero-inner">
          <p class="hero-label">콘텐츠 운영 자동화 시스템</p>
          <h1>노션에 글만 쓰면,<br/>나머지는 시스템이 합니다</h1>
          <p class="hero-desc">Notion 초안 하나로 블로그 포스팅·썸네일·SNS 배포가 한 흐름으로 연결됩니다. 반복되는 운영 업무를 줄이고, 콘텐츠 본연에 집중하세요.</p>
          <div class="hero-actions">
            <a class="btn btn-dark btn-lg" href="https://github.com/thisNorm/content-agent" target="_blank" rel="noreferrer">⭐ GitHub에서 Star 하기</a>
            <a class="btn btn-outline btn-lg" href="#service">더 알아보기</a>
          </div>
          <div class="hero-meta">
            <img src="https://img.shields.io/github/stars/thisNorm/content-agent?style=flat&label=Stars&color=0d0d0d&labelColor=f5f5f5" alt="GitHub Stars" height="24" />
            <img src="https://img.shields.io/github/license/thisNorm/content-agent?style=flat&color=0d0d0d&labelColor=f5f5f5" alt="License" height="24" />
            <img src="https://img.shields.io/badge/Node.js-18+-0d0d0d?style=flat&labelColor=f5f5f5" alt="Node.js" height="24" />
            <img src="https://img.shields.io/badge/Notion_API-latest-0d0d0d?style=flat&labelColor=f5f5f5" alt="Notion API" height="24" />
          </div>
        </div>
      </section>

      <!-- DEMO VIDEO -->
      <section class="demo-section">
        <div class="page-shell">
          <div class="video-wrap" id="video-wrap">
            <iframe
              src="/video/index.html"
              title="Content Agent 자동화 데모"
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </div>
        </div>
      </section>

      <!-- TICKER -->
      <div class="ticker-strip">
        <div class="ticker-track">
          <span class="ticker-item">NOTION FIRST</span>
          <span class="ticker-item">CONTENT OPS</span>
          <span class="ticker-item">BLOG PUBLISHING</span>
          <span class="ticker-item">THUMBNAIL CREATION</span>
          <span class="ticker-item">SNS DISTRIBUTION</span>
          <span class="ticker-item">WORKFLOW AUTOMATION</span>
          <span class="ticker-item">NOTION FIRST</span>
          <span class="ticker-item">CONTENT OPS</span>
          <span class="ticker-item">BLOG PUBLISHING</span>
          <span class="ticker-item">THUMBNAIL CREATION</span>
          <span class="ticker-item">SNS DISTRIBUTION</span>
          <span class="ticker-item">WORKFLOW AUTOMATION</span>
        </div>
      </div>

      <!-- SERVICE -->
      <section class="section" id="service">
        <div class="page-shell">
          <div class="section-header">
            <div class="section-label">What we do</div>
            <h2 class="section-title">콘텐츠 운영 전체 흐름을<br/>하나의 시스템으로 정리합니다</h2>
            <p class="section-desc">단순한 글 변환 도구가 아니라, 작성 이후에 반복되는 운영 업무까지 연결하는 콘텐츠 오퍼레이션 구조입니다.</p>
          </div>
          <div class="service-grid">
            <article class="service-card">
              <span class="service-num">01</span>
              <h3>콘텐츠 가공 자동화</h3>
              <p>Notion에 작성한 원문을 발행 흐름에 맞게 정리하고, 티스토리 블로그 포스팅 스타일에 맞게 자동 각색합니다. 필요한 이미지만 선별해 본문에 배치합니다.</p>
            </article>
            <article class="service-card">
              <span class="service-num">02</span>
              <h3>썸네일 생성 흐름</h3>
              <p>콘텐츠 주제와 톤에 맞춰 썸네일 프롬프트를 연결하고, 운영 스타일에 맞는 이미지 결과물을 빠르게 완성합니다.</p>
            </article>
            <article class="service-card">
              <span class="service-num">03</span>
              <h3>배포 채널 연동</h3>
              <p>블로그 발행과 SNS 배포를 분리된 작업이 아니라 하나의 운영 루틴으로 이어서 관리합니다.</p>
            </article>
          </div>
        </div>
      </section>

      <!-- STRENGTH -->
      <section class="strength-section" id="strength">
        <div class="page-shell">
          <div class="section-header">
            <div class="section-label strength-label">Why this system</div>
            <h2 class="section-title strength-title">반복되는 콘텐츠 운영을<br/>더 빠르고 일관되게</h2>
            <p class="section-desc strength-desc">한 번 설정된 흐름이 매번 같은 품질로 실행됩니다. 운영자가 신경 써야 할 부분을 최소화하는 구조로 만들었습니다.</p>
          </div>
          <div class="strength-grid">
            <div class="strength-item">
              <span class="strength-num">01</span>
              <h3>한 번의 작성, 여러 채널 운영</h3>
              <p>콘텐츠를 따로 옮기고 다시 정리하는 수작업을 줄이고, 작성 이후의 반복 업무를 자동화 흐름으로 연결합니다.</p>
            </div>
            <div class="strength-item">
              <span class="strength-num">02</span>
              <h3>브랜드 톤 일관성 유지</h3>
              <p>썸네일 방향, 발행 방식, 채널 문구를 하나의 운영 규칙으로 맞춰 일관된 콘텐츠 경험을 만들 수 있습니다.</p>
            </div>
            <div class="strength-item">
              <span class="strength-num">03</span>
              <h3>운영 속도 개선</h3>
              <p>콘텐츠 팀이나 1인 운영자 모두 발행까지 걸리는 시간을 줄이고 더 자주, 더 꾸준하게 배포할 수 있습니다.</p>
            </div>
            <div class="strength-item">
              <span class="strength-num">04</span>
              <h3>운영 방식에 맞는 커스터마이징</h3>
              <p>발행 순서, 썸네일 스타일, 채널 출력 형식을 각자의 운영 목적에 맞춰 구조를 자유롭게 조정할 수 있습니다.</p>
            </div>
          </div>
        </div>
      </section>
      <section class="section" id="process">
        <div class="page-shell">
          <div class="section-header">
            <div class="section-label">Process</div>
            <h2 class="section-title">3분이면 시작할 수 있습니다</h2>
            <p class="section-desc">별도 서버나 복잡한 설정 없이, 아래 순서대로 따라하면 바로 동작합니다.</p>
          </div>
          <div class="code-block">
            <div class="code-topbar">
              <span class="dot dot-r"></span>
              <span class="dot dot-y"></span>
              <span class="dot dot-g"></span>
              <span class="code-title">Terminal</span>
            </div>
            <pre class="code-body"><code><span class="c"># 1. 레포 클론</span>
git clone https://github.com/thisNorm/content-agent.git
cd content-agent

<span class="c"># 2. 의존성 설치</span>
npm install

<span class="c"># 3. 환경변수 설정 (.env 파일 복사 후 키 입력)</span>
cp .env.example .env

<span class="c"># 4. 실행</span>
npm start</code></pre>
          </div>
          <div class="process-grid">
            <div class="process-item">
              <div class="process-num">01</div>
              <h3>Notion에서 작성</h3>
              <p>초안이나 메모를 Notion 페이지로 정리합니다. 별도 포맷 없이 자유롭게 써도 됩니다.</p>
            </div>
            <div class="process-item">
              <div class="process-num">02</div>
              <h3>AI 자동 각색</h3>
              <p>Claude가 원문을 티스토리 블로그 포스팅 스타일에 맞게 각색합니다. 코드 블록과 이미지는 그대로 유지하고 설명만 재작성됩니다.</p>
            </div>
            <div class="process-item">
              <div class="process-num">03</div>
              <h3>썸네일 생성</h3>
              <p>콘텐츠 맥락에 맞춰 썸네일이 만들어지고, 블로그·SNS에 필요한 출력이 준비됩니다.</p>
            </div>
            <div class="process-item">
              <div class="process-num">04</div>
              <h3>배포 및 반복 운영</h3>
              <p>한 번 정리된 시스템 위에서 다음 콘텐츠도 같은 흐름으로 처리합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- USE CASES -->
      <section class="section" id="usecase">
        <div class="page-shell">
          <div class="section-header">
            <div class="section-label">Use cases</div>
            <h2 class="section-title">이런 팀과<br/>운영 방식에 잘 맞습니다</h2>
          </div>
          <div class="usecase-grid">
            <article class="usecase-card">
              <h3>기술 블로그를 꾸준히 운영하는 팀</h3>
              <p>개발 문서나 정리 노트를 콘텐츠로 연결하고, 발행 과정에 드는 반복 업무를 줄이고 싶을 때 적합합니다.</p>
              <ul class="tag-list">
                <li>기술 블로그 운영</li>
                <li>팀 단위 콘텐츠 발행</li>
                <li>문서 기반 마케팅 루틴</li>
              </ul>
            </article>
            <article class="usecase-card">
              <h3>1인 운영자 또는 소규모 브랜드</h3>
              <p>적은 리소스로도 일정한 품질의 콘텐츠를 빠르게 발행하고, 채널 운영을 더 효율적으로 만들 수 있습니다.</p>
              <ul class="tag-list">
                <li>퍼스널 브랜딩</li>
                <li>콘텐츠 마케팅 자동화</li>
                <li>블로그·SNS 동시 운영</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="section faq-section" id="faq">
        <div class="page-shell">
          <div class="section-header">
            <div class="section-label">FAQ</div>
            <h2 class="section-title">자주 묻는 질문</h2>
          </div>
          <div class="faq-list">
            <details open>
              <summary>무료인가요?</summary>
              <div class="faq-answer">네, 완전 무료 오픈소스입니다. MIT 라이선스로 상업적 이용·수정·재배포 모두 자유롭게 가능합니다.</div>
            </details>
            <details>
              <summary>어떤 환경이 필요한가요?</summary>
              <div class="faq-answer">Node.js 18 이상, Notion API 키, Anthropic API 키(본문 각색용), Gemini API 키(썸네일 생성 전용)가 필요합니다. 자세한 내용은 GitHub README를 참고해 주세요.</div>
            </details>
            <details>
              <summary>Tistory 외 다른 블로그 플랫폼도 지원하나요?</summary>
              <div class="faq-answer">현재는 Tistory와 SNS(Twitter/Instagram) 배포를 지원합니다. 다른 플랫폼 지원은 GitHub Issues에서 요청하시거나 PR로 직접 기여하실 수 있습니다.</div>
            </details>
            <details>
              <summary>기여(Contribution)할 수 있나요?</summary>
              <div class="faq-answer">물론입니다. Pull Request와 Issue 모두 환영합니다. 기여 가이드는 GitHub 레포의 CONTRIBUTING.md를 참고해 주세요.</div>
            </details>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta-section">
        <div class="page-shell">
          <div class="cta-inner">
            <div class="cta-copy">
              <h2>지금 바로 Star 하고,<br/>운영 자동화를 시작하세요.</h2>
              <p>오픈소스 프로젝트로 누구나 무료로 사용할 수 있습니다. Star 하나가 개발 지속의 큰 힘이 됩니다.</p>
            </div>
            <div class="cta-actions">
              <a class="btn btn-white btn-lg" href="https://github.com/thisNorm/content-agent" target="_blank" rel="noreferrer">⭐ Star on GitHub</a>
              <a class="btn btn-ghost btn-lg" href="https://github.com/thisNorm/content-agent/issues" target="_blank" rel="noreferrer">Issues &amp; 피드백</a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer page-shell">
      <p>© 2026 Content Agent · MIT License · 개인 오픈소스 프로젝트</p>
      <div class="footer-links">
        <a href="https://github.com/thisNorm/content-agent" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://github.com/thisNorm/content-agent/issues" target="_blank" rel="noreferrer">Issues</a>
        <a href="https://github.com/thisNorm/content-agent/blob/main/LICENSE" target="_blank" rel="noreferrer">License</a>
      </div>
    </footer>
  </div>
`

// Video iframe responsive scaling
function scaleVideoIframe() {
  const wrap = document.getElementById('video-wrap') as HTMLElement | null
  if (!wrap) return
  const iframe = wrap.querySelector('iframe') as HTMLIFrameElement | null
  if (!iframe) return
  const scale = wrap.offsetWidth / 1280
  iframe.style.transform = `scale(${scale})`
}

const videoWrap = document.getElementById('video-wrap')
if (videoWrap) {
  const resizeObserver = new ResizeObserver(scaleVideoIframe)
  resizeObserver.observe(videoWrap)
  scaleVideoIframe()
}
