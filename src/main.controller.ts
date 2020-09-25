import { Response } from 'express';

export class MainController {
  public index({ res }: { res: Response; }): void {
    res.json({
      version: '0.0.0',
      status: 'OK',
    });
  }
}

export const mainController = new MainController();
