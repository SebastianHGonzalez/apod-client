export default {
    apodApiClient: {
        apiKey: process.env.APOD_API_KEY || 'DEMO_KEY',
        baseURL: process.env.APOD_BASE_URL || 'https://api.nasa.gov',
    },
};