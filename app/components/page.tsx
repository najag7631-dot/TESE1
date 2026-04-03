"use client";

import { useState } from "react";

export default function UIPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slideDown 0.5s ease-out;
        }
      `}</style>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🎨</div>
              <div>
                <div className="text-xl font-black text-green-700">
                  UI Components
                </div>
                <div className="text-xs text-gray-600">
                  Design System & Component Library
                </div>
              </div>
            </div>
            <a
              href="/"
              className="px-6 py-2 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition"
            >
              ← กลับหน้าแรก
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-r from-green-900 to-emerald-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-black mb-4">UI Components Library</h1>
          <p className="text-xl text-green-100 max-w-2xl">
            ห้องแสดงงานส่วนประกอบการออกแบบและระบบดีไซน์ที่ใช้ในเว็บไซต์สำนักงานป่าไม้ไทย
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Buttons Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-8 bg-green-600 rounded"></div>
            <h2 className="text-4xl font-black text-gray-900">Buttons</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Primary Button",
                code: `<button className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-bold hover:shadow-lg">
  ดำเนินการ
</button>`,
                preview: (
                  <button onClick={() => alert('ดำเนินการเสร็จสิ้น!')} className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-bold hover:shadow-lg transition cursor-pointer">
                    ดำเนินการ
                  </button>
                ),
              },
              {
                name: "Secondary Button",
                code: `<button className="px-8 py-3 border-2 border-green-600 text-green-600 rounded-lg font-bold hover:bg-green-50">
  ยกเลิก
</button>`,
                preview: (
                  <button onClick={() => alert('ยกเลิกการดำเนินการ')} className="px-8 py-3 border-2 border-green-600 text-green-600 rounded-lg font-bold hover:bg-green-50 transition cursor-pointer">
                    ยกเลิก
                  </button>
                ),
              },
              {
                name: "Rounded Button",
                code: `<button className="px-8 py-3 bg-white text-green-600 rounded-full font-bold border-2 border-green-600 hover:bg-green-50">
  ศึกษาเพิ่มเติม
</button>`,
                preview: (
                  <button onClick={() => alert('ศึกษาเพิ่มเติมได้')} className="px-8 py-3 bg-white text-green-600 rounded-full font-bold border-2 border-green-600 hover:bg-green-50 transition cursor-pointer">
                    ศึกษาเพิ่มเติม
                  </button>
                ),
              },
              {
                name: "Large Button",
                code: `<button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-bold text-lg hover:shadow-xl">
  ดำเนินการขนาดใหญ่
