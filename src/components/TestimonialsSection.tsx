import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "فاطمه حسینی",
    city: "تهران",
    rating: 5,
    text: "واقعاً تجربه خریدم از مارلو فوق‌العاده بود. محصولات دقیقاً همان‌طور که توضیح داده شده بود رسید و بسته‌بندی هم خیلی تمیز و مرتب بود. قطعاً دوباره خرید می‌کنم!",
    avatar: "👩‍💼",
    color: "from-pink-400 to-rose-500",
    product: "خرید پوشاک",
  },
  {
    name: "رضا موسوی",
    city: "اصفهان",
    rating: 5,
    text: "قیمت‌ها نسبت به فروشگاه‌های دیگر خیلی منصفانه‌تر بود. ارسال هم سریع بود، همان روز ثبت سفارش، فردا درب خانه‌ام بود. پشتیبانی هم خوب جواب داد.",
    avatar: "👨‍💻",
    color: "from-blue-400 to-indigo-500",
    product: "لوازم الکترونیکی",
  },
  {
    name: "مریم احمدی",
    city: "مشهد",
    rating: 5,
    text: "اول کمی شک داشتم ولی بعد از اولین خرید، مارلو شاپ شد اول لیست فروشگاه‌هام. هم کیفیت عالیه هم پشتیبانی واقعاً مسئول و پاسخگوست.",
    avatar: "👩‍🎨",
    color: "from-emerald-400 to-teal-500",
    product: "لوازم خانگی",
  },
  {
    name: "امیر کرمانی",
    city: "شیراز",
    rating: 5,
    text: "چند بار از مارلو خرید کردم و هر بار راضی بودم. تنوع محصولات هم خوبه. امیدوارم همینقدر استاندارد بمونن.",
    avatar: "👨‍🍳",
    color: "from-amber-400 to-orange-500",
    product: "خوراکی و آجیل",
  },
  {
    name: "زهرا نوری",
    city: "تبریز",
    rating: 5,
    text: "درگاه پرداخت امن و اطمینان‌بخش بود. بسته‌بندی خیلی باکلاس و محیط‌زیستیه. واقعاً حس می‌کنم یه برند معتبر و مسئول دارم.",
    avatar: "👩‍🔬",
    color: "from-violet-400 to-purple-500",
    product: "محصولات آرایشی",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-amber-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
            نظرات مشتریان
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            مشتریان ما چه می‌گویند؟
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            صدای واقعی کسانی که به مارلو اعتماد کرده‌اند
          </p>
        </div>

        {/* Featured Testimonial */}
        <div
          ref={ref}
          className={`max-w-3xl mx-auto mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 sm:p-12 text-white overflow-hidden shadow-2xl shadow-indigo-200">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-24 -translate-x-24" />

            <div className="relative z-10">
              <svg className="w-10 h-10 text-white/30 mb-6" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-2.209 0-4 1.791-4 4v12h12V12c0-2.209-1.791-4-4-4H10zm12 0c-2.209 0-4 1.791-4 4v12h12V12c0-2.209-1.791-4-4-4H22z" />
              </svg>

              <p className="text-xl sm:text-2xl font-medium leading-relaxed mb-8 text-white/90">
                {testimonials[active].text}
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonials[active].color} flex items-center justify-center text-2xl shadow-lg`}>
                    {testimonials[active].avatar}
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">{testimonials[active].name}</p>
                    <p className="text-white/60 text-sm flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      {testimonials[active].city}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <StarRating count={testimonials[active].rating} />
                  <span className="text-white/50 text-xs">{testimonials[active].product}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mb-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 rounded-full ${
                i === active ? "w-8 h-2.5 bg-indigo-600" : "w-2.5 h-2.5 bg-gray-200 hover:bg-indigo-200"
              }`}
            />
          ))}
        </div>

        {/* Mini Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              onClick={() => setActive(i)}
              className={`cursor-pointer rounded-2xl p-4 border-2 transition-all duration-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${
                i === active
                  ? "border-indigo-300 bg-indigo-50 shadow-md shadow-indigo-100"
                  : "border-gray-100 bg-gray-50 hover:border-indigo-100 hover:bg-indigo-50/50"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-base`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-xs">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.city}</p>
                </div>
              </div>
              <StarRating count={t.rating} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
