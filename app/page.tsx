"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-green-50 to-white">
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .animate-slide-down {
          animation: slideDown 0.5s ease-out;
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-pulse-gentle {
          animation: pulse 2s ease-in-out infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .gradient-text {
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(5, 150, 105, 0.15);
        }
      `}</style>

      {/* Animated Top Bar */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2.5 text-xs">
          <div className="flex justify-between items-center">
            <div className="flex gap-6">
              <a href="#" className="hover:text-green-400 transition duration-300">
                ศูนย์ข้อมูล
              </a>
              <span className="text-gray-500">|</span>
              <a href="#" className="hover:text-green-400 transition duration-300">
                ขอข้อมูล
              </a>
              <span className="text-gray-500">|</span>
              <a href="#" className="hover:text-green-400 transition duration-300">
                ติดต่อเรา
              </a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-green-400 transition duration-300">
                📘 Facebook
              </a>
              <a href="#" className="hover:text-green-400 transition duration-300">
                📷 Instagram
              </a>
              <a href="#" className="hover:text-green-400 transition duration-300">
                ▶️ YouTube
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-2xl backdrop-blur-md bg-opacity-95"
            : "bg-white shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 cursor-pointer group">
              <div className="relative text-4xl group-hover:animate-float">
                🌲
              </div>
              <div>
                <div className="text-xl font-black gradient-text">
                  สำนักงานป่าไม้ไทย
                </div>
                <div className="text-xs text-gray-500 font-semibold">
                  ทรัพยากรธรรมชาติและสิ่งแวดล้อม
                </div>
              </div>
            </div>
            <div className="hidden lg:flex gap-1">
              {["หน้าแรก", "ข่าวสาร", "ทรัพยากร", "รายงาน"].map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="px-4 py-2.5 text-gray-700 font-semibold hover:bg-green-100 hover:text-green-700 rounded-lg transition duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Premium */}
      <section className="relative overflow-hidden py-16">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-green-700 to-emerald-700">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20" style={{ animationDelay: "2s" }} className="animate-float"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              ป่าไม้และทรัพยากร<br />
              <span className="text-green-200">ธรรมชาติของประเทศไทย</span>
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mb-8 leading-relaxed font-medium">
              สำนักงานป่าไม้ตั้งใจปกป้องและจัดการทรัพยากรป่าไม้ให้เป็นประโยชน์อย่างยั่งยืน
              เพื่ออุตสาหกรรมและอนุชนรุ่นหน้า
            </p>
            <div className="flex gap-4">
              <button onClick={() => alert('ยินดีต้อนรับสู่หน้าศึกษาเพิ่มเติม!')} className="px-8 py-3.5 bg-white text-green-700 rounded-full font-bold hover:bg-green-50 transition duration-300 shadow-lg hover:shadow-2xl cursor-pointer">
                ศึกษาเพิ่มเติม
              </button>
              <a href="/components" className="px-8 py-3.5 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-green-700 transition duration-300">
                ดูส่วนประกอบ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Alert - Premium Style */}
      <section className="max-w-7xl mx-auto px-4 -mt-8 relative z-20 mb-12">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-1"></div>
          <div className="p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="text-5xl animate-pulse-gentle">📢</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-yellow-700 mb-3">
                  ประกาศสำคัญ
                </h3>
                <p className="text-gray-700 font-medium text-lg">
                  🌍 <span className="font-bold">วันป่าไม้โลก</span> วันที่ 21 มีนาคม 2569
                  - ร่วมกิจกรรมอนุรักษ์ป่าไม้ทั่วประเทศ
                </p>
                <button onClick={() => alert('ดูรายละเอียดเกี่ยวกับวันป่าไม้โลก!')} className="mt-4 text-yellow-600 font-bold hover:text-yellow-700 text-sm cursor-pointer">
                  อ่านรายละเอียดเพิ่มเติม →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Premium Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* News Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded"></div>
              <h2 className="text-3xl font-black text-gray-900">ข่าวสาร &amp; กิจกรรม</h2>
            </div>
            <div className="space-y-5">
              {[
                {
                  date: "3 เมษายน 2569",
                  icon: "🌱",
                  title: "โครงการปลูกป่า 100,000 ต้นสำเร็จ",
                  desc: "สำเร็จการปลูกป่าในพื้นที่ 5 จังหวัดภาคเหนือ ครอบคลุมพื้นที่กว่า 5,000 ไร่",
                  color: "border-green-500",
                  image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=200&fit=crop",
                },
                {
                  date: "1 เมษายน 2569",
                  icon: "🦁",
                  title: "พบสัตว์ป่าหายากสมบูรณ์",
                  desc: "ค้นพบหลากหลายชีวิตในเขตรักษาพันธุ์สัตว์ป่า เพิ่มเติมจากการศึกษา",
                  color: "border-amber-500",
                  image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=200&fit=crop&q=80",
                },
                {
                  date: "25 มีนาคม 2569",
                  icon: "📚",
                  title: "อบรมเชิงปฏิบัติการ: การดูแลป่า",
                  desc: "การปลูกทึกทักเรียนเกี่ยวกับการจัดการป่าไม้อย่างยั่งยืนสำหรับเจ้าหน้าที่",
                  color: "border-blue-500",
                  image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=200&fit=crop&q=70",
                },
              ].map((news, idx) => (
                <div
                  key={idx}
                  className="card-hover group bg-white rounded-xl overflow-hidden shadow-lg"
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full sm:w-32 h-32 object-cover rounded-lg group-hover:scale-110 transition duration-300"
                    />
                    <div className="flex-1 p-4">
                      <div className="text-sm font-bold text-green-600 uppercase tracking-wider">
                        {news.date}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-green-700 transition">
                        {news.title}
                      </h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">
                        {news.desc}
                      </p>
                      <a href="#" className="text-green-600 font-bold text-sm mt-3 inline-block group-hover:gap-2">
                        อ่านต่อ →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - Info Boxes */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-1 w-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded"></div>
                <h3 className="text-2xl font-black text-gray-900">ตัวเลขสำคัญ</h3>
              </div>
              <div className="space-y-4">
                {[
                  { icon: "📊", title: "สถิติป่าไม้", value: "31.6M ไร่", color: "from-blue-500 to-blue-600" },
                  { icon: "🌳", title: "ประเภทของป่า", value: "6 ประเภท", color: "from-green-500 to-emerald-600" },
                  { icon: "🦁", title: "สัตว์ป่า", value: "50,000+ ชนิด", color: "from-amber-500 to-orange-600" },
                  { icon: "🌍", title: "แห่งอนุรักษ์", value: "200+ แห่ง", color: "from-cyan-500 to-blue-600" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="card-hover group bg-gradient-to-br rounded-xl p-5 shadow-lg text-white cursor-pointer"
                    style={{
                      background: `linear-gradient(135deg, ${stat.color.split(" ")[1]}, ${stat.color.split(" ")[3]})`,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-3xl group-hover:scale-125 transition duration-300">
                        {stat.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold opacity-90">
                          {stat.title}
                        </div>
                        <div className="text-2xl font-black">
                          {stat.value}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendar Box */}
            <div className="card-hover bg-white rounded-xl p-6 shadow-lg border border-green-200">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-2xl">📅</span>
                <h4 className="font-bold text-gray-900">วันสิ่งแวดล้อม</h4>
              </div>
              <div className="space-y-3">
                {[
                  { date: "21 มี.ค", event: "วันป่าไม้โลก" },
                  { date: "22 มี.ค", event: "วันน้ำโลก" },
                  { date: "3 มี.ค", event: "วันสัตว์ป่า" },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center pb-3 border-b border-gray-200 last:border-0">
                    <span className="font-bold text-green-700">{item.date}</span>
                    <span className="text-gray-600 font-medium">{item.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources - Beautiful Grid */}
      <section className="relative py-20 bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 border-y-2 border-green-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-1 w-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded"></div>
            <h2 className="text-4xl font-black text-gray-900">
              ประเภทของป่าไม้ไทย
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "ป่าดิบชื้น", icon: "🌿", desc: "ความชื้นสูง", color: "from-green-400 to-green-600", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop" },
              { name: "ป่าดิบแล้ง", icon: "🍂", desc: "ผลัดใบตามฤดู", color: "from-yellow-400 to-orange-600", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop&q=80" },
              { name: "ป่าสน", icon: "🌲", desc: "ไม้สนเป็นหลัก", color: "from-blue-400 to-blue-600", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop&q=70" },
              { name: "ป่าบาท", icon: "🌊", desc: "ใกล้ชายทะเล", color: "from-cyan-400 to-cyan-600", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop&q=60" },
              { name: "ป่าเต็งรัง", icon: "🌾", desc: "หญ้าสูง", color: "from-lime-400 to-lime-600", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop&q=50" },
              { name: "ป่าชายเลน", icon: "🏝️", desc: "ป้องกันคลื่น", color: "from-teal-400 to-teal-600", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop&q=40" },
            ].map((curriculum, idx) => (
              <div
                key={idx}
                className="card-hover group bg-white rounded-xl overflow-hidden shadow-lg"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className="relative h-48 w-full overflow-hidden bg-gray-200"
                >
                  <img 
                    src={curriculum.image} 
                    alt={curriculum.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${curriculum.color} opacity-40`}></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-gray-900 mb-2">
                    {curriculum.name}
                  </h3>
                  <p className="text-gray-600 font-medium mb-4">
                    {curriculum.desc}
                  </p>
                  <button onClick={() => alert(`เรียนรู้เพิ่มเติมเกี่ยว ${curriculum.name}`)} className="w-full px-4 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-bold hover:shadow-lg transition duration-300 cursor-pointer">
                    เรียนรู้เพิ่มเติม
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports Section - Premium */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-1 w-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded"></div>
          <h2 className="text-4xl font-black text-gray-900">เอกสารและรายงาน</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: "📄", title: "รายงานสถานะป่าไม้", year: "2568", color: "from-purple-500 to-pink-500", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop" },
            { icon: "📊", title: "สถิติทรัพยากรป่าไม้", year: "2568", color: "from-blue-500 to-cyan-500", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop&q=80" },
            { icon: "📋", title: "แนวทางการจัดการป่า", year: "2568", color: "from-green-500 to-emerald-500", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop&q=70" },
            { icon: "🔬", title: "ความหลากหลายทางชีวภาพ", year: "2568", color: "from-orange-500 to-red-500", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop&q=60" },
          ].map((report, idx) => (
            <div
              key={idx}
              className="card-hover group bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div
                className="relative h-48 w-full overflow-hidden bg-gray-200"
              >
                <img 
                  src={report.image} 
                  alt={report.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${report.color} opacity-30`}></div>
                <div className="absolute inset-0 flex items-center justify-center text-5xl group-hover:scale-110 transition duration-300">
                  {report.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {report.title}
                </h3>
                <p className="text-gray-600 font-semibold mb-6">
                  ปีการศึกษา {report.year}
                </p>
                <button onClick={() => alert(`ดาวน์โหลด: ${report.title}`)} className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-bold hover:shadow-xl transition duration-300 cursor-pointer">
                  ดาวน์โหลด PDF →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics Bar - Premium */}
      <section className="relative py-16 bg-gradient-to-r from-green-800 via-emerald-700 to-teal-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "31.6M", label: "ไร่ป่าไม้", icon: "🌲" },
              { value: "25.3%", label: "ของพื้นที่", icon: "📊" },
              { value: "6", label: "ประเภทป่า", icon: "🗂️" },
              { value: "200+", label: "แห่งอนุรักษ์", icon: "🏞️" },
            ].map((stat, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="text-5xl mb-3 group-hover:scale-125 transition duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black mb-2">
                  {stat.value}
                </div>
                <div className="text-green-200 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {[
              {
                title: "เกี่ยวกับเรา",
                links: ["ประวัติ", "อำนาจหน้าที่", "บุคลากร"],
              },
              {
                title: "บริการ",
                links: ["ขอใบอนุญาต", "แจ้งการละเมิด", "ตั้งคำถาม"],
              },
              {
                title: "ความรู้",
                links: ["ห้องสมุด", "ล้อจรแนะนำ", "วิดีโอศึกษา"],
              },
              {
                title: "ติดต่อเรา",
                links: [
                  "📍 กรุงเทพฯ 10400",
                  "📞 0-2265-6689",
                  "📧 info@forest.go.th",
                ],
              },
            ].map((section, idx) => (
              <div key={idx}>
                <h4 className="font-black text-white text-lg mb-5">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, lidx) => (
                    <li key={lidx}>
                      <a
                        href="#"
                        className="hover:text-green-400 transition duration-300 font-medium"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
              <p className="font-semibold">
                © 2026 สำนักงานป่าไม้ไทย • สงวนลิขสิทธิ์ทั้งหมด
              </p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-green-400 transition duration-300">
                  นโยบายความเป็นส่วนตัว
                </a>
                <a href="#" className="hover:text-green-400 transition duration-300">
                  ข้อมูลใช้งาน
                </a>
                <a href="#" className="hover:text-green-400 transition duration-300">
                  แผนผังเว็บไซต์
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
