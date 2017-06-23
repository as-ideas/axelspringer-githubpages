var data = require('json-loader!../data/jobImages.json');

class GalleryService {
    constructor() {

    }

    getImages() {
        return data;
    }
}

export default new GalleryService();