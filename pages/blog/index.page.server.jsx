import { readdirSync } from 'node:fs';

export function onBeforeRender(pageContext) {
	const files = readdirSync(`./pages/blog/posts/`);

	const mdxFiles = files.filter(fName => fName.slice(10) === '.page.mdx');

	const slugs = mdxFiles.map(f => f.replace(/\.page\.mdx$/, ''));

	const pageProps = { posts: slugs };

	return {
		pageContext: {
			pageProps,
		},
	};
}

export const passToClient = ['pageProps'];