</button>`,
                preview: (
                  <button onClick={() => alert('ดำเนินการขนาดใหญ่เสร็จสิ้น!')} className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-bold text-lg hover:shadow-xl transition cursor-pointer">
                    ดำเนินการขนาดใหญ่
                  </button>
                ),
              },
            ].map((button, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {button.name}
                </h3>
                <div className="mb-6 p-6 bg-gray-50 rounded-lg flex items-center justify-center min-h-20">
                  {button.preview}
                </div>
                <div className="relative bg-gray-900 rounded-lg p-4 text-gray-100 text-sm font-mono overflow-x-auto mb-4">
                  <pre>{button.code}</pre>
                  <button
                    onClick={() => copyCode(button.code)}
                    className="absolute top-2 right-2 px-3 py-1 bg-green-600 text-white rounded text-xs"
                  >
                    {copiedCode === button.code ? "✓ Copied" : "Copy"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cards Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-8 bg-green-600 rounded"></div>
            <h2 className="text-4xl font-black text-gray-900">Cards</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "News Card",
                preview: (
                  <div className="p-6 bg-white rounded-xl border-l-4 border-green-500 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                    <div className="text-sm font-bold text-green-600 uppercase">
                      3 เมษายน 2569
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mt-2">
                      โครงการปลูกป่า 100,000 ต้น
                    </h3>
                    <p className="text-gray-600 mt-3">
                      สำเร็จการปลูกป่าในพื้นที่ 5 จังหวัดภาคเหนือ
                    </p>
                  </div>
                ),
              },
              {
                name: "Info Card",
                preview: (
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-5 rounded-xl text-white shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">📊</div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold opacity-90">
                          สถิติป่าไม้
                        </div>
                        <div className="text-2xl font-black">31.6M ไร่</div>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                name: "Resource Card",
                preview: (
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                    <img 
                      src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop"
                      alt="ป่าดิบชื้น"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        ป่าดิบชื้น
                      </h3>
                      <p className="text-gray-600 font-medium mb-4">
                        ความชื้นสูง
                      </p>
                      <button onClick={() => alert('เรียนรู้เพิ่มเติมเกี่ยว ป่าดิบชื้น')} className="w-full px-4 py-2.5 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 cursor-pointer">
                        เรียนรู้เพิ่มเติม
                      </button>
                    </div>
                  </div>
                ),
              },
              {
                name: "Alert Card",
                preview: (
                  <div className="bg-yellow-50 rounded-lg border-l-4 border-yellow-500 p-6">
                    <h3 className="text-lg font-bold text-yellow-800 mb-2">
                      📢 ประกาศสำคัญ
                    </h3>
                    <p className="text-gray-700">
                      วันป่าไม้โลก วันที่ 21 มีนาคม 2569
                    </p>
                  </div>
                ),
              },
            ].map((card, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {card.name}
                </h3>
                {card.preview}
              </div>
            ))}
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-8 bg-green-600 rounded"></div>
            <h2 className="text-4xl font-black text-gray-900">Typography</h2>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg space-y-8">
            <div>
              <p className="text-xs text-gray-600 uppercase font-bold mb-2">
                Heading 1
              </p>
              <h1 className="text-5xl font-black text-gray-900">
                ทรัพยากรป่าไม้ของไทย
              </h1>
            </div>
            <div>
              <p className="text-xs text-gray-600 uppercase font-bold mb-2">
                Heading 2
              </p>
              <h2 className="text-4xl font-black text-gray-900">
                ข่าวสาร &amp; กิจกรรม
              </h2>
            </div>
            <div>
              <p className="text-xs text-gray-600 uppercase font-bold mb-2">
                Heading 3
              </p>
              <h3 className="text-2xl font-bold text-gray-900">
                ประเภทของป่าไม้
              </h3>
            </div>
            <div>
              <p className="text-xs text-gray-600 uppercase font-bold mb-2">
                Body Text
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                ป่าไม้เป็นสมบัติที่มีค่ายิ่งใหญ่ของประเทศไทย
                เป็นแหล่งทรัพยากรธรรมชาติและสิ่งแวดล้อมที่สำคัญต่อการอยู่รอดของมนุษย์
              </p>
            </div>
          </div>
        </section>

        {/* Colors Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-8 bg-green-600 rounded"></div>
            <h2 className="text-4xl font-black text-gray-900">Color Palette</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Primary Green", color: "bg-green-600", hex: "#16a34a" },
              { name: "Emerald", color: "bg-emerald-600", hex: "#059669" },
              { name: "Teal", color: "bg-teal-600", hex: "#0d9488" },
              { name: "Blue", color: "bg-blue-600", hex: "#2563eb" },
              { name: "Yellow", color: "bg-yellow-500", hex: "#eab308" },
              { name: "Gray", color: "bg-gray-600", hex: "#4b5563" },
            ].map((color, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg">
                <div className={`${color.color} rounded-lg h-32 mb-4`}></div>
                <h3 className="font-bold text-gray-900">{color.name}</h3>
                <p className="text-gray-500 text-sm">{color.hex}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Icons Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-8 bg-green-600 rounded"></div>
            <h2 className="text-4xl font-black text-gray-900">Icons & Emoji</h2>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
              {[
                "🌲",
                "🌿",
                "🍂",
                "🌊",
                "🌾",
                "🏝️",
                "🦁",
                "📊",
                "📢",
                "📄",
                "📋",
                "🔬",
                "📍",
                "📞",
                "📧",
                "✅",
              ].map((icon, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center text-5xl hover:scale-110 transition duration-300 cursor-pointer"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shadows & Effects */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-8 bg-green-600 rounded"></div>
            <h2 className="text-4xl font-black text-gray-900">Shadows & Effects</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Soft Shadow",
                class: "shadow-lg",
                example: (
                  <div className="bg-white p-6 rounded-lg shadow-lg h-32 flex items-center justify-center">
                    <p className="font-bold text-gray-600">shadow-lg</p>
                  </div>
                ),
              },
              {
                name: "Medium Shadow",
                class: "shadow-xl",
                example: (
                  <div className="bg-white p-6 rounded-lg shadow-xl h-32 flex items-center justify-center">
                    <p className="font-bold text-gray-600">shadow-xl</p>
                  </div>
                ),
              },
              {
                name: "Large Shadow",
                class: "shadow-2xl",
                example: (
                  <div className="bg-white p-6 rounded-lg shadow-2xl h-32 flex items-center justify-center">
                    <p className="font-bold text-gray-600">shadow-2xl</p>
                  </div>
                ),
              },
            ].map((shadow, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">{shadow.name}</h3>
                {shadow.example}
              </div>
            ))}
          </div>
        </section>

        {/* Spacing */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-8 bg-green-600 rounded"></div>
            <h2 className="text-4xl font-black text-gray-900">Spacing System</h2>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="space-y-4">
              {["4px", "8px", "12px", "16px", "24px", "32px", "48px", "64px"].map((space, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-20 text-sm font-bold text-gray-600">
                    {space}
                  </div>
                  <div className="flex-1 bg-green-200 rounded h-8 flex items-center">
                    <div className="text-xs font-bold text-green-700 ml-2">
                      {space}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gradients */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-8 bg-green-600 rounded"></div>
            <h2 className="text-4xl font-black text-gray-900">Gradients</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Green to Emerald",
                class: "from-green-600 to-emerald-600",
              },
              {
                name: "Blue to Cyan",
                class: "from-blue-500 to-cyan-500",
              },
              {
                name: "Yellow to Orange",
                class: "from-yellow-400 to-orange-600",
              },
              {
                name: "Purple to Pink",
                class: "from-purple-500 to-pink-500",
              },
            ].map((gradient, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-r ${gradient.class} rounded-xl p-12 shadow-lg`}
              >
                <p className="text-white font-bold text-lg">{gradient.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Images Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-8 bg-green-600 rounded"></div>
            <h2 className="text-4xl font-black text-gray-900">Image Patterns</h2>
          </div>

          <div className="space-y-8">
            {/* Full Width Image */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Full Width Image
              </h3>
              <img 
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop"
                alt="Forest"
                className="w-full h-96 object-cover rounded-lg shadow-lg hover:shadow-xl transition"
              />
            </div>

            {/* Image with Overlay */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Image with Gradient Overlay
              </h3>
              <div className="relative h-72 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop"
                  alt="Forest"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/60 to-emerald-600/60"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <h4 className="text-3xl font-black">ป่าไม้ไทย</h4>
                </div>
              </div>
            </div>

            {/* Grid of Images */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Image Grid (3 Columns)
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
                  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&q=70",
                ].map((img, idx) => (
                  <img 
                    key={idx}
                    src={img}
                    alt={`Forest ${idx + 1}`}
                    className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition hover:scale-105"
                  />
                ))}
              </div>
            </div>

            {/* Image Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <img 
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop"
                alt="Forest Card"
                className="w-full h-64 object-cover hover:scale-110 transition duration-500"
              />
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  ป่าดิบชื้น
                </h4>
                <p className="text-gray-600 mb-4">
                  ป่าที่มีความชื้นสูง พบหลวดใหญ่ได้อย่างมากมาย เป็นแหล่งน้ำที่สำคัญ
                </p>
                <button className="px-6 py-2 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700">
                  เรียนรู้เพิ่มเติม
                </button>
              </div>
            </div>

            {/* Side by Side Image and Content */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="grid md:grid-cols-2 gap-0">
                <img 
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=400&fit=crop"
                  alt="Forest"
                  className="w-full h-72 object-cover hover:scale-110 transition duration-500"
                />
                <div className="p-8 flex flex-col justify-center">
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">
                    ป่าดิบแล้ง
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    ป่าที่ผลัดใบตามฤดูกาล พบในภาคตะวันออกเฉียงเหนือ 
                    มีความหลากหลายของสัตว์ป่าสูงมาก
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>ฤดูแล้งนาน</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>ต้นไม้ร่วง</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>สัตว์ป่าหลากหลาย</span>
                    </li>
                  </ul>
                  <button onClick={() => alert('ดูรายละเอียดเกี่ยว ป่าดิบแล้ง')} className="px-6 py-2 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 w-fit cursor-pointer">
                    ดูรายละเอียด
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          <p>
            © 2026 สำนักงานป่าไม้ไทย • Design System v1.0
          </p>
        </div>
      </footer>
    </main>
  );
}
