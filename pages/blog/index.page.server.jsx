import { readdir } from 'node:fs/promises';

export async function onBeforeRender(pageContext) {
	const nodePostsPath = `./pages/blog/posts/`;
	const importPostsPath = `./posts/`;

	let posts;

	const getSlug = file => file.replace(/\.page\.mdx$/, '');

	try {
		const files = await readdir(nodePostsPath);
		const mdxFiles = files.filter(fName => fName.slice(10) === '.page.mdx');
		const postData = await Promise.all(
			mdxFiles.map(async file => {
				const mod = await import(importPostsPath + file /* @vite-ignore */);
				return {
					slug: getSlug(file),
					title: mod.documentProps.title,
					date: mod.documentProps.date,
				};
			})
		);
		posts = postData.reverse();
	} catch (err) {
		console.error(err);
	}

	const pageProps = { posts };

	return {
		pageContext: {
			pageProps,
		},
	};
}

export const passToClient = ['pageProps'];
