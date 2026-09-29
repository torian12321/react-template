export type ObjToStringLiteral<T extends object> = T[keyof T];

/** Any string will be allowed, but suggested to use the following values */
export type SuggestString<T extends string> = T | (string & {});

/** Deeply partializes an object */
export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

/** Convert an object to a string path */
export type PathsToStringProps<T> = T extends string
  ? ''
  : {
      [K in keyof T]: T[K] extends object
        ? `${string & K}.${PathsToStringProps<T[K]>}`
        : string & K;
    }[keyof T];
