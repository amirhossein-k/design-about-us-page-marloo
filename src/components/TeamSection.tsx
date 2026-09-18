import { useEffect, useRef, useState } from "react";

const team = [
  {
    name: "علی رضایی",
    role: "مدیرعامل و بنیانگذار",
    emoji: "👨‍💼",
    bio: "با بیش از ۸ سال تجربه در حوزه تجارت الکترونیک، علی رویای مارلو را از یک ایده به واقعیت تبدیل کرد.",
    color: "from-indigo-500 to-purple-600",
    skills: ["استراتژی", "رهبری", "نوآوری"],
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "سارا محمدی",
    role: "مدیر محصول",
    emoji: "👩‍🎨",
    bio: "سارا با دید خلاقانه خود، تجربه خرید در مارلو را به یک سفر لذت‌بخش تبدیل کرده است.",
    color: "from-pink-500 to-rose-600",
    skills: ["طراحی UX", "مدیریت محصول", "تحلیل داده"],
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "محمد کریمی",
    role: "مدیر فناوری",
    emoji: "👨‍💻",
    bio: "محمد با تخصص در توسعه وب و زیرساخت‌های ابری، پشتوانه فنی مارلو را می‌سازد.",
    color: "from-emerald-500 to-teal-600",
    skills: ["توسعه نرم‌افزار", "معماری سیستم", "امنیت"],
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "نیلوفر احمدی",
    role: "مدیر خدمات مشتری",
    emoji: "👩‍💼",
    bio: "نیلوفر با صبر و دقت، رضایت هر مشتری را به مهم‌ترین هدف تیم پشتیبانی تبدیل کرده است.",
    color: "from-amber-500 to-orange-600",
    skills: ["ارتباط با مشتری", "حل مسئله", "مدیریت تیم"],
    social: { linkedin: "#", twitter: "#" },
  },
];

export default function TeamSection() {
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
    <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-semibold mb-4 border border-white/10">
            تیم ما
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            افرادی که مارلو را می‌سازند
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            تیمی از متخصصان پرشور که هر روز برای بهترین تجربه خرید شما تلاش می‌کنند
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`team-card group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden transition-all duration-700 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Top Gradient Bar */}
              <div className={`h-2 bg-gradient-to-r ${member.color}`} />

              <div className="p-6">
                {/* Avatar */}
                <div className="relative mb-5">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-4xl shadow-xl mx-auto`}>
                    {member.emoji}
                  </div>
                </div>

                {/* Info */}
                <div className="text-center mb-5">
                  <h3 className="font-bold text-white text-lg mb-1">{member.name}</h3>
                  <p className="text-white/50 text-sm">{member.role}</p>
                </div>

                {/* Bio */}
                <p className="text-white/60 text-sm leading-relaxed text-center mb-5">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-full bg-white/10 text-white/70 text-xs font-medium border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social */}
                <div className="flex justify-center gap-3 mt-5 pt-5 border-t border-white/10">
                  <a
                    href={member.social.linkedin}
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white/60 hover:text-white"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white/60 hover:text-white"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
