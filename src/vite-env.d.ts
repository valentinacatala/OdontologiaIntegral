/// <reference types="vite/client" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.ico";
declare module "*.webp";
declare module "*.avif";

interface ImportMeta {
  readonly env: ImportMetaEnv;
}