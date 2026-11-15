/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEB3FORMS_KEY?: string;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}
