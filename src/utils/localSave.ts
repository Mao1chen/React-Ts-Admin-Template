class $localStorage {
  // 支持批量存储
  save(key: String | Array<String>, value: any) {
    switch (typeof key) {
      case "string":
        localStorage.setItem(key, JSON.stringify(value));
        break;
      case "object":
        (key as Array<string>).forEach((next, index) => localStorage.setItem(next, JSON.stringify(value[index])));
        break;
    }
  }
  gain(key: string) {
    const result = localStorage.getItem(key) || "";
    if (result.length == 0) {
      return null;
    }
    return JSON.parse(result);
  }
  delete(key: string) {
    return localStorage.removeItem(key);
  }
  clear() {
    return localStorage.clear();
  }
  set(key: string, value: any) {
    sessionStorage.setItem(key, value);
  }
  get(key: string) {
    return sessionStorage.getItem(key);
  }
  remove(key: string) {
    sessionStorage.removeItem(key);
  }
  eliminate() {
    sessionStorage.clear();
  }
}
export default new $localStorage();
