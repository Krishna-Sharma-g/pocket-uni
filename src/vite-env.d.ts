/// <reference types="vite/client" />

// Global namespace declarations for React and JSX when node_modules/@types/react is not yet installed
declare global {
  namespace React {
    type ReactNode = any;
    type FC<P = {}> = (props: P & { key?: any; children?: any; ref?: any }) => any;
    type FunctionComponent<P = {}> = (props: P & { key?: any; children?: any; ref?: any }) => any;
    type ReactElement<P = any, T extends string | any = any> = any;
    type ComponentType<P = {}> = any;
    type ChangeEvent<T = any> = any;
    type FormEvent<T = any> = any;
    type MouseEvent<T = any> = any;
    type KeyboardEvent<T = any> = any;
    type FocusEvent<T = any> = any;
    type InputEvent<T = any> = any;
    type RefObject<T> = { current: T };
    type MutableRefObject<T> = { current: T };
    interface Context<T> {
      Provider: any;
      Consumer: any;
      displayName?: string;
    }
  }

  namespace JSX {
    interface HTMLAttributes {
      [prop: string]: any;
      className?: string;
      style?: any;
      id?: string;
      title?: string;
      key?: any;
      ref?: any;
      children?: any;
      type?: string;
      value?: any;
      placeholder?: string;
      disabled?: boolean;
      required?: boolean;
      rows?: number;
      maxLength?: number;
      accept?: string;
      href?: string;
      target?: string;
      rel?: string;
      src?: string;
      alt?: string;
      role?: string;
      tabIndex?: number;
      onChange?: (e: any) => void;
      onClick?: (e: any) => void;
      onSubmit?: (e: any) => void;
      onKeyDown?: (e: any) => void;
      onKeyUp?: (e: any) => void;
      onBlur?: (e: any) => void;
      onFocus?: (e: any) => void;
      onInput?: (e: any) => void;
      onError?: (e: any) => void;
    }
    interface IntrinsicElements {
      [elemName: string]: any;
      option: HTMLAttributes;
      select: HTMLAttributes;
      div: HTMLAttributes;
      span: HTMLAttributes;
      a: HTMLAttributes;
      p: HTMLAttributes;
      button: HTMLAttributes;
      input: HTMLAttributes;
      textarea: HTMLAttributes;
      label: HTMLAttributes;
      form: HTMLAttributes;
      img: HTMLAttributes;
      table: HTMLAttributes;
      thead: HTMLAttributes;
      tbody: HTMLAttributes;
      tr: HTMLAttributes;
      th: HTMLAttributes;
      td: HTMLAttributes;
      h1: HTMLAttributes;
      h2: HTMLAttributes;
      h3: HTMLAttributes;
      h4: HTMLAttributes;
      h5: HTMLAttributes;
      h6: HTMLAttributes;
      ul: HTMLAttributes;
      ol: HTMLAttributes;
      li: HTMLAttributes;
      nav: HTMLAttributes;
      section: HTMLAttributes;
      header: HTMLAttributes;
      footer: HTMLAttributes;
      aside: HTMLAttributes;
      main: HTMLAttributes;
      code: HTMLAttributes;
      pre: HTMLAttributes;
      strong: HTMLAttributes;
      b: HTMLAttributes;
      i: HTMLAttributes;
      em: HTMLAttributes;
      svg: HTMLAttributes;
      path: HTMLAttributes;
      circle: HTMLAttributes;
    }
    interface Element {
      [key: string]: any;
    }
  }
}

declare namespace JSX {
  interface HTMLAttributes {
    [prop: string]: any;
    className?: string;
    style?: any;
    id?: string;
    title?: string;
    key?: any;
    ref?: any;
    children?: any;
    type?: string;
    value?: any;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    rows?: number;
    maxLength?: number;
    accept?: string;
    href?: string;
    target?: string;
    rel?: string;
    src?: string;
    alt?: string;
    role?: string;
    tabIndex?: number;
    onChange?: (e: any) => void;
    onClick?: (e: any) => void;
    onSubmit?: (e: any) => void;
    onKeyDown?: (e: any) => void;
    onKeyUp?: (e: any) => void;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
    onInput?: (e: any) => void;
    onError?: (e: any) => void;
  }
  interface IntrinsicElements {
    [elemName: string]: any;
    option: HTMLAttributes;
    select: HTMLAttributes;
    div: HTMLAttributes;
    span: HTMLAttributes;
    a: HTMLAttributes;
    p: HTMLAttributes;
    button: HTMLAttributes;
    input: HTMLAttributes;
    textarea: HTMLAttributes;
    label: HTMLAttributes;
    form: HTMLAttributes;
    img: HTMLAttributes;
    table: HTMLAttributes;
    thead: HTMLAttributes;
    tbody: HTMLAttributes;
    tr: HTMLAttributes;
    th: HTMLAttributes;
    td: HTMLAttributes;
    h1: HTMLAttributes;
    h2: HTMLAttributes;
    h3: HTMLAttributes;
    h4: HTMLAttributes;
    h5: HTMLAttributes;
    h6: HTMLAttributes;
    ul: HTMLAttributes;
    ol: HTMLAttributes;
    li: HTMLAttributes;
    nav: HTMLAttributes;
    section: HTMLAttributes;
    header: HTMLAttributes;
    footer: HTMLAttributes;
    aside: HTMLAttributes;
    main: HTMLAttributes;
    code: HTMLAttributes;
    pre: HTMLAttributes;
    strong: HTMLAttributes;
    b: HTMLAttributes;
    i: HTMLAttributes;
    em: HTMLAttributes;
    svg: HTMLAttributes;
    path: HTMLAttributes;
    circle: HTMLAttributes;
  }
  interface Element {
    [key: string]: any;
  }
}

