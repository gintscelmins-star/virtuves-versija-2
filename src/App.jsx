import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

// Sinhroni — galvenā lapa (kritiski)
import LandingPage from './pages/LandingPage';

// Lazy — pārējās lapas
const LandingPageEN = lazy(() => import('./pages/LandingPageEN'));
const LandingPageRU = lazy(() => import('./pages/LandingPageRU'));
const AdminGallery = lazy(() => import('./pages/AdminGallery'));
const Inspiration = lazy(() => import('./pages/Inspiration'));
const PageNotFound = lazy(() => import('./lib/PageNotFound'));

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
        <Suspense fallback={null}>
          <Routes>
            {/* Galvenā lapa — sinhrona */}
            <Route path="/" element={<LandingPage />} />

            {/* Lazy lapas */}
            <Route path="/en" element={<LandingPageEN />} />
            <Route path="/ru" element={<LandingPageRU />} />
            <Route path="/iedvesma" element={<Inspiration />} />

            {/* Admin — lazy + auth */}
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
        </Suspense>
        <Toaster />
      </Router>
    </QueryClientProvider>
  );
}

export default App;