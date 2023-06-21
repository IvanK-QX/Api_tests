import { faker } from "@faker-js/faker";

export const apiDataSet = {
    deviceUUID : `${faker.string.uuid()}`,
    randomEmail  : `api+${Math.floor(Math.random() * (999999-100000) + 100000)}@unitedtech.ai`,
    randomName : `Name+${Math.floor(Math.random() * (999999-100000) + 100000)}`,
    randomAbout : `About me + ${Math.floor(Math.random() * (999999-100000) + 100000)}`,
    searchText: 'supermagic'
}

