import { faker } from "@faker-js/faker";

export const apiDataSet = {
    deviceUUID : `${faker.string.uuid()}`,
    randomEmail  : `api+${Math.floor(Math.random() * (999999-100000) + 100000)}@unitedtech.ai`,
    randomName : `Lloy${(Math.random() + 1).toString(36).substring(7)}`,
    randomAbout : `About me ${(Math.random() + 1).toString(36).substring(10)}`,
    searchText: 'supermagic',
    email: 'myleadsp.ace',
    password: 'dp1181345',
    streamTitle: 'My stream Title',
    updatedStreamTitle: 'My updated title',
    isoDate: new Date().toISOString(),
    randomWord: `word${(Math.random() + 1).toString(36).substring(7)}`,
    messageText: `Message Text + ${Math.floor(Math.random() * (999999-100000) + 100000)}`,
    uiStreamMessage: 'hello this is playwright message for chat in real-time'

}