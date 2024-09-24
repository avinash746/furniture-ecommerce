import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

export default function ContentSection() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-20 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Timeless treasures for the modern connoisseur</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome to The Royal Oak</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              Discover a world of timeless elegance at Royal Oak, where antique furniture becomes the centerpiece of your space. Explore our curated collection of Indian, Edwardian, Victorian, French, and other captivating styles that evoke the charm of bygone eras.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://www.royalzig.com//public/themes/royalzig/images/tailor-bg.jpg"
            alt="furniture"
            height={400}
            width={400}
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              Explore our catalog to find your perfect piece of nostalgia and elevate your space with classical elegance reimagined. At Royal Oak, we bring timeless beauty to modern homes and embrace the grace of bygone eras.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Embrace the Charm:</strong> Immerse yourself in the captivating charm of yesteryear with our handpicked selection.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Expert Guidance: </strong> Benefit from our team  knowledgeable advice and expertise in the world of antique furniture.

                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Quality Assured:</strong> Rest assured that every item is sourced and verified for authenticity and quality.

                  </span>
                </li>
              </ul>
              <p className="mt-8">
              Our collection showcases a blend of history and craftsmanship, offering you the opportunity to discover exceptional pieces that reflect your individual taste.
            Explore Royal Oak and embark on a journey where every piece of antique furniture tells a unique story, enriching your home with unparalleled beauty and character.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900"> Create Treasures Together</h2>
              <p className="mt-6">
              : Immerse yourself in the captivating charm of yesteryear with our handpicked selection of antique furniture that exudes elegance and sophistication. Benefit from our team extensive expertise and passion for antique furniture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
