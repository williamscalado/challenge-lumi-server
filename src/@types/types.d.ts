declare global {
  interface BigIntConstructor {
    toJSON: () => BigInt;
  }
}
