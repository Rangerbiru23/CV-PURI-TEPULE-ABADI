'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ArrowLeft, FileText, AlertCircle, CheckCircle, Gavel, Users } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
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
                <Link href="/privacy" className="text-gray-300 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="text-white px-3 py-2 text-sm font-medium">Terms & Conditions</Link>
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
              <Link href="/privacy" className="text-gray-300 hover:text-orange-500 block px-3 py-2 text-base font-medium">Privacy Policy</Link>
              <Link href="/terms" className="text-white block px-3 py-2 text-base font-medium">Terms & Conditions</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-orange-100 p-3 rounded-lg">
              <FileText className="text-orange-600" size={32} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Syarat & Ketentuan</h1>
          </div>
          <p className="text-gray-300 text-lg max-w-3xl">
            Syarat & Ketentuan <span className="text-orange-500">CV PURI TEPULE ABADI</span> - Aturan penggunaan layanan kami
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Gavel className="text-orange-500 mr-3" size={24} />
                Pendahuluan
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Selamat datang di Syarat & Ketentuan <span className="font-semibold text-orange-600">CV PURI TEPULE ABADI</span>. 
                Dokumen ini mengatur penggunaan layanan kami dalam bidang aktivitas penunjang pertambangan dan penggalian. 
                Dengan menggunakan layanan kami, Anda setuju untuk mematuhi syarat dan ketentuan yang berlaku.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="text-orange-500 mr-3" size={24} />
                Definisi
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-600">
                  <li><strong>"Perusahaan":</strong> CV PURI TEPULE ABADI</li>
                  <li><strong>"Klien":</strong> Pihak yang menggunakan layanan Perusahaan</li>
                  <li><strong>"Layanan":</strong> Aktivitas penunjang pertambangan dan penggalian yang disediakan</li>
                  <li><strong>"Website":</strong> Platform online Perusahaan</li>
                  <li><strong>"Informasi Rahasia":</strong> Data sensitif yang dibagikan antara Perusahaan dan Klien</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Ruang Lingkup Layanan</h3>
                  <p className="text-gray-600 mb-3">
                    <span className="font-semibold text-orange-600">CV PURI TEPULE ABADI</span> menyediakan layanan:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Logistik dan transportasi peralatan pertambangan</li>
                    <li>Penyediaan tenaga kerja terampil</li>
                    <li>Konsultasi teknis pertambangan</li>
                    <li>Penunjang operasional pertambangan</li>
                    <li>Layanan penggalian dan ekskavasi</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Standar Kualitas</h3>
                  <p className="text-gray-600">
                    Kami berkomitmen untuk menyediakan layanan berkualitas tinggi sesuai standar industri pertambangan 
                    dan memenuhi semua peraturan yang berlaku di Indonesia.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Users className="text-orange-500 mr-3" size={24} />
                Kewajiban dan Tanggung Jawab
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Kewajiban Perusahaan</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Menyediakan layanan sesuai kesepakatan</li>
                    <li>• Memastikan keselamatan kerja</li>
                    <li>• Melindungi informasi klien</li>
                    <li>• Mematuhi peraturan perundang-undangan</li>
                    <li>• Memberikan laporan berkala</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Kewajiban Klien</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Memberikan informasi yang akurat</li>
                    <li>• Melakukan pembayaran tepat waktu</li>
                    <li>• Mematuhi kesepakatan kontrak</li>
                    <li>• Menyediakan akses lokasi kerja</li>
                    <li>• Menginformasikan perubahan kebutuhan</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Harga dan Pembayaran</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Struktur Harga</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Harga disepakati dalam kontrak kerja sama</li>
                    <li>Harga dapat berubah sesuai kondisi pasar</li>
                    <li>Biaya tambahan akan diinformasikan sebelumnya</li>
                    <li>Pajak dan biaya administrasi sesuai peraturan</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Metode Pembayaran</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Transfer bank ke rekening Perusahaan</li>
                    <li>Pembayaran bertahap sesuai milestone</li>
                    <li>Pembayaran akhir setelah penyelesaian proyek</li>
                    <li>Syarat pembayaran dapat dinegosiasikan</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="text-orange-500 mr-3" size={24} />
                Pembatalan dan Pengembalian
              </h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <h4 className="font-semibold text-gray-800 mb-3">Kebijakan Pembatalan</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Pembatalan oleh Klien:</strong> Dapat dilakukan dengan pemberitahuan minimal 7 hari kerja</li>
                  <li><strong>Pembatalan oleh Perusahaan:</strong> Dapat dilakukan jika terjadi force majeure</li>
                  <li><strong>Pengembalian dana:</strong> Diproses dalam 14 hari kerja setelah persetujuan</li>
                  <li><strong>Biaya pembatalan:</strong> Sesuai dengan yang tercantum dalam kontrak</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kerahasiaan</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kedua belah pihak setuju untuk menjaga kerahasiaan semua informasi yang dibagikan selama kerja sama. 
                Informasi rahasia meliputi:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Data teknis dan operasional pertambangan</li>
                <li>Informasi keuangan dan bisnis</li>
                <li>Strategi perusahaan dan rencana pengembangan</li>
                <li>Data karyawan dan mitra bisnis</li>
                <li>Informasi yang ditandai sebagai rahasia</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Kewajiban kerahasiaan tetap berlaku setelah berakhirnya kontrak.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kekayaan Intelektual</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Semua materi, konten, dan kekayaan intelektual yang dimiliki oleh <span className="font-semibold text-orange-600">CV PURI TEPULE ABADI</span> 
                dilindungi oleh hukum yang berlaku, termasuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Nama perusahaan dan logo</li>
                <li>Konten website dan materi pemasaran</li>
                <li>Metodologi kerja dan prosedur operasional</li>
                <li>Dokumen teknis dan laporan</li>
                <li>Perangkat lunak dan sistem yang dikembangkan</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Penyelesaian Sengketa</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Prosedur Mediasi</h3>
                  <ol className="list-decimal list-inside text-gray-600 space-y-2">
                    <li>Negosiasi langsung antara kedua belah pihak</li>
                    <li>Mediasi dengan pihak ketiga netral</li>
                    <li>Penyelesaian melalui arbitrase jika diperlukan</li>
                    <li>Penyelesaian di pengadilan sebagai langkah terakhir</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Yurisdiksi</h3>
                  <p className="text-gray-600">
                    Semua sengketa akan diselesaikan sesuai dengan hukum yang berlaku di Republik Indonesia 
                    dan yurisdiksi pengadilan di Kendari, Sulawesi Tenggara.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Force Majeure</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <span className="font-semibold text-orange-600">CV PURI TEPULE ABADI</span> tidak bertanggung jawab atas keterlambatan 
                atau kegagalan pelaksanaan kontrak akibat kejadian di luar kendali kami, termasuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Bencana alam (gempa bumi, banjir, tsunami)</li>
                <li>Perubahan peraturan pemerintah</li>
                <li>Unjuk rasa atau kerusuhan sosial</li>
                <li>Wabah penyakit atau pandemi</li>
                <li>Pemogokan umum</li>
                <li>Perang atau konflik bersenjata</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Perubahan Syarat & Ketentuan</h2>
              <p className="text-gray-600 leading-relaxed">
                Kami berhak mengubah Syarat & Ketentuan ini dari waktu ke waktu. Perubahan akan diberitahukan 
                melalui website kami atau email. Penggunaan lanjutan layanan kami setelah perubahan berarti 
                Anda menerima syarat dan ketentuan yang diperbarui.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontak Kami</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-4">
                  Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, silakan hubungi <span className="font-semibold text-orange-600">CV PURI TEPULE ABADI</span>:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> legal@puritepuleabadi.com</p>
                  <p><strong>Telepon:</strong> 085285703582</p>
                  <p><strong>Alamat:</strong> Jl. Pattimura Lr. Tepule no 2a, Kel. Watulondo, Kec. Puuwatu, Kota Kendari, Prov. Sulawesi Tenggara</p>
                </div>
              </div>
            </section>

            <section className="bg-orange-50 p-6 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                Syarat & Ketentuan ini berlaku efektif sejak 1 Januari 2024 dan terakhir diperbarui pada {new Date().toLocaleDateString('id-ID')}.
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