import { useEffect, useState } from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow delay-600" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-8 h-8 bg-yellow-400/60 rounded-full blur-sm animate-float" />
      <div className="absolute bottom-32 left-16 w-6 h-6 bg-pink-400/60 rounded-full blur-sm animate-float delay-300" />
      <div className="absolute top-1/2 right-16 w-4 h-4 bg-indigo-300/80 rounded-full animate-float delay-500" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            فروشگاه آنلاین مارلو
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
            داستان ما،{" "}
            <span className="relative inline-block">
              <span className="gradient-text">مارلو شاپ</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M0 4 C50 0, 100 8, 150 4 S200 0, 200 4"
                  stroke="url(#wave)"
                  strokeWidth="3"
                  fill="none"
                />
                <defs>
                  <linearGradient id="wave" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#818cf8" />
                    <stop offset="1" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
            از یک ایده ساده تا یک فروشگاه آنلاین معتمد. با ما بیشتر آشنا شوید و بدانید چرا هزاران نفر برای خرید به مارلو اعتماد می‌کنند.
          </p>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-2 text-white/50">
            <span className="text-xs tracking-widest uppercase">بیشتر بدانید</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100 L0 60 Q360 0 720 40 Q1080 80 1440 30 L1440 100 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
