// react-router-dom
// import { Navigate } from 'react-router-dom'
// Layouts
import WelcomePageLayout from './layouts/WelcomePageLayout/WelcomePageLayout'
import DrawPageLayout from './layouts/DrawPageLayout/DrawPageLayout'

const routes = [
  {
    path: '',
    element: <WelcomePageLayout />,
  },
  {
    path: '/draw',
    element: <DrawPageLayout />,
  }
]

export default routes
