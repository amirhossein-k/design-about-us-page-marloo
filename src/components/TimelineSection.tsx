import { useEffect, useRef, useState } from "react";

const milestones = [
  {
    year: "۱۴۰۱",
    title: "تأسیس مارلو شاپ",
    desc: "با یک تیم کوچک و ایده‌ای بزرگ، مارلو شاپ رسماً فعالیت خود را آغاز کرد. اولین محصولات وارد فروشگاه شدند.",
    icon: "🌱",
    color: "from-emerald-400 to-teal-500",
  },
  {
    year: "۱۴۰۱",
    title: "اولین ۱۰۰۰ مشتری",
    desc: "در کمتر از ۶ ماه، به هزار مشتری راضی رسیدیم. این موفقیت به ما انرژی داد تا بزرگ‌تر فکر کنیم.",
    icon: "🎉",
    color: "from-violet-400 to-purple-500",
  },
  {
    year: "۱۴۰۲",
    title: "گسترش دسته‌بندی‌ها",
    desc: "تعداد محصولات به بیش از ۲۰۰۰ آیتم رسید. دسته‌بندی‌های جدید اضافه شد و تجربه خرید بهتر شد.",
    icon: "📦",
    color: "from-blue-400 to-indigo-500",
  },
  {
    year: "۱۴۰۲",
    title: "راه‌اندازی اپلیکیشن",
    desc: "اپلیکیشن موبایل مارلو شاپ راه‌اندازی شد و امکان خرید آسان‌تر برای همه فراهم گردید.",
    icon: "📱",
    color: "from-pink-400 to-rose-500",
  },
  {
    year: "۱۴۰۳",
    title: "۱۵ هزار مشتری وفادار",
    desc: "با اعتماد بیش از ۱۵ هزار مشتری راضی، مارلو به یکی از فروشگاه‌های معتبر آنلاین ایران تبدیل شد.",
    icon: "⭐",
    color: "from-amber-400 to-orange-500",
  },
  {
    year: "۱۴۰۴",
    title: "آینده‌ای روشن‌تر",
    desc: "با ارائه خدمات بهتر، محصولات بیشتر و تجربه‌ای شگفت‌انگیزتر، آینده مارلو از همیشه درخشان‌تر است.",
    icon: "🚀",
    color: "from-indigo-400 to-violet-500",
  },
];

export default function TimelineSection() {
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
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-4">
            مسیر رشد
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            سفر ما تا اینجا
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            هر مرحله از رشد مارلو، داستانی از تلاش، اعتماد و خلاقیت است
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Timeline Line */}
          <div className="absolute right-8 sm:right-1/2 sm:translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-200" />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <div
                key={i}
                className={`relative flex items-start gap-8 transition-all duration-700 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                } flex-row ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? "sm:text-right" : "sm:text-left"} pr-16 sm:pr-0`}>
                  <div
                    className={`card-hover inline-block bg-white rounded-2xl p-6 shadow-lg border border-gray-100 max-w-sm ${
                      i % 2 === 0 ? "sm:mr-0 sm:ml-auto" : "sm:mr-auto sm:ml-0"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center text-xl shadow-md`}>
                        {m.icon}
                      </div>
                      <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold">
                        {m.year}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{m.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute right-5 sm:right-1/2 sm:translate-x-1/2 top-6 timeline-dot" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
