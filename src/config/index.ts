interface Config {
  apiEndpoint: string;
  referenceId: string;
}

const config: Config = {
  apiEndpoint: import.meta.env.VITE_API_ENDPOINT,
  referenceId: import.meta.env.VITE_REFERENCE_ID,
};

export default config;
