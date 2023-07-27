import { ZodError, z } from "zod";

export class ErrorException extends Error {
  public error: any;
  constructor(err: Error | any) {
    super(err instanceof z.ZodError ? err.issues : err.message ?? String(err));
    this.error = err instanceof z.ZodError ? err.issues : err.message ?? err;
  }
}

export function formatErrorMessage(err: ZodError | Error | any) {
  return {
    error:
      err instanceof z.ZodError
        ? err.issues.map((issue) => `${issue.message}`)
        : [err.error],
    timestamp: new Date().toISOString(),
  };
}
