import { Suspense } from 'react';

import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

import { AppLoader } from '@/shared/ui';

import { AppRouter } from './providers';
import './styles/index.css';

function App() {
  return (
    <Suspense fallback={<AppLoader />}>
      <Header />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </Suspense>
  );
}

export default App;
