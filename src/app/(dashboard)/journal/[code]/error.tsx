'use client' // Error components must be Client Components
 
import { cabinetGrotesk } from '@/components/fonts'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
 
export default function RoomNotFoundError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter();
  useEffect(() => {
    console.error(error)
  }, [error])
  return (
    <div className={`${cabinetGrotesk.className} flex flex-col justify-center items-center space-y-6`} style={{height : "calc(100dvh - 144px)"}}>
      <h2 className='text-4xl font-semibold'>{error.message}</h2>
      <button
        className='border border-dark px-6 py-4 rounded-full transition-all hover:bg-dark hover:text-white'
        onClick={
          // Attempt to recover by trying to re-render the segment
          // () => reset()
          ()=>{ router.back() }
        }
      >
        Back
      </button>
    </div>
  )
}