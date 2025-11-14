// components.js — assemble premium landing page from component templates
const root = document.getElementById('root') || document.body

function createHero(){
  const el = document.createElement('section')
  el.className = 'hero-poster container'
  el.innerHTML = `
    <div class="poster-copy">
      <h1>Ask Anything About Any Webpage.</h1>
      <p class="subtitle">Your AI-powered browser companion.</p>
      <div class="btn-row">
        <a class="btn github" id="btn-github" href="https://github.com/Meetvaghela-code/Webionix-Chome-Extension" target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.4-3.88-1.4-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.72 1.26 3.38.97.11-.76.41-1.26.75-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.52.11-3.17 0 0 .97-.31 3.18 1.18a11.07 11.07 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.5 3.17-1.18 3.17-1.18.64 1.65.24 2.87.12 3.17.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.42.36.8 1.08.8 2.18 0 1.58-.01 2.86-.01 3.25 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>
          <span class="github-label">GitHub</span>
        </a>
      </div>
      <ul class="impact" style="margin-top:22px">
        <li>Privacy-first: runs locally</li>
        <li>Instant answers</li>
        <li>Developer friendly</li>
      </ul>
    </div>
    <div class="hero-visual">
      <div class="glow-sphere"></div>
      <div class="icon-3d" aria-hidden="true">
        <!-- stylized glowing icon SVG -->
        ${glowingIconSVG()}
      </div>
      <div class="neon-lines">
        <div class="neon-line" style="left:14%;top:20%;height:80px;transform:rotate(12deg)"></div>
        <div class="neon-line" style="left:40%;top:60%;height:120px;transform:rotate(-8deg);background:linear-gradient(180deg,var(--neon-purple),transparent)"></div>
      </div>
      <div class="bubble" style="right:24px;top:28px">Live<span class="sub">Latency &lt;150ms</span></div>
      <div class="bubble" style="left:34px;bottom:28px;color:var(--neon-purple)">HF Embeddings<span class="sub">all-MiniLM-L6-v2</span></div>
    </div>
  `
  return el
}

function createShowcase(){
  const el = document.createElement('section')
  el.className = 'container showcase'
  el.innerHTML = `
    <div class="browser-mock">
      <div class="browser-top"><span class="tab-dot" style="background:#ff5f57"></span><span class="tab-dot" style="background:#ffbd2e"></span><span class="tab-dot" style="background:#28c840"></span></div>
      <div class="content-area">
        <h3 style="margin-top:0">Web page: Product Review</h3>
        <p>Content loaded — highlighting the paragraph where the answer is found. Animated neon lines show the retrieval path from content → vector → LLM.</p>
        <div style="height:8px"></div>
        <div style="height:6px;background:linear-gradient(90deg,var(--neon-blue),var(--neon-purple));border-radius:6px;width:40%"></div>
      </div>
    </div>
    <div style="flex:0 0 360px">
      <div class="feature-card" style="margin-bottom:14px">
        <div style="display:flex;gap:12px;align-items:center">
          <div class="feature-icon">🧠</div>
          <div>
            <div style="font-weight:800">Smart Page Understanding</div>
            <div style="color:var(--muted);font-size:13px">Extracts structure and meaning</div>
          </div>
        </div>
      </div>
      <div class="feature-card">
        <div style="display:flex;gap:12px;align-items:center">
          <div class="feature-icon">⚡</div>
          <div>
            <div style="font-weight:800">Instant Answers</div>
            <div style="color:var(--muted);font-size:13px">Fast retrieval + LLM</div>
          </div>
        </div>
      </div>
    </div>
  `
  return el
}

function createFeatures(){
  const el = document.createElement('section')
  el.className = 'container features'
  el.innerHTML = `
    <div class="feature-card">
      <div class="feature-icon">🧠</div>
      <div class="feature-title">Smart Page Understanding</div>
      <div class="feature-desc">Extracts the document structure and key points for accurate retrieval.</div>
    </div>
    <div class="feature-card">
      <div class="feature-icon">💬</div>
      <div class="feature-title">Instant Answers</div>
      <div class="feature-desc">Ask a question, get a concise answer in seconds.</div>
    </div>
    <div class="feature-card">
      <div class="feature-icon">⚡</div>
      <div class="feature-title">One-Click Access</div>
      <div class="feature-desc">Open the popup and ask — no context switching.</div>
    </div>
    <div class="feature-card">
      <div class="feature-icon">🔍</div>
      <div class="feature-title">AI-Powered Accuracy</div>
      <div class="feature-desc">Structured outputs and focused retrieval improve answer quality.</div>
    </div>
  `
  return el
}

