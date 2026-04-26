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
      <section class="hero-section page-shell" id="hero">
        <div class="hero-copy">
          <p class="hero-label">콘텐츠 운영 자동화 시스템</p>
          <h1>노션에<br/>글만 쓰면,<br/>나머지는 시스템이 합니다</h1>
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

        <div class="hero-visual">
          <div class="hero-card">
            <div class="card-topbar">
              <span class="dot dot-r"></span>
              <span class="dot dot-y"></span>
              <span class="dot dot-g"></span>
              <span class="card-win-title">content-agent — run</span>
            </div>
            <div class="card-content">
              <div class="flow-step">
                <span class="flow-idx">01</span>
                <div class="flow-body">
                  <div class="step-name">Notion Draft</div>
                  <div class="step-sub">콘텐츠 작성 완료</div>
                </div>
                <span class="flow-status done">완료</span>
              </div>
              <div class="flow-step active">
                <span class="flow-idx">02</span>
                <div class="flow-body">
                  <div class="step-name">Content Formatting</div>
                  <div class="step-sub">발행용 구조로 정리 중</div>
                </div>
                <span class="flow-status running">실행 중</span>
              </div>
              <div class="flow-step">
                <span class="flow-idx">03</span>
                <div class="flow-body">
                  <div class="step-name">Thumbnail Generation</div>
                  <div class="step-sub">썸네일 생성 대기</div>
                </div>
                <span class="flow-status wait">대기</span>
              </div>
              <div class="flow-step">
                <span class="flow-idx">04</span>
                <div class="flow-body">
                  <div class="step-name">Blog &amp; SNS Publish</div>
                  <div class="step-sub">채널 배포 대기</div>
                </div>
                <span class="flow-status wait">대기</span>
              </div>
            </div>
            <div class="card-foot">
              <span class="status-pill">파이프라인 실행 중</span>
              <span class="tag-sm">step 2 / 4</span>
            </div>
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
              <p>Notion에 작성한 원문을 발행 흐름에 맞게 정리하고, 제목·본문 구조·태그 흐름까지 이어서 처리합니다.</p>
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
              <h3>자동 구조 정리</h3>
              <p>제목, 본문 구조, 이미지 배치, 채널별 출력 형식이 자동으로 정리됩니다.</p>
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
              <div class="faq-answer">Node.js 18 이상, Notion API 키, 그리고 썸네일 생성을 위한 이미지 생성 API 키(Gemini 또는 DALL-E)가 필요합니다. 자세한 내용은 GitHub README를 참고해 주세요.</div>
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

// Pipeline step animation
const STEP_DATA = [
  { subs: ['콘텐츠 작성 대기', 'Notion에서 불러오는 중', '콘텐츠 작성 완료'] },
  { subs: ['포맷 대기',         '발행용 구조로 정리 중',  '구조 정리 완료'] },
  { subs: ['썸네일 생성 대기',  '썸네일 생성 중',         '썸네일 생성 완료'] },
  { subs: ['채널 배포 대기',    '채널에 배포 중',         '배포 완료'] },
]

function setPipelineStep(activeIdx: number) {
  document.querySelectorAll('.flow-step').forEach((el, i) => {
    const badge = el.querySelector('.flow-status') as HTMLElement
    const sub   = el.querySelector('.step-sub')   as HTMLElement
    el.classList.remove('active')
    badge.className = 'flow-status'
    if (i < activeIdx) {
      badge.classList.add('done');    badge.textContent = '완료';    sub.textContent = STEP_DATA[i].subs[2]
    } else if (i === activeIdx) {
      el.classList.add('active')
      badge.classList.add('running'); badge.textContent = '실행 중'; sub.textContent = STEP_DATA[i].subs[1]
    } else {
      badge.classList.add('wait');    badge.textContent = '대기';    sub.textContent = STEP_DATA[i].subs[0]
    }
  })
  const pill    = document.querySelector<HTMLElement>('.status-pill')
  const counter = document.querySelector<HTMLElement>('.tag-sm')
  if (pill)    { pill.textContent = '파이프라인 실행 중'; pill.classList.remove('complete') }
  if (counter) counter.textContent = `step ${activeIdx + 1} / 4`
}

function showPipelineDone() {
  document.querySelectorAll('.flow-step').forEach((el, i) => {
    const badge = el.querySelector('.flow-status') as HTMLElement
    const sub   = el.querySelector('.step-sub')   as HTMLElement
    el.classList.remove('active')
    badge.className = 'flow-status done'; badge.textContent = '완료'; sub.textContent = STEP_DATA[i].subs[2]
  })
  const pill    = document.querySelector<HTMLElement>('.status-pill')
  const counter = document.querySelector<HTMLElement>('.tag-sm')
  if (pill)    { pill.textContent = '파이프라인 완료'; pill.classList.add('complete') }
  if (counter) counter.textContent = 'step 4 / 4'
}

let pipelineStep = 1  // initial HTML shows step 2 active (index 1)

function runPipelineAnimation() {
  pipelineStep = (pipelineStep + 1) % 5  // 0–3 = steps, 4 = all-done state
  if (pipelineStep === 4) {
    showPipelineDone()
    setTimeout(() => {
      pipelineStep = 0
      setPipelineStep(0)
      setTimeout(runPipelineAnimation, 2500)
    }, 1500)
  } else {
    setPipelineStep(pipelineStep)
    setTimeout(runPipelineAnimation, 2500)
  }
}

setTimeout(runPipelineAnimation, 2500)
