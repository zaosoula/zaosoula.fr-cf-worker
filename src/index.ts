import { Router, RouterHandler } from '@tsndr/cloudflare-worker-router';

export interface Env {}

const router = new Router<Env>();

const redirect = (destination: string, status = 307): RouterHandler => ({ res }) => {
	res.headers.set('Location', destination);
	res.status = status;
};

router.get('/', redirect('https://www.linkedin.com/in/zaosoula'));
router.get('/github', redirect('https://github.com/zaosoula'));
router.get('/instagram', redirect('https://instagram.com/zaosoula'));
router.get('/twitter', redirect('https://twitter.com/zaosoula'));
router.get('/linkedin', redirect('https://www.linkedin.com/in/zaosoula'));

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		return router.handle(env, request)
	}
};
