import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
  color: string;
}

const stats: Stat[] = [
  { value: 15000, suffix: "+", label: "مشتری راضی", icon: "😊", color: "from-violet-500 to-purple-600" },
  { value: 5000, suffix: "+", label: "محصول متنوع", icon: "🛍️", color: "from-indigo-500 to-blue-600" },
  { value: 98, suffix: "%", label: "رضایت مشتریان", icon: "⭐", color: "from-pink-500 to-rose-600" },
  { value: 3, suffix: " سال", label: "تجربه فعالیت", icon: "🏆", color: "from-amber-500 to-orange-600" },
];

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

function StatCard({ stat, delay, start }: { stat: Stat; delay: number; start: boolean }) {
  const count = useCountUp(stat.value, 2000, start);

  return (
    <div
      className="card-hover rounded-3xl overflow-hidden shadow-xl"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`bg-gradient-to-br ${stat.color} p-8 text-white text-center relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full translate-y-12 -translate-x-12" />
        <div className="relative z-10">
          <div className="text-5xl mb-3">{stat.icon}</div>
          <div className="text-5xl font-black mb-2">
            {count.toLocaleString("fa-IR")}
            <span className="text-3xl">{stat.suffix}</span>
          </div>
          <div className="text-white/80 font-medium text-lg">{stat.label}</div>
        </div>
      </div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-4">
            ارقام واقعی
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            مارلو در یک نگاه
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            این اعداد نشان‌دهنده اعتماد شما و تلاش تیم ماست
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={i * 100} start={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
