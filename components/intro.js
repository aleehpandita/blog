import { CMS_NAME, CMS_URL } from '@/lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8 font-MyFont">
      Meet Cancun through the eyes of a local
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8 font-serif">
      A blog written by real locals in the city of Cancun.{' '}
      
      </h4>
    </section>
  )
}
