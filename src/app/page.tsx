"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

// Icons as components
const AppleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const WindowsIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
  </svg>
);

const PlayIcon = () => (
  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

const features = [
  {
    title: "Workspace Resume",
    description: "Return to any page exactly where you left off. Cascading restore: DOM anchor, scroll ratio, pixel position, and redirect detection.",
    icon: "🔄"
  },
  {
    title: "AI Agent (Second Brain)",
    description: "Chat or delegate tasks to your AI. Summarize pages, fill forms, navigate with multi-provider support and BYOK privacy.",
    icon: "🤖"
  },
  {
    title: "Continuum Shield",
    description: "Real local hash-prefix DB with 4 live threat feeds. Runtime hardening, multi-layer fingerprint resistance, behavioral worker monitoring, and 164K+ filter rules.",
    icon: "🛡️"
  },
  {
    title: "Quick Switcher",
    description: "Cmd+K to instantly jump between Workspaces. Debounced search, keyboard navigation, and smart sorting.",
    icon: "⚡"
  },
  {
    title: "Notes Panel",
    description: "Markdown-friendly scratchpad per Workspace. Right-click 'Send to Notes' to clip content from any webpage instantly.",
    icon: "📝"
  },
  {
    title: "Privacy First",
    description: "No telemetry. Per-site permissions. Anti-fingerprinting. Cookie blocking. Nothing leaves your machine.",
    icon: "🔒"
  },
  {
    title: "Multi-Engine Search",
    description: "6 search engines: Google, Bing, DuckDuckGo, Yahoo, Ecosia, Naver. Persisted preference with URL auto-detection.",
    icon: "🔍"
  },
  {
    title: "P2P Sync (beta)",
    description: "Sync across devices with end-to-end encryption. Peer-to-peer WebRTC with no cloud required.",
    icon: "🔄"
  },
  {
    title: "DRM Content",
    description: "Built-in Widevine CDM. Netflix, Spotify, Disney+ protected streaming works out of the box.",
    icon: "🎬"
  }
];

const screenshots = [
  { src: "/Continuum workspace.png", alt: "Workspaces", caption: "Workspaces" },
  { src: "/Continuum ai .png", alt: "AI Assistant", caption: "AI Agent" },
  { src: "/Continuum shield.png", alt: "Continuum Shield", caption: "Shield Security" },
  { src: "/Continuum Security.png", alt: "Privacy Settings", caption: "Privacy Settings" },
];

const differentiators = [
  { chrome: "Tabs disappear on close", continuum: "Pages persist forever" },
  { chrome: "Start fresh every time", continuum: "Resume exactly where you stopped" },
  { chrome: "One shared session", continuum: "Isolated sessions per Workspace" },
  { chrome: "Scroll position lost", continuum: "Cascading scroll restore" },
  { chrome: "Copy-paste to notes", continuum: "Right-click \"Send to Notes\"" },
  { chrome: "One search engine", continuum: "6 search engines to choose from" },
  { chrome: "No built-in ad blocking", continuum: "164K+ filter rules" },
  { chrome: "No DRM on some builds", continuum: "Widevine DRM built-in" },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [detectedOS, setDetectedOS] = useState<'macos' | 'windows'>('macos');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
    
    // Auto-detect OS
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('win')) {
      setDetectedOS('windows');
    } else {
      setDetectedOS('macos'); // Default to macOS
    }
    
    // Auto-rotate screenshots
    const interval = setInterval(() => {
      setActiveScreenshot((prev) => (prev + 1) % screenshots.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />
      
      {/* Vignette effect */}
      <div className="vignette" />

      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid bg-grid-fade" />
        
        {/* Floating gradient orbs */}
        <div className="orb orb-1 animate-float-slow" />
        <div className="orb orb-2 animate-float-slower" />
        <div className="orb orb-3 animate-float-slow" style={{ animationDelay: '-10s' }} />
        
        {/* Additional accent orb */}
        <div 
          className="absolute w-[300px] h-[300px] rounded-full animate-float-slower"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 70%)',
            top: '60%',
            left: '60%',
            filter: 'blur(60px)',
            animationDelay: '-5s'
          }}
        />
        
        {/* Subtle horizontal glow lines */}
        <div className="glow-line" style={{ top: '25%', left: '0', right: '0' }} />
        <div className="glow-line" style={{ top: '75%', left: '0', right: '0' }} />
      </div>

      {/* Navigation - Minimal */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg overflow-hidden">
              <Image 
                src="/icon.png" 
                alt="Continuum" 
                width={32} 
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white font-medium text-[15px]">Continuum</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-white/60 hover:text-white text-sm">Features</a>
            <a href="#screenshots" className="text-white/60 hover:text-white text-sm">Preview</a>
            <a href="#ai-agent" className="text-white/60 hover:text-white text-sm">AI Agent</a>
            <a href="#download" className="text-white/60 hover:text-white text-sm">Download</a>
          </div>
          <a 
            href="#download" 
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90"
          >
            {detectedOS === 'macos' && <AppleIcon />}
            {detectedOS === 'windows' && <WindowsIcon />}
            <span className="hidden sm:inline">Download</span>
          </a>
        </div>
      </nav>

      {/* Hero Section - Clean & Bold */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className={`${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/60 text-xs tracking-wide">Version 2.0.0 Now Available</span>
            </div>
          </div>
          
          <h1 className={`text-[clamp(2.5rem,8vw,5.5rem)] font-medium leading-[1.05] tracking-tight mb-8 ${mounted ? 'animate-fade-in animation-delay-100' : 'opacity-0'}`}>
            <span className="text-white">Resume your work,</span>
            <br />
            <span className="text-white/40">not your tabs.</span>
          </h1>
          
          <p className={`text-white/50 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-12 ${mounted ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}>
            Continuum is a task-first, privacy-native browser with AI Agent, built-in ad blocking, and workspace resume. Pick up exactly where you left off.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${mounted ? 'animate-fade-in animation-delay-300' : 'opacity-0'}`}>
            <a
              href="#download"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-medium text-base hover:scale-[1.02] transition-transform"
            >
              {detectedOS === 'macos' && <AppleIcon />}
              {detectedOS === 'windows' && <WindowsIcon />}
              {detectedOS === 'macos' && 'Download for Mac'}
              {detectedOS === 'windows' && 'Download for Windows'}
              <span className="text-black/40 text-sm">Free</span>
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm"
            >
              See what&apos;s inside
              <ArrowRightIcon />
            </a>
          </div>
        </div>

        {/* Hero Screenshot - Large & Centered */}
        <div className={`w-full max-w-6xl mx-auto mt-20 px-4 ${mounted ? 'animate-fade-in-scale animation-delay-400' : 'opacity-0'}`}>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
            <Image 
              src="/Continuum First.png" 
              alt="Continuum Browser"
              width={1400}
              height={875}
              className="w-full h-auto"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 ${mounted ? 'animate-fade-in animation-delay-400' : 'opacity-0'}`}>
          <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Simple Value Prop */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl text-white/80 leading-relaxed font-light">
            Unlike Chrome where tabs disappear and context is lost,{" "}
            <span className="text-white font-normal">
              Continuum treats your browsing as continuous work.
            </span>{" "}
            Workspaces persist. Scroll positions restore. Notes stay with your research. AI assists your workflow.
          </p>
        </div>
      </section>

      {/* Features Section - Grid */}
      <section id="features" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-white/40 text-sm uppercase tracking-wide mb-4">Features</p>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">
              Built for how you work
            </h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Everything you need for focused, privacy-first browsing with an AI agent that actually helps.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card p-8 rounded-2xl bg-white/[0.02] border border-white/[0.04]"
              >
                <div className="text-2xl mb-5">{feature.icon}</div>
                <h3 className="text-lg font-medium text-white mb-3">{feature.title}</h3>
                <p className="text-white/50 text-[15px] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section - Carousel */}
      <section id="screenshots" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-white/40 text-sm uppercase tracking-wide mb-4">Preview</p>
            <h2 className="text-4xl md:text-5xl font-medium text-white">
              See it in action
            </h2>
          </div>

          {/* Main Screenshot */}
          <div className="relative mb-8">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
              <Image 
                src={screenshots[activeScreenshot].src}
                alt={screenshots[activeScreenshot].alt}
                width={1400}
                height={875}
                className="w-full h-auto transition-opacity duration-500"
              />
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-3">
            {screenshots.map((screenshot, index) => (
              <button
                key={index}
                onClick={() => setActiveScreenshot(index)}
                className={`px-5 py-2.5 rounded-full text-sm transition-all ${
                  activeScreenshot === index 
                    ? 'bg-white text-black' 
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {screenshot.caption}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Shield Details Section */}
      <section className="py-24 px-6 relative z-10 bg-white/[0.01] border-y border-white/[0.04]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <span className="text-emerald-400 text-xs font-medium tracking-wide">🛡️ ZERO-TRUST SECURITY</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
              Continuum Shield
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              Real, active protection running locally in your browser. Not just an ad blocker, a complete security engine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
              <h3 className="text-white font-medium mb-2">Safe Browsing</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Real local hash-prefix DB (122K+ entries) with 4 live threat feeds (URLhaus, PhishTank, OpenPhish, crypto-miners).
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
              <h3 className="text-white font-medium mb-2">Download Quarantine</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Checks 40+ dangerous extensions, double-extension attacks, and source URL reputation. High-risk files are quarantined automatically.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
              <h3 className="text-white font-medium mb-2">Runtime Hardening</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Injects upgrade-insecure-requests CSP, strips leaky headers, and blocks crypto-miner WebSocket connections at the network layer.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
              <h3 className="text-white font-medium mb-2">Fingerprint Resistance</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Canvas/AudioContext noise, WebGL/userAgent spoofing, WebRTC IP leak protection, font enumeration noise, and metrics normalization.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
              <h3 className="text-white font-medium mb-2">Behavioral Monitor</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Actively detects excessive WebAssembly instantiation (&gt;3 in 10s) and Worker spawns (&gt;4) to block hidden crypto-mining.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
              <h3 className="text-white font-medium mb-2">Live Dashboard</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Stats & config persisted to disk. Toggles work end-to-end, and the security dashboard reads live data every 5 seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agent Video Section */}
      <section id="ai-agent" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <span className="text-purple-400 text-xs font-medium tracking-wide">✦ NEW IN 2.0</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
              Meet the AI Agent
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              Your second brain inside the browser. Ask questions, summarize pages, fill forms, navigate
              with multi-provider support for OpenAI, Gemini, Claude, and GitHub Models. Bring your own API key.
            </p>
          </div>

          {/* Video Player */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/50 shadow-2xl shadow-purple-500/5">
            {/* Decorative glow behind video */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl -z-10" />
            
            <video
              ref={videoRef}
              className="w-full h-auto"
              poster="/Continuum ai .png"
              playsInline
              controls
              preload="metadata"
              onPlay={() => setIsVideoPlaying(true)}
              onPause={() => setIsVideoPlaying(false)}
            >
              <source src="/watch Continuumaiagent in action.mov" type="video/quicktime" />
              <source src="/watch Continuumaiagent in action.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play overlay - shown when video is not playing */}
            {!isVideoPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer transition-all hover:bg-black/20"
                onClick={handleVideoPlay}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110">
                    <PlayIcon />
                  </div>
                  <span className="text-white/70 text-sm font-medium">Watch AI Agent in Action</span>
                </div>
              </div>
            )}
          </div>

          {/* AI Agent Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
              <div className="text-2xl mb-3">💬</div>
              <h3 className="text-white font-medium mb-2">Chat Mode</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Summarize pages, explain content, and ask questions read-only and safe.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="text-white font-medium mb-2">Agent Mode</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Fill forms, click buttons, and navigate pages with granular permissions and human approval.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
              <div className="text-2xl mb-3">🔐</div>
              <h3 className="text-white font-medium mb-2">BYOK Privacy</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Bring Your Own Key. Works with OpenAI, Gemini, Claude, or GitHub Models. Your keys, your data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chrome vs Continuum Comparison */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-white/40 text-sm uppercase tracking-wide mb-4">Comparison</p>
            <h2 className="text-4xl md:text-5xl font-medium text-white">
              Why switch?
            </h2>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/[0.06]">
            {/* Table Header */}
            <div className="grid grid-cols-2 bg-white/[0.04]">
              <div className="p-4 text-center border-r border-white/[0.06]">
                <span className="text-white/40 text-sm font-medium">Chrome</span>
              </div>
              <div className="p-4 text-center">
                <span className="text-white text-sm font-medium">Continuum ✦</span>
              </div>
            </div>
            {/* Table Rows */}
            {differentiators.map((row, index) => (
              <div key={index} className={`grid grid-cols-2 ${index < differentiators.length - 1 ? 'border-b border-white/[0.04]' : ''}`}>
                <div className="p-4 text-center border-r border-white/[0.06]">
                  <span className="text-white/30 text-sm">{row.chrome}</span>
                </div>
                <div className="p-4 text-center">
                  <span className="text-white/70 text-sm">{row.continuum}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-white/40 text-sm uppercase tracking-wide mb-4">About</p>
            <h2 className="text-4xl md:text-5xl font-medium text-white">
              The story behind Continuum
            </h2>
          </div>
          
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Hi, I&apos;m <span className="text-white font-medium">Mahesh Rao</span>. I built Continuum because I was frustrated with how browsers treat our work as disposable tabs rather than ongoing projects.
            </p>
            <p className="text-white/50 text-base leading-relaxed mb-6">
              Every time I closed my browser, I lost context. Scroll positions, tab arrangements, the mental state of what I was researching all gone. I wanted a browser that understood that work is continuous, not session-based.
            </p>
            <p className="text-white/50 text-base leading-relaxed">
              Continuum is my answer: a browser designed around how we actually work. It preserves everything so you can pick up exactly where you left off, whether that&apos;s five minutes or five days later.
            </p>
          </div>
        </div>
      </section>

      {/* Download Section - Two columns */}
      <section id="download" className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/40 text-sm uppercase tracking-wide mb-4">Download</p>
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
            Try Continuum today
          </h2>
          <p className="text-white/50 text-lg mb-12">
            Free during beta. Available for macOS and Windows.
          </p>
          
          {/* Platform Downloads */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
            {/* macOS */}
            <div className={`p-6 rounded-2xl bg-white/[0.02] border transition-all ${
              detectedOS === 'macos' 
                ? 'border-white/20 ring-1 ring-white/10' 
                : 'border-white/[0.04]'
            }`}>
              <div className="flex items-center justify-center gap-2 mb-4">
                <AppleIcon />
                <span className="text-white font-medium">macOS</span>
                {detectedOS === 'macos' && (
                  <span className="text-xs text-white/40 bg-white/10 px-2 py-0.5 rounded-full">Detected</span>
                )}
              </div>
              <div className="space-y-3">
                <a
                  href="https://github.com/Maheshroy50/Continuum-Browser/releases/download/v2.0.0/Continuum-2.0.0.dmg"
                  className={`flex items-center justify-center gap-2 w-full px-4 py-3 rounded-full font-medium text-sm transition-colors ${
                    detectedOS === 'macos'
                      ? 'bg-white text-black hover:bg-white/90'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <DownloadIcon />
                  Download (.dmg)
                </a>
              </div>
              <p className="text-white/30 text-xs mt-3">Universal (Intel & Apple Silicon)</p>
            </div>

            {/* Windows */}
            <div className={`p-6 rounded-2xl bg-white/[0.02] border transition-all ${
              detectedOS === 'windows' 
                ? 'border-white/20 ring-1 ring-white/10' 
                : 'border-white/[0.04]'
            }`}>
              <div className="flex items-center justify-center gap-2 mb-4">
                <WindowsIcon />
                <span className="text-white font-medium">Windows</span>
                {detectedOS === 'windows' && (
                  <span className="text-xs text-white/40 bg-white/10 px-2 py-0.5 rounded-full">Detected</span>
                )}
              </div>
              <div className="space-y-3">
                <a
                  href="https://github.com/Maheshroy50/Continuum-Browser/releases/download/v2.0.0/Continuum.Setup.2.0.0.exe"
                  className={`flex items-center justify-center gap-2 w-full px-4 py-3 rounded-full font-medium text-sm transition-colors ${
                    detectedOS === 'windows'
                      ? 'bg-white text-black hover:bg-white/90'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <DownloadIcon />
                  Download (.exe)
                </a>
              </div>
              <p className="text-white/30 text-xs mt-3">Windows 10 and later</p>
            </div>
          </div>

          {/* Security Note */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04] text-left max-w-lg mx-auto">
            <p className="text-white/70 text-sm mb-3 font-medium">First launch on macOS?</p>
            <p className="text-white/40 text-sm leading-relaxed">
              Since Continuum isn&apos;t notarized yet, go to{" "}
              <span className="text-white/60">System Settings → Privacy & Security</span>{" "}
              and click &quot;Open Anyway&quot; after the first launch attempt.
            </p>
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="py-12 px-6 border-t border-white/[0.04] relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg overflow-hidden">
                <Image 
                  src="/icon.png" 
                  alt="Continuum" 
                  width={28} 
                  height={28}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-white/80 text-sm">Continuum</span>
              <span className="text-white/30 text-xs">v2.0.0</span>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-white/40">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#ai-agent" className="hover:text-white transition-colors">AI Agent</a>
              <a href="#download" className="hover:text-white transition-colors">Download</a>
            </div>
            
            <p className="text-white/30 text-sm">
              Made by Mahesh Rao
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
