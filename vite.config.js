import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
import mdx from '@mdx-js/rollup';

export default {
	plugins: [
		react(),
		ssr(),
		{ enforce: 'pre', ...mdx(/* jsxImportSource: …, otherOptions… */) },
	],
};
