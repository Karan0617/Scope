const people = [
    {
      name: 'Hemant Bhargav',
      role: 'Full-Stack Developer',
      imageUrl:
        'https://i.postimg.cc/WpGcxsfq/hemant.png',
        githubId:"https://github.com/hemant-7802",
      linkedinId: 'https://www.linkedin.com',
    },
    {
      name: 'Karan Jadaun',
      role: 'Problem Solver',
      imageUrl:
        'https://i.postimg.cc/Jn8vSJZS/karan.jpg',
        githubId:"https://github.com/karan0617",
      linkedinId: '#https://www.linkedin.com',
    },
    {
        name: 'Arpit Jain',
        role: 'Full-Stack Developer',
        imageUrl:
          'https://i.postimg.cc/2yRL2rQt/arpit-jain.jpg',
          githubId:"https://github.com/arpitjainkarauli",
          linkedinId: "https://www.linkedin.com/in/arpit-jain-6193792b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
  ]
  
  export default function Team() {
    return (
      <div className="bg-gray-900 py-14 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet our team</h2>
            <p className="mt-4 text-lg leading-8 text-gray-400">
              We’re a dynamic group of individuals who are passionate about what we do.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
          >
            {people.map((person) => (
              <li key={person.name} className="rounded-2xl bg-gray-800 px-8 py-10">
                <img className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
                <p className="text-sm leading-6 text-gray-400">{person.role}</p>
                <ul role="list" className="mt-6 flex justify-center gap-x-6">
                  <li>
                    <a href={person.githubId} className="text-gray-400 hover:text-gray-300" target="_blank">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 3 30 30">
                      <path
                      fillRule="evenodd"
                      d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
                      clipRule="evenodd"
                      />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href={person.linkedinId} className="text-gray-400 hover:text-gray-300" target="_blank">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  