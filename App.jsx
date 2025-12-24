import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Dashboard } from './pages/Dashboard';
import { LibraryPage } from './pages/LibraryPage';
import { BioAiPage } from './pages/BioAiPage';
import { LessonsPage } from './pages/LessonsPage';
import { LoginPage } from './pages/LoginPage';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isGuest, setIsGuest] = useState(false);

  useEffect(() => {
    // 1. Mehmon rejimini tekshirish
    const guestStored = localStorage.getItem('isGuest');
    if (guestStored === 'true') {
      setIsGuest(true);
    }

    // 2. Firebase (Google) orqali kirganligini tekshirish
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleGuestLogin = () => {
    setIsGuest(true);
    localStorage.setItem('isGuest', 'true');
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Chiqishda xatolik:", error);
    }
    setIsGuest(false);
    localStorage.removeItem('isGuest');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Agar foydalanuvchi tizimga kirmagan bo'lsa va mehmon ham bo'lmasa -> LOGIN SAHIFASI
  if (!user && !isGuest) {
    return <LoginPage onGuestLogin={handleGuestLogin} />;
  }

  // Agar kirgan bo'lsa -> ASOSIY DASTUR
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <MainLayout 
            user={user} 
            isGuest={isGuest} 
            onLogout={handleLogout} 
          />
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="lessons" element={<LessonsPage />} />
        <Route path="library" element={<LibraryPage />} />
        <Route path="bio-ai" element={<BioAiPage />} />
      </Route>
      {/* Noto'g'ri manzillar uchun qayta yo'naltirish */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
