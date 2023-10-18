export default async (value: string, regular: RegExp, errorWarning: string) => {
  if (!regular.test(value)) {
    return Promise.reject(errorWarning);
  }
};
