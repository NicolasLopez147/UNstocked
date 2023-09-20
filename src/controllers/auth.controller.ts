import { Request, Response } from 'express';
import authFacade from '../facades/auth.facade';

class AuthController {
	public async register (req: Request, res: Response): Promise <Response> {
		return authFacade.register(req, res);
	}

	public  async login (req: Request, res: Response):  Promise<Response> {
		return authFacade.login(req, res);
	}

	public logout (req: Request, res: Response): Response {
		return authFacade.logout(req, res);
	}

	public profile (req: Request, res: Response): Response {
		console.log(req.user);
		return authFacade.profile(req, res);
	}
} export default new AuthController();
