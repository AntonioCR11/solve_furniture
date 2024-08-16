import { Inter } from 'next/font/google';
import localFont from 'next/font/local'
 
export const inter = Inter({ subsets: ['latin'] });
export const newYork = localFont({src : './fonts/NewYork.otf', display : 'swap'})
export const satoshi = localFont({src : './fonts/Satoshi.otf', display : 'swap'})
export const cabinetGrotesk = localFont({src : './fonts/CabinetGrotesk.otf', display : 'swap'})