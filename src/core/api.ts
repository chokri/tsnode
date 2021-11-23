import bodyParser from 'body-parser';
import express, { Application } from 'express';
import { MainRoute } from '../main.route';
import { ProfilesRoute } from '../profiles/profiles.route'
export class Api {
  public api: Application;

  // public api: express.Application;
  public RESOURCE_NAME: string;

  public VERSION: string;

  public URI: string;

  constructor() {
    this.api = express();
    this.RESOURCE_NAME = 'api';
    this.VERSION = 'v1';
    this.URI = `/${this.RESOURCE_NAME}/${this.VERSION}`;
    this.config();
  }

  private config(): void {
    const mainRoute: MainRoute<this> = new MainRoute(this);
    const profilesRoute: ProfilesRoute<this> = new ProfilesRoute(this);
    // Configure Express to use bodyParser and support application/json
    this.api.use(bodyParser.json()); // to support JSON-encoded bodies
    // Support application/x-www-form-urlencoded post data
    this.api.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies
    // Main resource
    this.api.use(`${this.URI}/${mainRoute.RESOURCE_NAME}`, mainRoute.router);
    // Profiles resource
    this.api.use(`${this.URI}/${profilesRoute.RESOURCE_NAME}`, profilesRoute.router);
  }
}

export default new Api().api;
