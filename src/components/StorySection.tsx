import { useEffect, useRef, useState } from "react";

export default function StorySection() {
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
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="فروشگاه مارلو"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent" />
              <div className="absolute bottom-6 right-6 left-6">
                <div className="glass-card rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl">
                      🚀
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">از سال ۱۴۰۱</p>
                      <p className="text-gray-500 text-sm">شروع به فعالیت کردیم</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-100 rounded-2xl -z-10 rotate-12" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-100 rounded-xl -z-10 -rotate-6" />

            {/* Floating Badge */}
            <div className="absolute -top-4 left-8 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-2 border border-indigo-50">
              <span className="text-2xl">🏆</span>
              <div>
                <p className="text-xs text-gray-500">بهترین فروشگاه</p>
                <p className="font-bold text-gray-900 text-sm">سال ۱۴۰۳</p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div
            className={`transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}`}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-6">
              داستان ما
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
              چطور{" "}
              <span className="gradient-text">مارلو شاپ</span>{" "}
              شکل گرفت؟
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                مارلو شاپ با یک رویا آغاز شد؛ رویایی برای ایجاد یک تجربه خرید آنلاین که واقعاً به مشتری اهمیت بدهد. در سال ۱۴۰۱، تیمی از متخصصان جوان و پرانرژی دور هم جمع شدند تا این رویا را به واقعیت تبدیل کنند.
              </p>
              <p>
                از همان روز اول، اصل اساسی ما این بود: <strong className="text-gray-900">کیفیت هرگز به خطر نمی‌افتد.</strong> هر محصولی که در مارلو می‌فروشیم، با دقت بررسی و از معتبرترین تامین‌کنندگان تهیه می‌شود.
              </p>
              <p>
                امروز با افتخار می‌گوییم که هزاران خانواده ایرانی به مارلو اعتماد کرده‌اند و این اعتماد بزرگترین دستاورد ماست.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://marloo.shop/products"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:scale-105 transition-all duration-200 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                مشاهده محصولات
              </a>
              <button className="px-8 py-4 rounded-2xl border-2 border-indigo-200 text-indigo-700 font-semibold hover:bg-indigo-50 transition-all duration-200">
                تماس با ما
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
