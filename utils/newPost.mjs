import { access, constants, writeFile } from 'node:fs';

const dayFromDayNum = num =>
	num === 0
		? 'Sunday'
		: num === 1
		? 'Monday'
		: num === 2
		? 'Tuesday'
		: num === 3
		? 'Wednesday'
		: num === 4
		? 'Thursday'
		: num === 5
		? 'Friday'
		: 'Saturday';

const pad = n => (n < 10 ? `0${n}` : `${n}`);

const newPost = () => {
	const date = new Date();
	const day = dayFromDayNum(date.getDay());
	const yearMonthDay = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
		date.getDate()
	)}`;
	const file = `./pages/blog/posts/${yearMonthDay}.page.mdx`;
	access(file, constants.F_OK, err => {
		if (!err) {
			console.log(`file exists`);
		} else {
			const title = `${day} ${yearMonthDay}`;
			const frontMatter = `export const documentProps = {
	title: '${title}',
	date: '${yearMonthDay}',
	author: 'Integrity'
};

# {documentProps.title}
`;
			writeFile(file, frontMatter, err => {
				if (err) throw err;
				console.log('Welcome back!');
			});
		}
	});
};

newPost();
