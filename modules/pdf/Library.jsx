import React, { useState } from 'react';
import {
  Book,
  Download,
  Search,
  Filter,
  CheckCircle,
  FileText
} from 'lucide-react';

// --- Mock Data ---
const LIBRARY_BOOKS = [
  {
    id: 'bio-5',
    title: 'Biologiya',
    subtitle: 'Botanika asoslari',
    grade: 5,
    author: 'A. Zikiryayev, A. Toxtayev',
    coverColor: 'bg-emerald-600',
    size: '12.4 MB',
    isDownloaded: false
  },
  {
    id: 'bio-6',
    title: 'Biologiya',
    subtitle: 'Botanika',
    grade: 6,
    author: 'O. Pratov, T. Shoyqulov',
    coverColor: 'bg-green-700',
    size: '14.2 MB',
    isDownloaded: true
  },
  {
    id: 'bio-7',
    title: 'Biologiya',
    subtitle: 'Zoologiya',
    grade: 7,
    author: 'A. Gafurov, K. Nishonboyev',
    coverColor: 'bg-orange-600',
    size: '18.5 MB',
    isDownloaded: false
  }
];

export const Library = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [downloadingIds, setDownloadingIds] = useState(new Set());

  const filteredBooks = LIBRARY_BOOKS.filter(book => {
    const s = searchTerm.toLowerCase();
    const matchSearch =
      book.title.toLowerCase().includes(s) ||
      book.subtitle.toLowerCase().includes(s) ||
      book.author.toLowerCase().includes(s);

    const matchGrade =
      selectedGrade === 'all' || book.grade === selectedGrade;

    return matchSearch && matchGrade;
  });

  const handleDownload = (id) => {
    setDownloadingIds(prev => new Set(prev).add(id));
    setTimeout(() => {
      setDownloadingIds(prev => {
        const s = new Set(prev);
        s.delete(id);
        return s;
      });
      alert('Kitob yuklandi (demo)');
    }, 1200);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/30" />
      </div>

      <div className="relative z-10 p-4 md:p-8 pb-24">

        {/* Header */}
        <h1 className="text-2xl md:text-4xl font-bold text-white flex items-center gap-2 mb-4">
          <Book className="text-teal-400" /> Kutubxona
        </h1>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            className="w-full pl-10 pr-4 py-3 rounded-xl text-sm"
            placeholder="Kitob nomi yoki muallif..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filters (MOBILE FIXED) */}
        <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setSelectedGrade('all')}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-semibold backdrop-blur-sm ${
              selectedGrade === 'all'
                ? 'bg-teal-500 text-white'
                : 'bg-white/30 text-white'
            }`}
          >
            <Filter size={12} /> Barchasi
          </button>

          {[5,6,7,8,9,10,11].map(g => (
            <button
              key={g}
              onClick={() => setSelectedGrade(g)}
              className={`px-3 py-1.5 rounded-full text-[11px] font-semibold ${
                selectedGrade === g
                  ? 'bg-teal-500 text-white'
                  : 'bg-white/30 text-white'
              }`}
            >
              {g}-sinf
            </button>
          ))}
        </div>

        {/* Books */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filteredBooks.map(book => (
            <div
              key={book.id}
              className="bg-white/95 rounded-xl p-2 shadow-md flex flex-col"
            >
              {/* Cover */}
              <div className={`aspect-[3/4] ${book.coverColor} rounded-lg mb-2 flex items-center justify-center`}>
                <FileText className="text-white" size={24} />
              </div>

              {/* Info */}
              <h4 className="text-xs font-bold line-clamp-2">
                {book.subtitle}
              </h4>
              <p className="text-[10px] text-gray-500 line-clamp-1">
                {book.author}
              </p>

              {/* Button */}
              <button
                onClick={() => handleDownload(book.id)}
                disabled={downloadingIds.has(book.id)}
                className={`mt-2 py-1.5 rounded-md text-[10px] font-medium flex items-center justify-center gap-1 ${
                  book.isDownloaded
                    ? 'bg-green-50 text-green-700'
                    : downloadingIds.has(book.id)
                      ? 'bg-gray-100 text-gray-400'
                      : 'bg-teal-50 text-teal-700 hover:bg-teal-500 hover:text-white'
                }`}
              >
                {downloadingIds.has(book.id)
                  ? 'Yuklanmoqda...'
                  : book.isDownloaded
                    ? <><CheckCircle size={12}/> O‘qish</>
                    : <><Download size={12}/> Yuklash</>
                }
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;