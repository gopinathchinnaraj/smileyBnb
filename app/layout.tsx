import './globals.css'

import { Nunito } from 'next/font/google'
import Navbar from './Components/navbar/Navbar';
import ClientOnly from './Components/ClientOnly';
import RegisterModal from './Components/Modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './Components/Modals/LoginModal';

import getCurrentUser from './actions/getCurrentUser';
import RentModal from './Components/Modals/RentModal';
import SearchModel from './Components/Modals/SearchModal';


export const metadata = {
  title: 'Smileybnb',
  description: 'smileybnb',
}
const font = Nunito({
  subsets:["latin"]
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly> 
          <ToasterProvider />
          <SearchModel />
          <RentModal />
          <LoginModal /> 
          <RegisterModal /> 
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
        </body>
    </html>
  )
}
