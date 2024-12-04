export const logger = (message: string, data?: any) => {
  console.log(`[${new Date().toISOString()}] ${message}`, JSON.stringify(data));
};

