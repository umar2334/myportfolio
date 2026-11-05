export const links = {
  cv: '/umarcv.pdf',
  email: 'umarkhn895@gmail.com',
  whatsapp: 'https://wa.me/923402288644?text=Hi%20Umar%2C%20I%20saw%20your%20portfolio.',
  github: 'https://github.com/umar2334',
  linkedin: 'https://www.linkedin.com/in/umar-khan-dev/',
  x: 'https://twitter.com/umarkhn895',
  instagram: 'https://www.instagram.com/umarkhan404/',
};

export const stats = [
  { num: '10', label: 'Products built' },
  { num: '4', label: 'Android apps & games' },
  { num: '4', label: 'Years coding' },
  { num: '330', label: 'Game levels auto-tested' },
];

export const buildingWith = ['Flutter', 'Next.js', 'React', 'Firebase', 'Supabase', 'Godot', 'Gemini', 'Claude'];

export const skillGroups = [
  { label: 'AI', items: ['Claude', 'Gemini', 'OpenAI', 'Agents', 'Prompt engineering', 'Cursor', 'Copilot'] },
  { label: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'shadcn/ui'] },
  { label: 'Mobile & games', items: ['Flutter', 'Dart', 'Godot', 'GDScript', 'Google Play', 'AdMob', 'OpenStreetMap'] },
  { label: 'Backend & data', items: ['Node.js', 'Firebase', 'Supabase', 'Postgres', 'REST', 'Webhooks', 'Cron'] },
  { label: 'Automation & ops', items: ['Python', 'Instagram Graph API', 'launchd', 'Git', 'GitHub', 'Vercel', 'Figma'] },
];

export const experience = [
  {
    role: 'Global Encounters Intern, Digital Learning & Innovation',
    org: 'Aga Khan Education Service, Pakistan (AKESP)',
    place: 'Karachi',
    period: 'Jun 2026 – Aug 2026',
    points: [
      'Conducted site visits and structured interviews across AKESP South Region’s four Karachi schools to document ICT infrastructure and curriculum gaps.',
      'Authored an 8-page article with a five-year AI integration roadmap.',
      'Proposed and prototyped Teacher Assistant AI, a web tool giving students real-time coding hints and teachers an AI-reviewed submission dashboard, backed by CHI 2024 research, with a working Figma prototype and a clickable demo.',
    ],
    tags: ['Primary research', 'AI in education', 'Product prototyping', 'Figma'],
    demo: {
      title: 'Teacher Assistant AI',
      note: 'Clickable demo with sample data',
      href: 'https://teacherassistantaidemo.netlify.app/',
      img: '/apps/teacher-assistant.webp',
      alt: 'Teacher Assistant AI dashboard showing a class roster, student progress and a log of AI hints',
    },
  },
];

export const education = [
  { degree: 'BS Software Engineering', inst: 'Indus University', year: '2022 – 2026' },
  { degree: 'Intermediate (Computer Science)', inst: 'Fatimiyah Boys College', year: '2019 – 2021' },
];

