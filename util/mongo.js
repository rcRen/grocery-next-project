import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
  throw new Error('Please define the MONGO_URL environment variable inside .env.local');
}

mongoose.connection.on('connecting', (error) => {
  console.error('1. connecting: ', error);
});

mongoose.connection.on('connected', (error) => {
  console.error('2. connected: ', error);
});

mongoose.connection.on('open', (error) => {
  console.error('3. open: ', error);
});

mongoose.connection.on('disconnecting', (error) => {
  console.error('4. disconnecting: ', error);
});

mongoose.connection.on('disconnected', (error) => {
  console.error('5. disconnected: ', error);
});

mongoose.connection.on('close', (error) => {
  console.error('6. close: ', error);
});

mongoose.connection.on('reconnected', (error) => {
  console.error('reconnected: ', error);
});

mongoose.connection.on('error', (error) => {
  console.error('error: ', error);
});

mongoose.connection.on('fullsetup', (error) => {
  console.error('fullsetup: ', error);
});

mongoose.connection.on('all', (error) => {
  console.error('all: ', error);
});

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    console.info('connection already connected');

    return;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      autoCreate: false,
    };

    cached.promise = mongoose
      .connect(MONGO_URL, opts)
      .then((mongoose) => {
        return mongoose;
      })
      .catch((error) => {
        console.error(error);
        return new Promise(null);
      });
  }

  cached.conn = await cached.promise;
}

const disconnectDB = async () => {
  await mongoose.connection.close().then((res) => {
    console.info('close success!');
    cached = { conn: null, promise: null };
  });
};

export { connectDB, disconnectDB };
