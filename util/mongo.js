import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
  throw new Error('Please define the MONGO_URL environment variable inside .env.local');
}

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
