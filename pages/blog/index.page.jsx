function Page(pageProps) {
	return (
		<>
			<p>Posts:</p>
			<ul>
				{[...pageProps.posts].map((slug, i) => (
					<li key={i}>
						<a href={`/blog/posts/${slug}`}>{slug}</a>
					</li>
				))}
			</ul>
		</>
	);
}

export { Page };
