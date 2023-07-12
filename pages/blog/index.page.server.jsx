import { readdir, readdirSync, readFileSync } from 'node:fs';
// import { compileSync } from '@mdx-js/mdx';
// import { documentProps } from './pages/blog/posts/2023-07-06.page.mdx';

export function onBeforeRender(pageContext) {
	/* Desired behavior:
			initiate pages data variable
			read directory
			filter for mdx pages
			for each mdx page
				initiate post variable
				import props
				get slug
				add post data to pages
			sort by date and export
	*/

	// let posts = [];

	const postsPath = `./pages/blog/posts/`;

	// readdir(postsPath, (err, files) => {
	// 	if (err) throw err;
	// 	const mdxFiles = files.filter(fName => fName.slice(10) === '.page.mdx');
	// 	mdxFiles.forEach(file => {
	// 		const compiled = compileSync(readFileSync(postsPath + file).value).value;
	// 		console.log(compiled);
	// 	});
	// });

	const files = readdirSync(postsPath);

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