function createDemo(){
  const el = document.createElement('section')
  el.className = 'container demo'
  el.innerHTML = `
    <div class="question-box">
      <div style="color:var(--muted);font-size:13px">User</div>
      <div style="margin-top:8px;font-weight:700">What are the disadvantages of this phone?</div>
    </div>
    <div class="answer-box">
      <div style="color:var(--muted);font-size:13px">Webionix</div>
      <div class="answer" style="margin-top:8px;font-size:18px">Limited battery life in heavy use, average camera in low light.</div>
      <div style="margin-top:12px;color:var(--muted);font-size:13px">Structured highlights:</div>
      <ul style="color:var(--muted);margin-top:8px">
        <li>Battery life: ~18 hours typical</li>
        <li>Camera: noise in low-light</li>
      </ul>
    </div>
  `
  return el
}

function createPromoVideo(){
  const el = document.createElement('section')
  el.className = 'container promo-video'
  el.innerHTML = `
    <h2>See Webionix in action</h2>
    <div class="video-wrap">
      <video controls playsinline preload="metadata" poster="./assets/promo-poster.jpg">
        <source src="./assets/promo.mp4" type="video/mp4" />
        Your browser does not support the video tag. <a href="./assets/promo.mp4">Download the video</a>.
      </video>
    </div>
  `
  return el
}

function createTerminalDemo(){
  const el = document.createElement('section')
  el.className = 'container terminal-demo'
  el.innerHTML = `
    <div class="terminal-window">
      <div class="term-row">
        <div class="term-prompt">$ webionix</div>
        <input class="term-input" id="term-input" placeholder="Try: summarize the landing page in one sentence" />
        <span class="term-cursor" id="term-cursor" aria-hidden="true"></span>
      </div>
      <div class="term-output" id="term-output" aria-live="polite"></div>
      <div class="term-actions">
        <button class="btn neon" id="term-run">Run</button>
        <button class="btn ghost" id="term-clear">Clear</button>
      </div>
    </div>
  `
  return el
}

function createFooter(){
  const el = document.createElement('footer')
  el.className = 'footer-min container'
  el.innerHTML = `AI Web Insight — Chrome Extension`
  return el
}

function glowingIconSVG(){
  return `
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="g1" cx="30%" cy="30%" r="60%">
        <stop offset="0%" stop-color="#7b61ff" stop-opacity="0.95" />
        <stop offset="60%" stop-color="#4dd0e1" stop-opacity="0.6" />
        <stop offset="100%" stop-color="#061018" stop-opacity="0" />
      </radialGradient>
      <filter id="f1" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="6" result="b" />
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <rect x="8" y="8" width="112" height="112" rx="18" fill="url(#g1)"/>
    <g filter="url(#f1)">
      <path d="M36 44c6-12 30-18 46-6 18 14 10 44-10 54-24 12-46-6-46-6" stroke="#e6eef3" stroke-opacity="0.08" fill="none" stroke-width="2"/>
      <circle cx="64" cy="60" r="18" fill="#061018" stroke="#4dd0e1" stroke-width="2"/>
      <path d="M58 56h12v8H58z" fill="#4dd0e1"/>
    </g>
  </svg>
  `
}

// mount on root
root.innerHTML = ''
 root.appendChild(createHero())
 root.appendChild(createTerminalDemo())
 root.appendChild(createShowcase())
 root.appendChild(createFeatures())
 root.appendChild(createDemo())
 root.appendChild(createPromoVideo())
 root.appendChild(createFooter())

// small interactions
document.querySelectorAll('.btn.neon').forEach(b=>b.addEventListener('click', ()=>alert('Add to Chrome — drag extension folder to Chrome in developer mode (demo)')))

