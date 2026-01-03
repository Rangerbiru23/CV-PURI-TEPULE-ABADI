'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ArrowLeft, Shield, Eye, Lock, Database, UserCheck } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
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
              <Link href="/" className="flex items-center space-x-2">
                <ArrowLeft className="text-orange-500" size={20} />
                <h1 className="text-xl font-bold text-white">
                  <span className="text-orange-500">CV</span> <span className="text-white">PURI TEPULE ABADI</span>
                </h1>
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-gray-300 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Beranda</Link>
                <Link href="/privacy" className="text-white px-3 py-2 text-sm font-medium">Privacy Policy</Link>
                <Link href="/terms" className="text-gray-300 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Terms & Conditions</Link>
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
              <Link href="/" className="text-gray-300 hover:text-orange-500 block px-3 py-2 text-base font-medium">Beranda</Link>
              <Link href="/privacy" className="text-white block px-3 py-2 text-base font-medium">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-300 hover:text-orange-500 block px-3 py-2 text-base font-medium">Terms & Conditions</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-orange-100 p-3 rounded-lg">
              <Shield className="text-orange-600" size={32} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Kebijakan Privasi</h1>
          </div>
          <p className="text-gray-300 text-lg max-w-3xl">
            Kebijakan Privasi <span className="text-orange-500">CV PURI TEPULE ABADI</span> - Perlindungan data Anda adalah prioritas kami
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Eye className="text-orange-500 mr-3" size={24} />
                Pendahuluan
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Selamat datang di Kebijakan Privasi <span className="font-semibold text-orange-600">CV PURI TEPULE ABADI</span>. 
                Dokumen ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi 
                Anda ketika menggunakan layanan kami dalam bidang aktivitas penunjang pertambangan dan penggalian.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Database className="text-orange-500 mr-3" size={24} />
                Informasi yang Kami Kumpulkan
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Informasi Pribadi</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Nama lengkap dan identitas perusahaan</li>
                    <li>Alamat email dan nomor telepon</li>
                    <li>Alamat perusahaan dan lokasi proyek</li>
                    <li>Informasi keuangan untuk transaksi bisnis</li>
                    <li>Data kontak untuk komunikasi bisnis</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Informasi Teknis</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Alamat IP dan jenis perangkat</li>
                    <li>Informasi browser dan sistem operasi</li>
                    <li>Data penggunaan website</li>
                    <li>Cookie dan teknologi pelacakan</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className="text-orange-500 mr-3" size={24} />
                Cara Kami Menggunakan Informasi Anda
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Menyediakan layanan penunjang pertambangan yang Anda minta</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Memproses transaksi bisnis dan penagihan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Mengkomunikasikan informasi terkait layanan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Meningkatkan kualitas layanan kami</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Memenuhi kewajiban hukum dan peraturan</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Perlindungan Data</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <span className="font-semibold text-orange-600">CV PURI TEPULE ABADI</span> berkomitmen untuk melindungi informasi pribadi Anda dengan:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Enkripsi data yang kuat</li>
                <li>Akses terbatas ke informasi pribadi</li>
                <li>Keamanan server dan jaringan</li>
                <li>Update keamanan reguler</li>
                <li>Pelatihan staf tentang perlindungan data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Berbagi Informasi</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga, kecuali:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Dengan persetujuan Anda yang eksplisit</li>
                <li>Untuk memenuhi kebutuhan layanan penunjang pertambangan</li>
                <li>Untuk memenuhi kewajiban hukum</li>
                <li>Dengan mitra bisnis tepercaya yang telah menandatangani perjanjian kerahasiaan</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <UserCheck className="text-orange-500 mr-3" size={24} />
                Hak Anda sebagai Pengguna
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Hak Akses</h4>
                  <p className="text-gray-600 text-sm">Mengakses dan melihat informasi pribadi yang kami simpan</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Hak Koreksi</h4>
                  <p className="text-gray-600 text-sm">Memperbarui atau mengoreksi informasi yang tidak akurat</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Hak Penghapusan</h4>
                  <p className="text-gray-600 text-sm">Meminta penghapusan data pribadi Anda</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Hak Pembatasan</h4>
                  <p className="text-gray-600 text-sm">Membatasi pengolahan data pribadi Anda</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie dan Teknologi Pelacakan</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Website kami menggunakan cookie untuk meningkatkan pengalaman pengguna:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Cookie esensial untuk fungsi website</li>
                <li>Cookie analitik untuk memahami penggunaan</li>
                <li>Cookie fungsional untuk pengalaman yang dipersonalisasi</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Anda dapat mengelola preferensi cookie melalui pengaturan browser Anda.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Perubahan Kebijakan Privasi</h2>
              <p className="text-gray-600 leading-relaxed">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diberitahukan melalui website kami atau email. 
                Penggunaan lanjutan layanan kami setelah perubahan berarti Anda menerima kebijakan yang diperbarui.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontak Kami</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-4">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau perlindungan data di <span className="font-semibold text-orange-600">CV PURI TEPULE ABADI</span>, 
                  silakan hubungi kami:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> privacy@puritepuleabadi.com</p>
                  <p><strong>Telepon:</strong> 085285703582</p>
                  <p><strong>Alamat:</strong> Jl. Pattimura Lr. Tepule no 2a, Kel. Watulondo, Kec. Puuwatu, Kota Kendari, Prov. Sulawesi Tenggara</p>
                </div>
              </div>
            </section>

            <section className="bg-orange-50 p-6 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                Kebijakan Privasi ini berlaku efektif sejak 1 Januari 2024 dan terakhir diperbarui pada {new Date().toLocaleDateString('id-ID')}.
              </p>
            </section>
          </div>
        </div>
      </div>

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
                <li><a href="/" className="hover:text-orange-500 transition-colors">Beranda</a></li>
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