import { dataSource } from '@/config/DataSource';

export const setupDb = () => {
  dataSource
    .initialize()
    .then(() => {
      console.log('Data Source has been initialized!');
    })
    .catch((err) => {
      console.error('Error during Data Source initialization:', err);
    });
};
