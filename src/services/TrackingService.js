import PiwikTracker from 'piwik-tracker';

const BASE_URL = 'https://ideas.piwik.pro'
const SITE_ID = '29'

class TrackingService {
    constructor() {
        this.tracker = new PiwikTracker(
            SITE_ID, BASE_URL + '/piwik.php'
        );

        this.tracker.on('error', function (err) {
            console.error('Error tracking request: ', err)
        })
    }

    track(action) {
        let track = {
            url: window.location.href
        };

        if (action) track.action_name = action;

        this.tracker.track(track);
    }
}

export default new TrackingService();