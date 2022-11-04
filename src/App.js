import { ReactModuleIntro } from './tutorials/react-module';
import { UsingFunctionComponent, UsingClassComponent } from './tutorials/react-component';
import { CSSInReact, ClassModules } from './tutorials/css-in-react';
import { MainLayout } from './layout/main-layout';
import { HomePage } from './page/home';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from './page/404/not-found';
import { EventStateCC } from './tutorials/event-state-cc';

export default function App() {
  console.log(window.location);
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/react-modules' element={<ReactModuleIntro />} />
          <Route path='/function-component' element={<UsingFunctionComponent />} />
          <Route path='/class-component' element={<UsingClassComponent />} />
          <Route path='/css-in-react' element={<CSSInReact />} />
          <Route path='/class-modules' element={<ClassModules />} />
          <Route path='/event-state-cc' element={<EventStateCC />} />

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

// export default App;
