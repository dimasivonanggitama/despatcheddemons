import type { Metadata } from 'next'
 
// These styles apply to every route in the application
import './globals.css'
import { TbArrowBadgeLeftFilled, TbArrowBadgeRightFilled, TbFlag, TbFlagFilled, TbTrophy, TbTrophyFilled, TbUserQuestion } from 'react-icons/tb'
import Image from 'next/image'
 
export const metadata: Metadata = {
  title: 'Despatched Demons | Forum',
  description: "What's on menu today?",
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className="bg-white min-h-screen">
          <div className="bg-gray-900 flex flex-row justify-between">
            <div className="basis-1/3">
              <button className="flex flex-row items-center p-2">
                <Image src="/logo/despatcheddemons.png" width={50} height={50} alt="Despatched Demons Logo"/>
                <p className="px-2 font-bold text-xl">Despatched Demons</p>
              </button>
            </div>
            <div className="basis-1/3 flex justify-center">
              <button className="bg-gray-300 font-bold p-5 rounded-t-lg text-gray-900 ">Forum</button>
              <button className="hover:bg-gray-500 hover:rounded-t-lg p-5 transition-all">About Us</button>
              <button className="hover:bg-gray-500 hover:rounded-t-lg p-5 transition-all">Events</button>
              <button className="hover:bg-gray-500 hover:rounded-t-lg p-5 transition-all">Search</button>
            </div>
            <div className="basis-1/3 flex justify-end">
              <button className="border border-white flex flex-row hover:bg-gray-500 hover:border-gray-500 items-center m-3 rounded-full transition">
                <p className="px-2">Identify Yourself</p>
                <div className="bg-gray-300 p-3 rounded-full">
                  <TbUserQuestion className="text-black text-xl"/>
                </div>
              </button>
            </div>
          </div>
          <div className="flex justify-center bg-[url(/background/Verdant_Meadows_1.webp)] bg-center bg-gray-500 bg-blend-soft-light bg-fixed backdrop-blur-xs">
            <div className="bg-gray-300 max-w-6xl p-5">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-between h-72 w-full">
                  <div className="basis-1/2 bg-[url(/background/infernus.jpg)] bg-cover h-auto rounded-3xl p-2">
                    <div className="h-18 w-48 bg-gradient-to-r from-cyan-500 to-transparent p-2 rounded-tl-2xl">
                      <div className='flex flex-row items-center'>
                        <TbTrophyFilled className='text-xl mr-2 text-orange-300'/> 
                        <p className='font-bold text-xl'>WFF Modern</p>
                      </div>
                      <p className='text-sm'>Saturday, March 29th</p>
                    </div>
                  </div>
                  <div className='pr-2'></div>
                  <div className="basis-1/2 bg-[url(/background/bullet.jpg)] bg-cover h-auto rounded-3xl p-2 flex flex-col justify-between">
                    <div className="h-18 w-48 bg-gradient-to-r from-rose-500 to-transparent p-2 rounded-tl-2xl">
                      <div className='flex flex-row items-center'>
                        <TbFlagFilled className='text-xl mr-2 text-gray-300'/> 
                        <p className='font-bold text-xl'>Draft OS</p>
                      </div>
                      <p className='text-sm'>Every Friday, 20:00 CET</p>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row justify-center gap-2'>
                  <button className='size-6 rounded-full'><TbArrowBadgeLeftFilled className='size-6 text-black'/></button>
                  <button className='bg-white border border-gray-400 size-6 rounded-full text-sm text-black'>1</button>
                  <button className='bg-gray-400 border border-gray-400 size-6 rounded-full text-sm'>2</button>
                  <button className='size-6 rounded-full'><TbArrowBadgeRightFilled className='size-6 text-black'/></button>
                </div>
              </div>
              {children}
            </div>
          </div>
        </body>
      </html>
    )
  }