/* New apps, shown large at the top of the Work section. */
export const featured = [
  {
    id: 'appnacv',
    title: 'AppnaCV',
    icon: '/apps/appnacv-icon.webp',
    kind: 'AI CV maker for Android',
    status: 'Early access',
    statusTone: 'amber',
    desc: 'Built for Pakistani job seekers. Write or speak your experience in plain words, and AppnaCV turns it into a professional, ATS-ready CV. It tailors the CV to each job and writes the cover letter too.',
    highlights: [
      'Speak your CV in Urdu or Roman Urdu',
      'ATS score with fixes and missing keywords',
      'Tailor to a job ad, saved as a separate copy',
      '42 templates, PDF export and CV translation',
    ],
    tech: ['Flutter', 'Firebase', 'Gemini', 'Firestore rules'],
    links: [{ label: 'Visit app site', href: 'https://resumeai-ff3d4.web.app/', primary: true }],
    visual: { type: 'image', src: '/apps/appnacv-feature.webp', file: 'appnacv / play-listing', alt: 'AppnaCV store graphic with the ACV logo and the features ATS Check, Job Matching and Cover Letter' },
  },
  {
    id: 'jamblit',
    title: 'JAMBLIT',
    icon: '/apps/jamblit-icon.webp',
    kind: 'Bus-jam puzzle game for Android',
    status: 'Closed testing on Play',
    statusTone: 'amber',
    desc: 'A glossy tap-to-slide puzzle with colour buses, and a troll level every 5th level that breaks the rules once. I built the game, art pipeline, ads and analytics myself, tuned to run on cheap Android phones.',
    highlights: [
      'Every board is generated backwards, so it is always solvable',
      'Automated test checks 330 levels',
      'Daily Troll challenge with the same level for everyone',
      'Colour-blind friendly and works offline',
    ],
    tech: ['Godot 4', 'GDScript', 'AdMob', 'Firebase'],
    links: [{ label: 'Follow on Instagram', href: 'https://www.instagram.com/jamblit_official/', primary: true }],
    visual: {
      type: 'game',
      src: '/apps/jamblit-feature.webp',
      file: 'jamblit / screens',
      alt: 'JAMBLIT store graphic with a smiling red block and bus',
      screens: [
        { src: '/apps/jamblit-gameplay.webp', alt: 'JAMBLIT level 31 with colourful blocks and buses' },
        { src: '/apps/jamblit-combo.webp', alt: 'JAMBLIT combo moment during a level' },
        { src: '/apps/jamblit-troll.webp', alt: 'JAMBLIT troll level' },
      ],
    },
  },
  {
    id: 'reel-agent',
    title: 'JAMBLIT Reel Agent',
    kind: 'Autonomous Instagram marketing agent',
    status: 'Running daily',
    statusTone: 'green',
    desc: 'A $0 marketing agent for my own game. It works through a 30-day plan of unique reels, animated skits and real gameplay, then posts the next one every day at 6 PM with no manual work.',
    highlights: [
      'A different script for every reel',
      'Records real gameplay through the game’s autoplay',
      'AI voice with word-synced captions',
      'Posts through the Instagram API on a schedule',
    ],
    tech: ['Python', 'Instagram Graph API', 'edge-tts', 'launchd'],
    links: [{ label: 'See the reels', href: 'https://www.instagram.com/jamblit_official/', primary: true }],
    visual: { type: 'terminal', file: 'agent / daily-run' },
  },
];

export const pipeline = [
  ['script', 'unique hook, lines & closer'],
  ['visuals', 'animated skit or real gameplay'],
  ['voice', 'AI voice + synced captions'],
  ['render', 'SFX, music & end card'],
  ['publish', 'Instagram API + SEO caption'],
];

export const projects = [
  {
    title: 'LeadHunter Pro', img: '/projects/leadhunter.webp', status: 'Live', tone: 'green',
    desc: 'Finds local businesses with weak websites, audits and ranks them, then drafts outreach with Gemini. Includes a Chrome extension.',
    tech: ['Next.js', 'Supabase', 'Gemini'],
    links: [{ label: 'Live', href: 'https://leadhunter-pro-lac.vercel.app' }, { label: 'GitHub', href: 'https://github.com/umar2334/leadhunter-pro' }],
  },
  {
    title: 'TurkVerse', img: '/projects/turkverse.webp', status: 'Live', tone: 'green',
    desc: 'Fast blog and news portal for Turkish dramas, built around SSR/SSG, SEO and optimized images.',
    tech: ['Next.js', 'SSR/SSG', 'SEO'],
    links: [{ label: 'Live', href: 'https://www.turkdrama.live' }],
  },
  {
    title: 'APNNCV', img: '/projects/apnncv.webp', status: 'Live', tone: 'green',
    desc: 'Web resume builder with ATS-friendly templates, live preview and PDF export.',
    tech: ['React', 'Firebase', 'Tailwind'],
    links: [{ label: 'Live', href: 'https://apnnacv.vercel.app/' }],
  },
  {
    title: 'Ghumo', img: '/projects/ghumo.webp', status: 'APK', tone: 'blue',
    desc: 'Pakistan travel companion with an offline destination guide, live weather, maps, trip planning and expense tracking.',
    tech: ['Flutter', 'Dart', 'OpenStreetMap'],
    links: [{ label: 'Web demo', href: 'https://ghumo-web.vercel.app' }, { label: 'Download APK', href: 'https://github.com/umar2334/Ghumo/releases/download/v1.1.0/app-arm64-v8a-release.apk' }, { label: 'GitHub', href: 'https://github.com/umar2334/Ghumo' }],
  },
  {
    title: 'Society Management', img: '/projects/society-management.webp', status: 'APK', tone: 'blue',
    desc: 'Resident and admin app for Karim Nagar Colony, with secure login, announcements and an admin dashboard.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    links: [{ label: 'Download APK', href: 'https://github.com/umar2334/society-managment-app/releases/download/v1.0.27/society-management-v1.0.27.apk' }, { label: 'GitHub', href: 'https://github.com/umar2334/society-managment-app' }],
  },
  {
    title: 'Finance App', img: '/projects/finance-app.webp', status: 'Live', tone: 'green',
    desc: 'Track income and expenses with charts, monthly budgets and CSV import, in English and Urdu, with optional cloud sync.',
    tech: ['React', 'TypeScript', 'Supabase'],
    links: [{ label: 'Live', href: 'https://personal-finance-visualizer-ochre-psi.vercel.app/' }, { label: 'GitHub', href: 'https://github.com/umar2334/personal-finance-visualizer' }],
  },
  {
    title: 'Umar Store', img: '/projects/ecommerce-ui.webp', status: 'Demo', tone: 'blue',
    desc: 'Demo online store with catalogue filters, cart, wishlist and a three-step checkout. Products are sample data and nothing is for sale.',
    tech: ['React', 'TypeScript', 'Vite'],
    links: [{ label: 'Live demo', href: 'https://umar2334.github.io/project-1-umar-store/' }, { label: 'GitHub', href: 'https://github.com/umar2334/project-1-umar-store' }],
  },
  {
    title: 'FYPMatch', img: '/projects/fypmatch.webp', status: 'Live', tone: 'green',
    desc: 'AI final-year project generator for Pakistani students, returning 5 ranked ideas with a supervisor pitch.',
    tech: ['Next.js', 'Gemini', 'Zod'],
    links: [{ label: 'Live', href: 'https://fypmatch.vercel.app' }, { label: 'GitHub', href: 'https://github.com/umar2334/fypmatch' }],
  },
];

