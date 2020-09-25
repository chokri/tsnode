import { Request, Response } from 'express';

export class MainController {
  public index({ req, res }: { req: Request; res: Response; }): void {
    res.json({
      version: '0.0.0',
      status: 'OK',
    });
  }
}

export const mainController = new MainController();
