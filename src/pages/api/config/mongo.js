// lib/mongodb.js
import mongoose from "mongoose";

const MONGODB_URI = process.env.NEXT_PUBLIC_LOCAL_MONGO_URL;

if (!MONGODB_URI) {
  throw new Error("Mongo Db Connection String is missing in .env.local");
}

/**
 * Global is used here to maintain a cached connection across hot reloads in development.
 * This prevents exhausting your database connections.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function DataBaseHandler() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default DataBaseHandler;