/*
  Add real certificates here and the section and nav link appear automatically.
  It stays hidden while this list is empty.
  { title, issuer, code, year, level, desc, url, featured: true }
  `level`, `code`, `year`, `desc`, `url` and `featured` are optional.
*/
export const certifications = [
  {
    title: 'AI Fluency: Framework and Foundations',
    issuer: 'Claude Academy',
    year: 'Nov 2026',
    level: 'Course completion',
    url: 'https://academy.claude.com/verify/88895a76d216cb5434c73e578ea00fd9',
    featured: true,
  },
];

export const steps = [
  { title: '15-min call', tag: 'Scope · Timeline · Quote', desc: 'WhatsApp or Google Meet. You explain what you need. I tell you what is realistic, what it costs and how long it takes, with no sales pitch.' },
  { title: 'Build in public', tag: 'Figma · Daily Looms · Live preview', desc: 'Daily Loom updates. You see screens before code is written and code before it is deployed. The AI-augmented workflow keeps weeks from turning into months.' },
  { title: 'Ship & support', tag: 'Deploy · Handoff · 14-day fixes', desc: 'Tested, deployed and documented. You get the source code, deployment access and 14 days of free fixes. No lock-in, no surprises.' },
];

export const services = [
  { label: 'Production MVP: web', note: '1–3 weeks' },
  { label: 'Production MVP: mobile', note: '2–4 weeks' },
  { label: 'AI integration or agent', note: 'Project-based' },
  { label: 'Marketing & landing pages', note: '3–7 days' },
  { label: 'Existing codebase work', note: 'Hourly' },
];

export const faqs = [
  { q: 'How fast can you actually ship?', a: 'Landing page: 3–7 days. Production MVP with auth and a database: 2–3 weeks. Full mobile app: 3–4 weeks. You get a fixed quote and a timeline upfront, plus daily Loom updates so you see progress, not promises.' },
  { q: 'You use AI to write code. Does that mean you don’t understand it?', a: 'Fair question. I read every line, refactor what the AI gets wrong and own every shipped commit. AI is a faster keyboard, not a substitute for engineering. I architect, debug, optimize and review.' },
  { q: 'What’s your stack?', a: 'Frontend: Next.js, React, TypeScript, Tailwind. Backend: Node, Supabase, Firebase, Postgres. Mobile: Flutter. Games: Godot. AI: OpenAI, Anthropic and Gemini APIs. Tools: Vercel, GitHub, Figma. I pick what fits the problem.' },
  { q: 'Do you work with international clients?', a: 'Yes. I work async-first, overlap with US and EU mornings and respond within a few hours. Pakistan is GMT+5. Payments via Wise, Payoneer or direct bank.' },
  { q: 'Can you join an existing codebase?', a: 'Yes. I jump into existing React, Next, Flutter or Node projects, do a code-walk and continue from where the previous dev left off. I document what I touch and ship clean PRs.' },
  { q: 'What about post-launch support?', a: 'Free fixes for 14 days after handoff. Beyond that, ongoing support is a monthly retainer or hourly, your choice. Source code, deployment access and docs are always yours.' },
  { q: 'Are you open to full-time roles?', a: 'Yes, actively. I am open to remote-first software engineering roles globally and on-site in Pakistan. Send me a JD and I’ll get back to you the same day.' },
];
