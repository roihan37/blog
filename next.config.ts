import type { NextConfig } from "next";
import createMDX from '@next/mdx'
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  webpack: (config: { module: { rules: { test: RegExp; loader: string; }[]; }; }) => {
    config.module.rules.push({
      test: /\.svg$/,
      loader: 'svg-inline-loader',
    });
    return config;
  }

};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      [require('rehype-pretty-code'), {
        theme: 'github-dark',
        onVisitLine(node: { children: string | any[]; }) {
          if (node.children.length === 0) {
            node.children = [{ type: 'text', value: ' ' }];
          }
        },
        onVisitHighlightedLine(node: { properties: { className: string[]; }; }) {
          node.properties.className.push('highlighted');
        },
      }],
    ],
  },
},
)

export default withMDX(nextConfig);

