"use client"
import Navbar from '@/DoctorComponents/Navbar'
import Sidebar from '@/DoctorComponents/Sidebar';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <div className='flex flex-col'>
              <Navbar />
            <div className='flex flex-row'>
                  <Sidebar />
                <div className='w-full'>
                    {children}
                </div>
            </div>
        </div>
      </body>
    </html>
  );
}
