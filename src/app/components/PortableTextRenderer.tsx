'use client';
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { urlFor } from '../../sanity/lib/image'

export const PortableTextRenderer = ({ value }: { value: any }) => {
  return (
    <PortableText
      value={value}
      components={{
        types: {
          image: ({ value }) => {
            const imageUrl = urlFor(value).url()
            return (
              <div className="my-6">
                <img
                  src={imageUrl}
                  alt={value.alt || 'Image'}
                  width={800}
                  height={500}
                  className="rounded-lg"
                />
              </div>
            )
          },
          code: ({ value }) => (
            <pre className="bg-gray-900 text-white dark:text-[#D4D4D4] text-sm p-4 rounded-lg overflow-auto my-4">
              <code>{value.code}</code>
            </pre>
          ),
        },

        block: {
          h1: ({ children }) => <h1 className="text-4xl dark:text-[#D4D4D4] font-bold mt-8 mb-4">{children}</h1>,
          h2: ({ children }) => <h2 className="text-3xl dark:text-[#D4D4D4] font-semibold mt-6 mb-3">{children}</h2>,
          h3: ({ children }) => <h3 className="text-2xl dark:text-[#D4D4D4] font-semibold mt-5 mb-2">{children}</h3>,
          h4: ({ children }) => <h4 className="text-xl dark:text-[#D4D4D4] font-semibold mt-4 mb-2">{children}</h4>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gray-400 dark:text-[#D4D4D4] pl-4 italic text-gray-600 my-4">
              {children}
            </blockquote>
          ),
          normal: ({ children }) => <p className="my-2 font-serif leading-9  md:text-lg text-md dark:text-[#D4D4D4] text-black">{children}</p>,
        },

        marks: {
          strong: ({ children }) => <strong className="font-bold">{children}</strong>,
          em: ({ children }) => <em className="italic">{children}</em>,
          link: ({ value, children } : {value : any, children : any}) => {
            const target = value.href.startsWith('http') ? '_blank' : undefined
            return (
              <Link
                href={value.href}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                className="text-blue-600 underline dark:text-[#D4D4D4]"
              >
                {children}
              </Link>
            )
          },
        },

        list: {
          bullet: ({ children }) => <ul className="list-disc ml-6 space-y-1 dark:text-[#D4D4D4]">{children}</ul>,
          number: ({ children }) => <ol className="list-decimal ml-6 space-y-1 dark:text-[#D4D4D4]">{children}</ol>,
        },

        listItem: {
          bullet: ({ children }) => <li>{children}</li>,
          number: ({ children }) => <li>{children}</li>,
        },
      }}
    />
  )
}
