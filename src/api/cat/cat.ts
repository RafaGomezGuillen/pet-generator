import { instance } from "./base.api";

export interface CatData {
  url: string;
}

const timestamp = new Date().getTime();

export const Cat = {
  getRandomCat: function () {
    return instance.get(`cat?timestamp=${timestamp}&json=true`);
  },
  getRandomGif: function () {
    return instance.get(`cat/gif?timestamp=${timestamp}&json=true`);
  },
  getCustomImage: function () {
    return instance.get(``);
  },
};
