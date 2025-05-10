interface Config {
  apiEndpoint: string;
  referenceId: string;
  googleApiKey: string;
}

const config: Config = {
  apiEndpoint: import.meta.env.VITE_API_ENDPOINT,
  referenceId: import.meta.env.VITE_REFERENCE_ID,
  googleApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
};

export default config;
