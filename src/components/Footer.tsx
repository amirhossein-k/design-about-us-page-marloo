export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <span className="font-bold text-xl">مارلو شاپ</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              خرید آسان، سریع و مطمئن. بهترین محصولات با کیفیت عالی و قیمت‌های واقعی.
            </p>
            <div className="flex gap-3">
              {[
                { icon: "📸", label: "اینستاگرام" },
                { icon: "📱", label: "تلگرام" },
                { icon: "🐦", label: "توییتر" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  title={s.label}
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-lg transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">دسترسی سریع</h4>
            <ul className="space-y-3">
              {["خانه", "محصولات", "پیشنهادات ویژه", "جدیدترین‌ها", "تخفیف‌ها"].map((item) => (
                <li key={item}>
                  <a
                    href="https://marloo.shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-indigo-500 group-hover:scale-150 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">پشتیبانی</h4>
            <ul className="space-y-3">
              {["درباره ما", "تماس با ما", "سوالات متداول", "شرایط خرید", "حریم خصوصی"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-purple-500 group-hover:scale-150 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">ارتباط با ما</h4>
            <div className="space-y-4">
              {[
                { icon: "📧", label: "ایمیل", value: "info@marloo.shop" },
                { icon: "📞", label: "تلفن", value: "۰۲۱-۱۲۳۴۵۶۷۸" },
                { icon: "📍", label: "آدرس", value: "تهران، ایران" },
                { icon: "⏰", label: "ساعت کاری", value: "شنبه تا پنج‌شنبه ۹-۱۸" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-3">
                  <span className="text-lg mt-0.5">{c.icon}</span>
                  <div>
                    <p className="text-gray-500 text-xs mb-0.5">{c.label}</p>
                    <p className="text-gray-300 text-sm">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-right">
            © ۱۴۰۴ مارلو شاپ. تمامی حقوق محفوظ است.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-gray-400 text-xs">فروشگاه آنلاین</span>
            </div>
            <a
              href="https://marloo.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors"
            >
              marloo.shop ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
