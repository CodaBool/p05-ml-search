export const metadata = {
  title: 'ML Search',
  description: 'Search internal documents',
}

import Navbar from '../components/navbar'
import NavBox from '../components/NavBox'
import SampleFooter from '../components/SampleFooter'
import './global.css'
import 'bootstrap/dist/css/bootstrap.min.css'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <NavBox />
        <SampleFooter />
      </body>
    </html>
  )
}
