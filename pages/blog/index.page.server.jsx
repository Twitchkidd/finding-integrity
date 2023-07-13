import { readdir } from 'node:fs/promises';
import { compile } from '@mdx-js/mdx';
// import { documentProps } from './pages/blog/posts/2023-07-06.page.mdx';

export async function onBeforeRender(pageContext) {
	/* Desired behavior:
			initiate posts data variable
			read directory
			filter for mdx pages
			for each mdx page
				initiate post variable
				import props
				get slug
				add post data to pages
			sort by date and export
	*/

	const postsPath = `./posts`;

	let posts = [];

	const getSlug = file => file.replace(/\.page\.mdx$/, '');

	try {
		// const mdxMod = await import(postsPath + '2023-07-06.page.mdx');
		// console.log(mdxMod.documentProps.title);
		const files = await readdir(postsPath);
		// const mdxFiles = files.filter(fName => fName.slice(10) === '.page.mdx');
		// const postData = mdxFiles.map(file => {
		// 	console.log(file);
		// 	console.log(postsPath + file);
		// 	const title = import(postsPath + file).documentProps.title;
		// 	return {
		// 		slug: getSlug(file),
		// 		title,
		// 	};
		// });
		// posts = postData;
		// const testMod = await import('./posts/test.js');
		// console.log(testMod.testExport);
		// console.log(documentProps);
		// import(mdxFiles[0]);
		// import('./posts/2023-07-06.page.mdx').then(mod => {
		// 	console.log(mod);
		// });
	} catch (err) {
		console.error(err);
	}

	// readdir(postsPath, (err, files) => {
	// 	if (err) throw err;
	// 	const mdxFiles = files.filter(fName => fName.slice(10) === '.page.mdx');
	// });

	// readdir(postsPath, (err, files) => {
	// 	if (err) throw err;
	// 	const mdxFiles = files.filter(fName => fName.slice(10) === '.page.mdx');
	// 	mdxFiles.forEach(file => {
	// 		const compiled = compileSync(readFileSync(postsPath + file).value).value;
	// 		console.log(compiled);
	// 	});
	// });

	// const postsPath = `./pages/blog/posts/`;

	// const files = readdirSync(postsPath);

	// const mdxFiles = files.filter(fName => fName.slice(10) === '.page.mdx');

	// const slugs = mdxFiles.map(f => f.replace(/\.page\.mdx$/, ''));

	// const pageProps = { posts: slugs };
	// const pageProps = { posts: 'fermf' };
	const pageProps = { posts };

	return {
		pageContext: {
			pageProps,
		},
	};
}

export const passToClient = ['pageProps'];
