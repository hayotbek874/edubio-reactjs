import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Dashboard } from './pages/Dashboard';
import { LibraryPage } from './pages/LibraryPage';
import { BioAiPage } from './pages/BioAiPage';
import { LessonsPage } from './pages/LessonsPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="lessons" element={<LessonsPage />} />
        <Route path="library" element={<LibraryPage />} />
        <Route path="bio-ai" element={<BioAiPage />} />
      </Route>
    </Routes>
  );
}