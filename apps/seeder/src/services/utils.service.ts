import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Get a random item from array.
 * @param array the array.
 * @returns the item.
 */
export function getRandom(array: any[]) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Get a random integer from the given range
 * @param min the minimum value.
 * @param max the maximum value.
 * @returns the generated number.
 */
export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Get a random boolean. 50% chance.
 * @returns a boolean.
 */
export function getRandomBoolean() {
  return Math.random() < 0.5;
}

/**
 * Get a boolean that has X chance of being true.
 * @param chance The chance as a float between 0 and 1.
 * @returns the result.
 * @example getRandomChance(0.3) // 30% chance of being true
 */
export function getRandomChance(chance: number) {
  return Math.random() < chance;
}

export async function uploadFileToLinode(dataBuffer: Buffer, filename: string) {
  const clusterId = getValue('API_LINODE_STORAGE_CLUSTER_ID', true);
  const bucketId = getValue('API_LINODE_STORAGE_BUCKET_ID', true);
  const accessKey = getValue('API_LINODE_STORAGE_ACCESS_KEY', true);
  const secretKey = getValue('API_LINODE_STORAGE_SECRET_KEY', true);

  try {
    const s3 = new S3Client({
      region: clusterId,
      credentials: {
        accessKeyId: accessKey,
        secretAccessKey: secretKey,
      },
      endpoint: `https://${clusterId}.linodeobjects.com`,
    });

    const uploadResult = await s3.send(
      new PutObjectCommand({
        Bucket: bucketId,
        Body: dataBuffer,
        Key: filename,
      })
    );
    if (uploadResult.$metadata.httpStatusCode != 200) {
      throw new Error('UploadFailedError');
    }
  } catch (error) {
    console.error(`Failed to upload document with name ${filename}`, error);
  }
}

function getValue(key: string, throwOnMissing: boolean): string {
  const value = process.env[key];
  if (!value && throwOnMissing) {
    throw new Error(`config error - missing env.${key}`);
  }

  return value;
}
