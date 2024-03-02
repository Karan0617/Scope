import { InboxIcon, AcademicCapIcon, VideoCameraIcon, BookOpenIcon, FunnelIcon, HeartIcon} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Comprehensive Courses',
    description:
      'Explore a wide range of courses tailored to your interests and goals.',
    href: '#',
    icon: InboxIcon,
  },
  {
    name: 'Expert Instructors',
    description:
      'Learn from industry professionals and experienced educators who are passionate about sharing their knowledge.',
    href: '#',
    icon: AcademicCapIcon,
  },
  {
    name: 'Interactive Learning Experience',
    description:
      'Engage in interactive lessons, discussions and activities that foster a dynamic and immersive learning environment.',
    href: '#',
    icon: VideoCameraIcon,
  },
  {
    name: 'Flexible Learning Options',
    description:
      'Access course materials anytime, anywhere and learn at your own pace to fit your busy schedule.',
    href: '#',
    icon: BookOpenIcon,
  },
  {
    name: 'Practical Skills Application',
    description:
      'Gain practical skills and knowledge that can be directly applied in real-world scenarios, enhancing your professional growth.',
    href: '#',
    icon: FunnelIcon,
  },
  {
    name: 'Supportive Community',
    description:
      'Join a vibrant community of learners, collaborate with peers and receive guidance from instructors throughout your learning journey.',
    href: '#',
    icon: HeartIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-gray-900 sm:py-20" id='features'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-400 sm:text-4xl">About the Scope</h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
          Elevate your learning experience with Scope, a passionate expert in Academics & Languages. Immerse yourself in a diverse collection of courses, vibrant communities, insightful webinars, and premium digital products. Start your educational journey today!
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-10 gap-y-20 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-xl font-mono leading-7 text-violet-500">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-950">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-md font-semibold leading-6 text-white">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
