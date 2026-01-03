'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Shield, Truck, Users, Target, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-gray-900/95 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">
                  <span className="text-orange-500">CV</span> <span className="text-white">PURI TEPULE ABADI</span>
                </h1>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-white hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Beranda</a>
                <a href="#about" className="text-gray-300 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Tentang</a>
                <a href="#services" className="text-gray-300 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Layanan</a>
                <a href="#contact" className="text-gray-300 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Kontak</a>
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-orange-500 p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="text-white hover:text-orange-500 block px-3 py-2 text-base font-medium">Beranda</a>
              <a href="#about" className="text-gray-300 hover:text-orange-500 block px-3 py-2 text-base font-medium">Tentang</a>
              <a href="#services" className="text-gray-300 hover:text-orange-500 block px-3 py-2 text-base font-medium">Layanan</a>
              <a href="#contact" className="text-gray-300 hover:text-orange-500 block px-3 py-2 text-base font-medium">Kontak</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative text-white pt-16">
        <div className="absolute inset-0">
          <img src="/images/mining-hero.jpg" alt="Mining Industry" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-orange-900/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-orange-500">CV PURI TEPULE ABADI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Mitra Terpercaya dalam Aktivitas Penunjang Pertambangan dan Penggalian
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Hubungi Kami
              </a>
              <a href="#services" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Lihat Layanan
              </a>
            </div>
          </div>
        </div>
        
        {/* Meta Ads Integration Badge */}
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Meta Ads Partner
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tentang <span className="text-orange-500">CV PURI TEPULE ABADI</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Kami adalah perusahaan yang bergerak dalam bidang aktivitas penunjang pertambangan dan penggalian lainnya. 
                Dengan pengalaman dan dedikasi tinggi, kami menyediakan layanan terbaik untuk mendukung industri pertambangan di Indonesia.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Berlokasi di Kendari, Sulawesi Tenggara, kami siap menjadi mitra terpercaya untuk semua kebutuhan penunjang pertambangan Anda.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Shield className="text-orange-500" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Berpengalaman</h4>
                    <p className="text-sm text-gray-600">Profesional di bidangnya</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="text-orange-500" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Terpercaya</h4>
                    <p className="text-sm text-gray-600">Komitmen tinggi</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-orange-500" size={20} />
                  <p className="text-gray-600">
                    Jl. Pattimura Lr. Tepule no 2a, Kel. Watulondo, Kec. Puuwatu, Kota Kendari, Prov. Sulawesi Tenggara
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-orange-500" size={20} />
                  <p className="text-gray-600">085285703582</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-orange-500" size={20} />
                  <p className="text-gray-600">info@puritepuleabadi.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi lengkap untuk aktivitas penunjang pertambangan dan penggalian
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img src="/images/logistics.jpg" alt="Logistik Pertambangan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-8">
                <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Truck className="text-orange-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Logistik Pertambangan</h3>
                <p className="text-gray-600 mb-4">
                  Pengelolaan transportasi dan distribusi peralatan pertambangan ke lokasi kerja.
                </p>
                <a href="#" className="text-orange-500 font-semibold flex items-center hover:text-orange-600">
                  Pelajari lebih lanjut <ChevronRight size={20} />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img src="/images/team.jpg" alt="Tenaga Ahli" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-8">
                <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Users className="text-orange-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tenaga Ahli</h3>
                <p className="text-gray-600 mb-4">
                  Penyediaan tenaga kerja terampil dan berpengalaman untuk industri pertambangan.
                </p>
                <a href="#" className="text-orange-500 font-semibold flex items-center hover:text-orange-600">
                  Pelajari lebih lanjut <ChevronRight size={20} />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img src="/images/consultation.jpg" alt="Konsultasi Teknis" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-8">
                <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="text-orange-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Konsultasi Teknis</h3>
                <p className="text-gray-600 mb-4">
                  Layanan konsultasi untuk optimasi operasional pertambangan Anda.
                </p>
                <a href="#" className="text-orange-500 font-semibold flex items-center hover:text-orange-600">
                  Pelajari lebih lanjut <ChevronRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meta Ads Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meta Ads Integration
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Kami menggunakan Meta Ads untuk meningkatkan jangkauan dan visibilitas layanan pertambangan Anda
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Targeted Advertising</h3>
                <p className="text-blue-100">
                  Iklan yang tepat sasaran untuk industri pertambangan
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Brand Awareness</h3>
                <p className="text-blue-100">
                  Meningkatkan citra merek di industri pertambangan
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Lead Generation</h3>
                <p className="text-blue-100">
                  Mendapatkan klien potensial berkualitas tinggi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-xl text-gray-600">
              Siap membantu kebutuhan pertambangan Anda
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subjek</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Kirim Pesan
                </button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-orange-500 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Alamat</h4>
                      <p className="text-gray-600">
                        Jl. Pattimura Lr. Tepule no 2a, Kel. Watulondo, Kec. Puuwatu, Kota Kendari, Prov. Sulawesi Tenggara
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-orange-500" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Telepon</h4>
                      <p className="text-gray-600">085285703582</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-orange-500" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@puritepuleabadi.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Ikuti Kami</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 hover:bg-orange-100 p-3 rounded-lg transition-colors">
                    <Facebook className="text-gray-600 hover:text-orange-600" size={20} />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-orange-100 p-3 rounded-lg transition-colors">
                    <Instagram className="text-gray-600 hover:text-orange-600" size={20} />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-orange-100 p-3 rounded-lg transition-colors">
                    <Linkedin className="text-gray-600 hover:text-orange-600" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="text-orange-500">CV</span> PURI TEPULE ABADI
              </h3>
              <p className="text-gray-400">
                Mitra terpercaya dalam aktivitas penunjang pertambangan dan penggalian.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Logistik Pertambangan</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Tenaga Ahli</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Konsultasi Teknis</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-orange-500 transition-colors">Tentang Kami</a></li>
                <li><a href="/privacy" className="hover:text-orange-500 transition-colors">Kebijakan Privasi</a></li>
                <li><a href="/terms" className="hover:text-orange-500 transition-colors">Syarat & Ketentuan</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <div className="space-y-2 text-gray-400">
                <p>085285703582</p>
                <p>info@puritepuleabadi.com</p>
                <p>Kendari, Sulawesi Tenggara</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CV PURI TEPULE ABADI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}