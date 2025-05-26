import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'


const blogDirectory = path.join(process.cwd(), '/src/app/posts')

export function getSortedBlogPost() {
  const fileNames = fs.readdirSync(blogDirectory)
  const allPostData = fileNames
    .filter(item => item.endsWith(".md"))
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, '')
      const fullPath = path.join(blogDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf-8')
      const { data, content } = matter(fileContents)
      const excerpt = content.slice(0, 170) + '...';
      return {
        id, excerpt, ...data
      }
    })

  const totalBlogIndex = 100;

  return allPostData
    .filter(item => item.published === undefined || item.published)
    .sort((a, b) => a.date < b.date ? 1 : -1)
    .slice(0, totalBlogIndex)
}

export function getAllBlogPostIds() {
  const fileNames = fs.readdirSync(blogDirectory)
  return fileNames
    .filter(item => item.endsWith(".md"))
    .map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.md$/, '')
        }
      }
    })
}

export async function getBlogPostData(id) {
  const fullPath = path.join(blogDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(fileContents)

  const processedContent = await unified()
  use(remarkParse) // Convert into markdown AST
  .use(remarkRehype) // Transform to HTML AST
  .use(rehypeSanitize) // Sanitize HTML input
  .use(rehypeStringify) // Convert AST into serialized HTML
  .process(content)

  const contentHtml = processedContent.toString()
  const excerpt = content.slice(0, 70) + '...'

  return {
    id,
    contentHtml,
    excerpt,
    ...data,
  }
}
