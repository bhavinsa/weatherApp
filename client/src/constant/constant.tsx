const cityNames: {
    name: string;
    id: string;
}[] = [{ "name": "Los Angeles", "id": "5368381" }, { "name": "New York", "id": "5128594" }, { "name": "Chicago", "id": "4887398" }];

const API_URL = 'http://localhost:4000/getWeatherData'

export {
    cityNames,
    API_URL,
}
