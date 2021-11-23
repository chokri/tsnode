export interface Geolocation {
  lat: string;
  lng: string;
}
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geolocation;
}
export interface Profile {
  id?: string;
  name: string;
  username: string;
  email: string;
  address?: Address;
}

export interface ProfilesInterface {
  getProfiles(): Promise<Profile[]>
}