// show a short suggestion to click GitHub when the page loads
;(function githubSuggestion(){
  const githubBtn = document.getElementById('btn-github')
  if(!githubBtn) return
  // ensure parent is positioned
  const parent = githubBtn.closest('.btn-row') || githubBtn.parentElement
  if(parent) parent.style.position = parent.style.position || ''

  // create suggestion element
  const sug = document.createElement('div')
  sug.className = 'github-suggestion'
  sug.textContent = 'Explore the project on GitHub — click to open'
  parent.appendChild(sug)

  // connector removed: no SVG edge is drawn (suggestion tooltip only)


  // animate highlight + show suggestion after a short delay
  const showDelay = 650
  const visibleFor = 7000
  let hideTimeout = null

  function show(){
    githubBtn.classList.add('highlight')
    sug.classList.add('show')
    hideTimeout = setTimeout(hide, visibleFor)
  }
  function hide(){
    githubBtn.classList.remove('highlight')
    sug.classList.remove('show')
    // no connector to clear
    if(hideTimeout){ clearTimeout(hideTimeout); hideTimeout = null }
  }

  // stop suggestion if user interacts
  githubBtn.addEventListener('click', hide)
  githubBtn.addEventListener('mouseover', hide)
  sug.addEventListener('mouseover', ()=>{ clearTimeout(hideTimeout); })

  // show on next tick
  window.requestAnimationFrame(()=> setTimeout(show, showDelay))
})()

// terminal demo interactions: simulate typing user prompt and AI response
;(function terminalDemo(){
  const input = document.getElementById('term-input')
  const runBtn = document.getElementById('term-run')
  const clearBtn = document.getElementById('term-clear')
  const output = document.getElementById('term-output')
  const cursor = document.getElementById('term-cursor')
  if(!input || !runBtn || !output) return

  function sleep(ms){ return new Promise(res=>setTimeout(res,ms)) }

  async function typeText(container, text, speed=24){
    container.innerHTML = ''
    for(let i=0;i<text.length;i++){
      container.innerHTML += text[i]
      await sleep(speed + (Math.random()*20))
    }
  }

  function getSimulatedReply(prompt){
    // simple simulated responses by keyword or default
    const p = prompt.toLowerCase()
    if(p.includes('battery')) return 'AI: The phone shows reduced battery life under heavy usage; consider light-usage settings and battery-saving modes.'
    if(p.includes('camera')) return 'AI: Camera performs well in daylight but shows noise in low-light; recommend software denoising and stabilisation.'
    if(p.includes('privacy') || p.includes('local')) return 'AI: Webionix processes embeddings locally to protect your data — no cloud upload by default.'
    if(p.trim().length===0) return 'AI: Please type a question about the current page.'
    // default concise reply with highlights
    return 'AI: Concise answer — Webionix extracts context from the page and provides focused summaries with source highlights.'
  }

  async function runDemo(){
    const text = input.value || input.placeholder || 'Summarize the landing page in one sentence'
    // show typed input in output area as user command
    output.innerHTML = ''
    cursor.style.display = 'inline-block'
    await typeText(output, `$ ${text}\n`, 18)
    // show loader
    const loader = document.createElement('span')
    loader.className = 'term-loader'
    loader.innerHTML = '<span class="dots"><span></span><span></span><span></span></span>'
    output.appendChild(loader)
    // wait a moment to simulate processing
    await sleep(900 + Math.random()*700)
    // remove loader
    loader.remove()
    // type AI response
    const reply = getSimulatedReply(text)
    await typeText(output, '\n' + reply, 18)
    cursor.style.display = 'none'
  }

  runBtn.addEventListener('click', ()=>{ runDemo().catch(()=>{}) })
  input.addEventListener('keydown', (e)=>{ if(e.key==='Enter'){ e.preventDefault(); runDemo().catch(()=>{}) } })
  clearBtn.addEventListener('click', ()=>{ output.innerHTML=''; input.value=''; cursor.style.display='none' })

  // autoplay demo: type a sample question into the input and run it automatically
  ;(async function autoDemo(){
    try{
      const sample = input.value && input.value.trim().length>0 ? null : (input.placeholder || 'Summarize the landing page in one sentence')
      if(!sample) return
      // small delay before auto-typing
      await sleep(800)
      // if user interacted, abort
      if(document.activeElement === input && input.value.trim().length>0) return
      cursor.style.display = 'inline-block'
      input.focus()
      input.value = ''
      for(const ch of sample){
        input.value += ch
        await sleep(40 + Math.random()*30)
        // if the user focuses and types, stop autoplay
        if(document.activeElement === input && input.selectionStart !== input.value.length) { break }
      }
      // short pause and run
      await sleep(350)
      runDemo().catch(()=>{})
    }catch(e){/* ignore autoplay errors */}
  })()
})()


export {} // keep module scope
