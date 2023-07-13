function Page(pageProps) {
	return (
		<>
			<p>Posts:</p>
			<ul>
				{pageProps.posts.map((post, i) => (
					<li key={i}>
						<a href={`/blog/posts/${post.slug}`}>
							{post.title} - {post.date}
						</a>
					</li>
				))}
			</ul>
		</>
	);
}

export { Page };
