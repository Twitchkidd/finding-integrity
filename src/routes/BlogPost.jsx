import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
	const [text, setText] = useState('');
	const params = useParams();

	useEffect(() => {
		fetch(`../posts/${params.blogId}.md`)
			.then(res => res.text())
			.then(res => setText(res));
	}, []);

	return <ReactMarkdown>{text}</ReactMarkdown>;
};

export default BlogPost;
