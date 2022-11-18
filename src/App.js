import { ReactModuleIntro } from './tutorials/react-module';
import { UsingFunctionComponent, UsingClassComponent } from './tutorials/react-component';
import { CSSInReact, ClassModules } from './tutorials/css-in-react';
import { MainLayout } from './layout/main-layout';
import { HomePage } from './page/home';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from './page/404/not-found';
import { EventStateCC } from './tutorials/event-state-cc';
import { CalculatorPage } from './page/calculator';
import { ClassComponetLifecycle } from './tutorials/class-component-lifecycle';
import { TutorialsPage } from './page/tutorials';
import { TutorialsHomePage } from './tutorials';
import { StateInFC } from './tutorials/state-in-fc';
import { CalculatorFCPage } from './page/calculator-fc';

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/tutorials' element={<TutorialsPage />}>
            <Route index element={<TutorialsHomePage />} />
            <Route path='react-modules' element={<ReactModuleIntro />} />
            <Route path='function-component' element={<UsingFunctionComponent />} />
            <Route path='class-component' element={<UsingClassComponent />} />
            <Route path='css-in-react' element={<CSSInReact />} />
            <Route path='class-modules' element={<ClassModules />} />
            <Route path='event-state-cc' element={<EventStateCC />} />
            <Route path='cc-lifecycle' element={<ClassComponetLifecycle />} />
            <Route path='state-in-fc' element={<StateInFC />} />
          </Route>

          <Route path='/calculator' element={<CalculatorPage />} />
          <Route path='/calculator-fc' element={<CalculatorFCPage />} />

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

// export default App;
