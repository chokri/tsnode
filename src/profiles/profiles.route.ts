import * as express from 'express';
import { profilesController } from './profiles.controller';

export class ProfilesRoute<T> {
  public RESOURCE_NAME: string;

  public router: express.Router = express.Router();

  public API: T;

  constructor(api: T) {
    this.RESOURCE_NAME = 'profiles';
    this.API = api;
    this.config();
  }

  private config(): void {
    this.router.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      next();
    });
    this.router.get(
      '/',
      (req: express.Request, res: express.Response) => profilesController.index({ res }),
    );
  }
}
