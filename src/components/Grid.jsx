import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Antiques for the modern soul    ',
    description:
      'Receive personalized price quotes for antique furniture inquiries directly from our experts.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Where memories come alive    ',
    description:
      'Elevate your space with classic furniture pieces that create lasting memories.',
    icon: LockClosedIcon,
  },
  {
    name: 'Embrace the grace of bygone era',
    description:
      'Rediscover the grace of bygone eras with our curated collection.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Antiques for the modern soul',
    description:
      'Find antique gems that speak to the modern connoisseur in you.',
    icon: FingerPrintIcon,
  },
]

export default function Grid() {
  return (
    <div className="bg-white py-15 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Elevate Your Space with Class</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          A celebration of vintage opulence
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Welcome to our world of exquisite antique furniture, where every piece tells a story and enriches your space with timeless beauty. Whether you are drawn to the elegance of Indian, Edwardian, Victorian, French, or prefer something Random that captures your heart, we are here to bring these treasures into your life.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
