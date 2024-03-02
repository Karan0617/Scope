import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "Can I cancel my subscription at anytime?",
    answer:
    "Sure. Your paid subscription can be cancelled anytime by shifting to Lite plan.",
  },
  {
    question: "What are widgets?",
    answer:
      "Widget is an adjusted display of the application. Every app may have multiple widgets. Widget defines how the application will look and function on your website.",
  },
  {
    question: "Do I get updates for the app?",
    answer:
      "Sure! Automatic updates are available free of charge to all our users.",
  },
  {
    question: "Do you offer support if I need help?",
    answer:
      "Yes! High-quality customer support is extremely important for a quality product, that’s why we do our best to resolve any issues you may encounter.",
  },
  {
    question: "What should I do if I need help with installation and adjusting?",
    answer:
      "We are ready to help with this! You can always contact us at karaulitecheducation@gmail.com  and we will help you to set up and change the settings of the app on your website the way you need.",
  },
  // More questions...
]

export default function FAQ() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-4xl font-bold leading-10 tracking-tight text-gray-500">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-white">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
