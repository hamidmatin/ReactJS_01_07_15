import { ReactModuleIntro } from './tutorials/react-module'
import {
  UsingFunctionComponent,
  UsingClassComponent,
} from './tutorials/react-component'
import { CSSInReact, ClassModules } from './tutorials/css-in-react'
import { MainLayout } from './layout/main-layout'
import { HomePage } from './page/home'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFoundPage from './page/404/not-found'
import { EventStateCC } from './tutorials/event-state-cc'
import { CalculatorPage } from './page/calculator'
import { ClassComponetLifecycle } from './tutorials/class-component-lifecycle'
import { TutorialsPage } from './page/tutorials'
import { TutorialsHomePage } from './tutorials'
import { StateInFC } from './tutorials/state-in-fc'
import { CalculatorFCPage } from './page/calculator-fc'
import { UsersPage, UserNewPage, UserEditPage } from './page/users'
import { HelmetProvider } from 'react-helmet-async'
import { UsingRedux } from './tutorials/using-redux'
import { UsingContext } from './tutorials/using-context'

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/tutorials' element={<TutorialsPage />}>
              <Route index element={<TutorialsHomePage />} />
              <Route path='react-modules' element={<ReactModuleIntro />} />
              <Route
                path='function-component'
                element={<UsingFunctionComponent />}
              />
              <Route path='class-component' element={<UsingClassComponent />} />
              <Route path='css-in-react' element={<CSSInReact />} />
              <Route path='class-modules' element={<ClassModules />} />
              <Route path='event-state-cc' element={<EventStateCC />} />
              <Route path='cc-lifecycle' element={<ClassComponetLifecycle />} />
              <Route path='state-in-fc' element={<StateInFC />} />
              <Route path='using-redux' element={<UsingRedux />} />
              <Route path='using-context' element={<UsingContext />} />
            </Route>

            <Route path='/calculator' element={<CalculatorPage />} />
            <Route path='/calculator-fc' element={<CalculatorFCPage />} />
            <Route path='/users'>
              <Route index element={<UsersPage />} />
              <Route path='new' element={<UserNewPage />} />
              {/* 
                URL Parameter Syntax
                path='path/:parameter'
                path='path/:parameter/path'
                path='path/:parameter1/:parameter2'
                path='path/:parameter1/path/:parameter2'
            */}
              <Route path='edit/:id' element={<UserEditPage />} />
            </Route>

            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </HelmetProvider>
  )
}

// export default App;
