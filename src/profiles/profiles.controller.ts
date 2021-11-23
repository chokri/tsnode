import { Response } from 'express';
import { profilesService } from './profiles.service';

export class ProfilesController {

  public index({ res }: { res: Response; }): void {
    console.log("Hit ProfileContoller index");

    profilesService.getProfiles()
      .then(profiles => {
        console.log("Got profiles from service", profiles);

        res.json(profiles)
      })
      .catch(err => res.json(err))
  }
}

export const profilesController = new ProfilesController()