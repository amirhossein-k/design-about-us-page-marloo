import { useEffect, useRef, useState } from "react";

const values = [
  {
    icon: "💎",
    title: "کیفیت بی‌تخفیف",
    desc: "هر محصول پیش از ورود به فروشگاه، توسط تیم کنترل کیفیت ما بررسی می‌شود. ما هرگز در کیفیت کوتاه نمی‌آییم.",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    icon: "⚡",
    title: "ارسال فوری",
    desc: "سفارش‌های ثبت‌شده تا پایان وقت اداری همان روز آماده ارسال می‌شوند. پیک سریع به سراسر کشور.",
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    icon: "🔒",
    title: "خرید مطمئن",
    desc: "پرداخت امن با درگاه‌های معتبر بانکی. اطلاعات شخصی شما کاملاً محرمانه و محفوظ است.",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: "🎯",
    title: "قیمت منصفانه",
    desc: "ما مستقیماً از تولیدکنندگان و واردکنندگان تهیه می‌کنیم تا بهترین قیمت را به شما ارائه دهیم.",
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: "🤝",
    title: "پشتیبانی ۲۴ ساعته",
    desc: "تیم پشتیبانی ما همیشه آماده پاسخگویی به سوالات و رفع مشکلات شماست. هیچ‌وقت تنها نیستید.",
    color: "from-pink-500 to-rose-600",
    bg: "bg-pink-50",
    border: "border-pink-100",
  },
  {
    icon: "♻️",
    title: "بسته‌بندی سبز",
    desc: "به محیط زیست اهمیت می‌دهیم. بسته‌بندی‌های ما از مواد بازیافتی و دوستدار طبیعت تهیه می‌شوند.",
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
    border: "border-green-100",
  },
];

export default function ValuesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
            ارزش‌های ما
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            چرا مارلو را انتخاب کنیم؟
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            اصول و ارزش‌هایی که در هر قدم راهنمای ما هستند
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`card-hover rounded-3xl p-8 border-2 ${v.bg} ${v.border} transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center text-3xl shadow-lg mb-6`}>
                {v.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
              <p className="text-gray-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
