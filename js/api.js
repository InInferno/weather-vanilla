class Api {
    constructor() {
        this.baseUrl = config.baseUrl;
        this.authorization = config.authorization;
        this.contentType = config.contentType;
    }
    getDataCityFromApi(city) {
        return fetch(`${this.baseUrl}/data/2.5/weather?q=${city}&appid=${this.authorization}&lang=ru`);
    }

    getDataCoorFromApi(lat, lon) {
        return fetch(`${this.baseUrl}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.authorization}&lang=ru`);
    }
}