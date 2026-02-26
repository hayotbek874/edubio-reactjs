import React from 'react';
import { User } from 'lucide-react';

export const LoginPage = ({ onGuestLogin }) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/kirishqism.png')" }}
    >
      <div className="absolute inset-0 bg-slate-950/55 z-0"></div>
       {/* Background effects */}
       <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[100px] animate-pulse"></div>
      </div>

      <div className="bg-white/5 border border-white/10 p-8 rounded-3xl max-w-md w-full relative z-10 backdrop-blur-xl shadow-2xl">

        <div className="text-center mb-10">
           <div className="w-24 h-24 rounded-full mx-auto flex items-center justify-center mb-6 shadow-2xl relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>
              <img src="/edubio logosi.png" alt="EduBio" className="w-full h-full rounded-full object-cover border-2 border-white/20 relative z-10" />
           </div>
           <h1 className="text-3xl font-bold text-white mb-2 tracking-tight relative z-10">
             Xush kelibsiz!
           </h1>
           <p className="text-gray-400 relative z-10">
             EduBio
           </p>
        </div>

        <div className="space-y-4 relative z-10">
          <button
            onClick={onGuestLogin}
            className="w-full bg-white/5 text-white font-semibold py-3.5 px-4 rounded-xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all hover:scale-[1.02] active:scale-[0.98] border border-white/10"
          >
            <User size={20} />
            Mehmon sifatida kirish
          </button>
        </div>
        
        <p className="mt-8 text-center text-xs text-gray-500">
          Davom etish orqali siz foydalanish shartlariga rozilik bildirasiz.
        </p>
      </div>
    </div>
  );
};
