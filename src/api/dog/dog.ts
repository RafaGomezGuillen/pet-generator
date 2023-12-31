import { instance, instance2 } from "./base.api";

export interface DogData {
  message: string;
  status: string;
}

const timestamp = new Date().getTime();

export const Dog = {
  getRandomDog: function () {
    return instance.get(`breeds/image/random?timestamp=${timestamp}`);
  },
  getAllDogs: function () {
    return instance2.get(`doggos`);
  },
  getAllBreeds: function () {
    return instance
      .get(`breeds/list/all`)
      .then((response) => {
        const breedsObject = response.data.message;
        const breeds = Object.keys(breedsObject);
        return breeds;
      })
      .catch((e) => {
        console.error(e);
        return [];
      });
  },
  getRandomDogByBreed: function (breed: string): Promise<DogData> {
    return instance
      .get(`breed/${breed}/images/random?timestamp=${timestamp}`)
      .then((response) => {
        return response.data as DogData;
      });
  },
};
