import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import LandingPage from './pages/LandingPage';
import LandingPageEN from './pages/LandingPageEN';
import LandingPageRU from './pages/LandingPageRU';
import AdminGallery from './pages/AdminGallery';
import Inspiration from './pages/Inspiration';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

// Protected layout — auth pārbaude tikai admin sadaļai
const ProtectedLayout = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return <Outlet />;
};

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <Routes>
          {/* Publiskie maršruti — BEZ auth gaidīšanas, tūlītēja ielāde */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/en" element={<LandingPageEN />} />
          <Route path="/ru" element={<LandingPageRU />} />
          <Route path="/iedvesma" element={<Inspiration />} />

          {/* Admin maršruti — AR auth aizsardzību */}
          <Route
            element={
              <AuthProvider>
                <ProtectedLayout />
              </AuthProvider>
            }
          >
            <Route path="/admin/gallery" element={<AdminGallery />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Toaster />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
