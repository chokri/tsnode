import { Profile, ProfilesInterface } from "./profiles.interface";
import fetch from 'node-fetch';

export class ProfilesService implements ProfilesInterface {
  getProfiles(): Promise<Profile[]> {
    console.log("Hit Profiles Service");

    return new Promise((resolve, reject) => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(users => {
          console.log("Got users", users)
          resolve(users)
        })
        .catch(err => reject(new Error(err)))
    })
  }
}

export const profilesService = new ProfilesService()