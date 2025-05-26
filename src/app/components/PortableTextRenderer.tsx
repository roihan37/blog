import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { urlFor } from '../../sanity/lib/image'

export const PortableTextRenderer = ({ value }: { value: any }) => {
  return (
    <PortableText
      value={value}
      components={{
        types: {
          image: ({ value } : {value : any}) => {
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
          code: ({ value } : {value : any}) => (
            <pre className="bg-gray-900 text-white text-sm p-4 rounded-lg overflow-auto my-4">
              <code>{value.code}</code>
            </pre>
          ),
        },

        block: {
          h1: ({ children } : {children : any}) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
          h2: ({ children } : {children : any}) => <h2 className="text-3xl font-semibold mt-6 mb-3">{children}</h2>,
          h3: ({ children } : {children : any}) => <h3 className="text-2xl font-semibold mt-5 mb-2">{children}</h3>,
          h4: ({ children } : {children : any}) => <h4 className="text-xl font-semibold mt-4 mb-2">{children}</h4>,
          blockquote: ({ children } : {children : any}) => (
            <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-600 my-4">
              {children}
            </blockquote>
          ),
          normal: ({ children } : {children : any}) => <p className="my-2">{children}</p>,
        },

        marks: {
          strong: ({ children } : {children : any}) => <strong className="font-bold">{children}</strong>,
          em: ({ children } : {children : any}) => <em className="italic">{children}</em>,
          link: ({ value, children } : {value : any, children : any}) => {
            const target = value.href.startsWith('http') ? '_blank' : undefined
            return (
              <Link
                href={value.href}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                className="text-blue-600 underline"
              >
                {children}
              </Link>
            )
          },
        },

        list: {
          bullet: ({ children } : {children : any}) => <ul className="list-disc ml-6 space-y-1">{children}</ul>,
          number: ({ children } : {children : any}) => <ol className="list-decimal ml-6 space-y-1">{children}</ol>,
        },

        listItem: {
          bullet: ({ children } : {children : any}) => <li>{children}</li>,
          number: ({ children } : {children : any}) => <li>{children}</li>,
        },
      }}
    />
  )
}
