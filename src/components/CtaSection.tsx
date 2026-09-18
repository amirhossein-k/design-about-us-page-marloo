import { useEffect, useRef, useState } from "react";

export default function CtaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Background effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full translate-y-40 -translate-x-40" />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          <div className="relative z-10 p-10 sm:p-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white/90 text-sm font-medium mb-8">
              <span className="text-lg">🛍️</span>
              همین الان خرید کنید
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              آماده‌اید تجربه خریدی{" "}
              <br className="hidden sm:block" />
              <span className="text-yellow-300">متفاوت</span> داشته باشید؟
            </h2>

            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              همین الان وارد فروشگاه مارلو شوید و از بین هزاران محصول باکیفیت، محصول مورد علاقه‌تان را با بهترین قیمت پیدا کنید.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://marloo.shop/products"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-4 rounded-2xl bg-white text-indigo-700 font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                ورود به فروشگاه
                <span className="group-hover:translate-x-1 transition-transform duration-200">←</span>
              </a>

              <a
                href="mailto:info@marloo.shop"
                className="px-10 py-4 rounded-2xl bg-white/10 border border-white/30 text-white font-semibold text-lg hover:bg-white/20 transition-all duration-200 flex items-center gap-3 backdrop-blur-sm"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                تماس با ما
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-white/20">
              {[
                { icon: "🔒", text: "پرداخت امن" },
                { icon: "🚚", text: "ارسال سریع" },
                { icon: "↩️", text: "ضمانت بازگشت" },
                { icon: "📞", text: "پشتیبانی ۲۴/۷" },
              ].map((badge) => (
                <div key={badge.text} className="flex items-center gap-2 text-white/70">
                  <span className="text-xl">{badge.icon}</span>
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
