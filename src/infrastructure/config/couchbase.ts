import { Cluster } from 'couchbase';

const clusterUrl = process.env.COUCHBASE_URL || 'couchbase://localhost';
const clusterUsername = process.env.COUCHBASE_USERNAME || '';
const clusterPassword = process.env.COUCHBASE_PASSWORD || '';
const clusterBucketName = process.env.COUCHBASE_BUCKET_NAME || '';

const clusterOptions = {
  username: clusterUsername,
  password: clusterPassword,
};

const cluster = new Cluster(clusterUrl, clusterOptions);

const bucket = cluster.bucket(clusterBucketName);
const collection = bucket.defaultCollection();

export { cluster, collection };