declare module 'react' {
  export = React;
  export as namespace React;

  namespace React {
    export const useState: <T = any>(initialState?: T | (() => T)) => [T, (val: T | ((prev: T) => T)) => void];
  export const useEffect: (effect: () => void | (() => void), deps?: readonly any[]) => void;
  export const useRef: <T = any>(initialValue?: T | null) => { current: T | null };
  export const useMemo: <T = any>(factory: () => T, deps?: readonly any[]) => T;
  export const useCallback: <T extends (...args: any[]) => any>(callback: T, deps?: readonly any[]) => T;
  export const useContext: <T = any>(context: any) => T;
  export const createContext: <T = any>(defaultValue?: T) => any;
  export type ReactNode = any;
  export type FC<P = {}> = (props: P & { key?: any; children?: any; ref?: any }) => any;
  export type FunctionComponent<P = {}> = (props: P & { key?: any; children?: any; ref?: any }) => any;
  export type ReactElement<P = any, T extends string | any = any> = any;
  export type ComponentType<P = {}> = any;
  export type ChangeEvent<T = any> = any;
  export type FormEvent<T = any> = any;
  export type MouseEvent<T = any> = any;
  export type KeyboardEvent<T = any> = any;
  export type FocusEvent<T = any> = any;
  export namespace JSX {
    interface Element {
      [key: string]: any;
    }
    interface IntrinsicElements {
      [elemName: string]: any;
      option: any;
      select: any;
      div: any;
      span: any;
      a: any;
      p: any;
      button: any;
      input: any;
      textarea: any;
      label: any;
      form: any;
      img: any;
      table: any;
      thead: any;
      tbody: any;
      tr: any;
      th: any;
      td: any;
      h1: any;
      h2: any;
      h3: any;
      h4: any;
      h5: any;
      h6: any;
      ul: any;
      ol: any;
      li: any;
      nav: any;
      section: any;
      header: any;
      footer: any;
      aside: any;
      main: any;
      code: any;
      pre: any;
      strong: any;
      b: any;
      i: any;
      em: any;
      svg: any;
      path: any;
      circle: any;
    }
  }
  }
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
  export namespace JSX {
    interface Element {
      [key: string]: any;
    }
    interface IntrinsicElements {
      [elemName: string]: any;
      option: any;
      select: any;
      div: any;
      span: any;
      a: any;
      p: any;
      button: any;
      input: any;
      textarea: any;
      label: any;
      form: any;
      img: any;
      table: any;
      thead: any;
      tbody: any;
      tr: any;
      th: any;
      td: any;
      h1: any;
      h2: any;
      h3: any;
      h4: any;
      h5: any;
      h6: any;
      ul: any;
      ol: any;
      li: any;
      nav: any;
      section: any;
      header: any;
      footer: any;
      aside: any;
      main: any;
      code: any;
      pre: any;
      strong: any;
      b: any;
      i: any;
      em: any;
      svg: any;
      path: any;
      circle: any;
    }
  }
}

declare module 'react/jsx-dev-runtime' {
  export const jsxDEV: any;
  export const Fragment: any;
  export namespace JSX {
    interface Element {
      [key: string]: any;
    }
    interface IntrinsicElements {
      [elemName: string]: any;
      option: any;
      select: any;
      div: any;
      span: any;
      a: any;
      p: any;
      button: any;
      input: any;
      textarea: any;
      label: any;
      form: any;
      img: any;
      table: any;
      thead: any;
      tbody: any;
      tr: any;
      th: any;
      td: any;
      h1: any;
      h2: any;
      h3: any;
      h4: any;
      h5: any;
      h6: any;
      ul: any;
      ol: any;
      li: any;
      nav: any;
      section: any;
      header: any;
      footer: any;
      aside: any;
      main: any;
      code: any;
      pre: any;
      strong: any;
      b: any;
      i: any;
      em: any;
      svg: any;
      path: any;
      circle: any;
    }
  }
}

// Shorthand ambient module declarations for external libraries before npm install runs
declare module 'lucide-react';
declare module 'canvas-confetti';
declare module 'clsx';
declare module 'tailwind-merge';

declare module '@vitejs/plugin-react' {
  const reactPlugin: (options?: any) => any;
  export default reactPlugin;
}

declare module 'vite' {
  export function defineConfig(config: any): any;
  export default defineConfig;
}
