import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

// const port = 5000
async function main() {
  await mongoose.connect(config.database_url as string);

  try {
    app.listen(config.port, () => {
      console.log(`Listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
