function Page(pageProps) {
	console.log(pageProps);
	return (
		<>
			<p>Posts:</p>
			<ul>
				{[...pageProps].map((post, i) => (
					<li key={i}>
						<a href={`/blog/posts/${post.slug}`}>{post.title}</a>
					</li>
				))}
			</ul>
		</>
	);
}

export { Page };
