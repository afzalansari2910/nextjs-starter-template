/** biome-ignore-all lint/style/noMagicNumbers: All constants are defined using descriptive names */
/**
 * Application related constants
 */
export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Next.js Starter';
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  'Um template com Next.js, TypeScript e Mantine UI';
export const APP_LANGUAGE = process.env.NEXT_PUBLIC_APP_LANGUAGE || 'pt-BR';
export const APP_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
export const APP_USER_HOME = process.env.NEXT_PUBLIC_APP_USER_HOME || '/dashboard';

/**
 * Security and authentication related constants
 */
export const ONE_DAY_IN_SECONDS = 60 * 60 * 24; // 86400 seconds
export const THIRTY_MINUTES_IN_SECONDS = 1800; // 1800 seconds
export const LOCK_OUT_THRESHOLD = 5; // 5 failed attempts
export const LOCK_OUT_DURATION_MINUTES = 15 * 60_000; // 15 minutes
export const PASSWORD_RESET_TOKEN_BYTES = 32; // 32 bytes
export const PASSWORD_RESET_TOKEN_EXPIRY = 60 * 60 * 1000; // 1 hour
export const API_KEY_EXPIRES_THRESHOLD = 30 * 24 * 60 * 60 * 1000; // 30 days

/**
 * React Query related constants
 */
export const QUERY_STALE_TIME = 5 * 60_000; // 5 minutes
