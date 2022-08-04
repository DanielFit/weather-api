export default () => ({
  baseUrl: process.env.BASE_URL,
  apiKey: process.env.API_KEY,
});

export enum ConfigToken {
  baseUrl = 'baseUrl',
  apiKey = 'apiKey',
}
