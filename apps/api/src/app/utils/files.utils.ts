import { v4 as uuidv4 } from 'uuid';

export const prependUuid = (string: string): string => `${uuidv4()}${string}`;

export const stripUuid = (string: string): string => string.slice(36);
