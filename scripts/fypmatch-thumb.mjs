import sharp from 'sharp';
import { resolve } from 'node:path';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fcfaf6"/>
      <stop offset="100%" stop-color="#f4f2ed"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#bg)"/>

  <!-- subtle grid -->
  <g stroke="#e8e6e0" stroke-width="0.5" opacity="0.6">
    <line x1="0" y1="200" x2="1200" y2="200"/>
    <line x1="0" y1="400" x2="1200" y2="400"/>
    <line x1="0" y1="600" x2="1200" y2="600"/>
    <line x1="200" y1="0" x2="200" y2="800"/>
    <line x1="400" y1="0" x2="400" y2="800"/>
    <line x1="600" y1="0" x2="600" y2="800"/>
    <line x1="800" y1="0" x2="800" y2="800"/>
    <line x1="1000" y1="0" x2="1000" y2="800"/>
  </g>

  <!-- Logo block -->
  <g transform="translate(80, 80)">
    <rect width="44" height="44" rx="10" fill="#18181b"/>
    <text x="22" y="32" font-family="-apple-system, system-ui, sans-serif" font-size="22" font-weight="800" fill="white" text-anchor="middle">F</text>
    <text x="60" y="32" font-family="-apple-system, system-ui, sans-serif" font-size="26" font-weight="800" fill="#18181b">FYPMatch</text>
  </g>

  <!-- Tag pill -->
  <g transform="translate(80, 200)">
    <rect width="380" height="36" rx="18" fill="#f4f4f5" stroke="#e4e4e7"/>
    <circle cx="22" cy="18" r="4" fill="#15803d"/>
    <text x="38" y="23" font-family="-apple-system, system-ui, sans-serif" font-size="13" fill="#444" font-weight="500">Built for Pakistani students</text>
  </g>

  <!-- Big headline -->
  <text x="80" y="320" font-family="-apple-system, system-ui, sans-serif" font-size="72" font-weight="800" fill="#09090b" letter-spacing="-3">Stop staring at</text>
  <text x="80" y="400" font-family="-apple-system, system-ui, sans-serif" font-size="72" font-weight="800" fill="#09090b" letter-spacing="-3">a blank page.</text>

  <!-- Sub headline with monospace -->
  <text x="80" y="490" font-family="-apple-system, system-ui, sans-serif" font-size="36" font-weight="800" fill="#09090b" letter-spacing="-1">Get 5 FYP ideas in </text>
  <g transform="translate(548, 460)">
    <rect width="220" height="44" rx="10" fill="#18181b"/>
    <text x="110" y="32" font-family="ui-monospace, monospace" font-size="28" font-weight="800" fill="white" text-anchor="middle" letter-spacing="-1">30 seconds.</text>
  </g>

  <!-- CTA -->
  <g transform="translate(80, 560)">
    <rect width="280" height="56" rx="12" fill="#18181b"/>
    <text x="140" y="36" font-family="-apple-system, system-ui, sans-serif" font-size="16" font-weight="700" fill="white" text-anchor="middle">Generate my ideas →</text>
  </g>

  <!-- Stats row -->
  <g transform="translate(80, 680)" font-family="ui-monospace, monospace">
    <text x="0" y="0" font-size="32" font-weight="800" fill="#09090b">1,200+</text>
    <text x="0" y="22" font-family="-apple-system, system-ui, sans-serif" font-size="12" fill="#71717a">Students helped</text>

    <text x="180" y="0" font-size="32" font-weight="800" fill="#09090b">5,800+</text>
    <text x="180" y="22" font-family="-apple-system, system-ui, sans-serif" font-size="12" fill="#71717a">Ideas generated</text>

    <text x="360" y="0" font-size="32" font-weight="800" fill="#15803d">94%</text>
    <text x="360" y="22" font-family="-apple-system, system-ui, sans-serif" font-size="12" fill="#71717a">Approval rate</text>
  </g>

  <!-- Floating idea card preview -->
  <g transform="translate(740, 220)">
    <rect width="380" height="500" rx="16" fill="white" stroke="#18181b" stroke-width="2"/>

    <!-- Card header -->
    <rect x="24" y="24" width="44" height="44" rx="10" fill="#18181b"/>
    <text x="46" y="55" font-family="ui-monospace, monospace" font-size="14" font-weight="800" fill="white" text-anchor="middle">#1</text>

    <rect x="80" y="32" width="80" height="28" rx="14" fill="#fef3c7"/>
    <text x="120" y="51" font-family="-apple-system, system-ui, sans-serif" font-size="11" font-weight="700" fill="#d97706" text-anchor="middle" letter-spacing="3">TOP PICK</text>

    <!-- Title -->
    <text x="24" y="110" font-family="-apple-system, system-ui, sans-serif" font-size="18" font-weight="800" fill="#09090b">AI Code Review</text>
    <text x="24" y="134" font-family="-apple-system, system-ui, sans-serif" font-size="18" font-weight="800" fill="#09090b">Assistant</text>

    <text x="24" y="170" font-family="-apple-system, system-ui, sans-serif" font-size="13" fill="#71717a">For Pakistani bootcamps</text>
    <text x="24" y="190" font-family="-apple-system, system-ui, sans-serif" font-size="13" fill="#71717a">Bilingual feedback</text>

    <!-- Stack pills -->
    <g transform="translate(24, 220)" font-family="ui-monospace, monospace" font-size="11" font-weight="500">
      <rect width="62" height="22" rx="11" fill="#f4f4f5"/>
      <text x="31" y="15" fill="#27272a" text-anchor="middle">Next.js</text>

      <g transform="translate(70, 0)">
        <rect width="58" height="22" rx="11" fill="#f4f4f5"/>
        <text x="29" y="15" fill="#27272a" text-anchor="middle">Python</text>
      </g>

      <g transform="translate(136, 0)">
        <rect width="64" height="22" rx="11" fill="#f4f4f5"/>
        <text x="32" y="15" fill="#27272a" text-anchor="middle">Postgres</text>
      </g>
    </g>

    <!-- Score bars -->
    <g transform="translate(24, 280)">
      <text x="0" y="0" font-family="-apple-system, system-ui, sans-serif" font-size="10" font-weight="700" fill="#71717a" letter-spacing="2">DIFFICULTY</text>
      <text x="332" y="0" font-family="ui-monospace, monospace" font-size="11" font-weight="700" fill="#d97706" text-anchor="end">7 / 10</text>
      <rect x="0" y="10" width="332" height="4" rx="2" fill="#e4e4e7"/>
      <rect x="0" y="10" width="232" height="4" rx="2" fill="#f59e0b"/>

      <text x="0" y="48" font-family="-apple-system, system-ui, sans-serif" font-size="10" font-weight="700" fill="#71717a" letter-spacing="2">CAREER RELEVANCE</text>
      <text x="332" y="48" font-family="ui-monospace, monospace" font-size="11" font-weight="700" fill="#15803d" text-anchor="end">9 / 10</text>
      <rect x="0" y="58" width="332" height="4" rx="2" fill="#e4e4e7"/>
      <rect x="0" y="58" width="299" height="4" rx="2" fill="#15803d"/>

      <text x="0" y="96" font-family="-apple-system, system-ui, sans-serif" font-size="10" font-weight="700" fill="#71717a" letter-spacing="2">ORIGINALITY</text>
      <text x="332" y="96" font-family="ui-monospace, monospace" font-size="11" font-weight="700" fill="#3b82f6" text-anchor="end">8 / 10</text>
      <rect x="0" y="106" width="332" height="4" rx="2" fill="#e4e4e7"/>
      <rect x="0" y="106" width="266" height="4" rx="2" fill="#3b82f6"/>
    </g>

    <!-- CTA -->
    <g transform="translate(24, 430)">
      <rect width="332" height="44" rx="8" fill="#18181b"/>
      <text x="166" y="28" font-family="-apple-system, system-ui, sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">View full breakdown →</text>
    </g>
  </g>
</svg>`;

const out = resolve(process.cwd(), 'public', 'fypmatch.png');
await sharp(Buffer.from(svg), { density: 200 }).png({ quality: 95 }).toFile(out);
console.log('fypmatch.png written →', out);
