import serviceInstance from "./httpConfig";

class $http {
  constructor() {}
  async get(url: string): Promise<API.ResponseStructure | Error> {
    return serviceInstance.get(url);
  }
  async post<T = {}>(url: string, params: T): Promise<API.ResponseStructure | Error> {
    return serviceInstance.post(url, params);
  }
  async delete(url: string): Promise<API.ResponseStructure | Error> {
    return serviceInstance.delete(url);
  }
  async put<K = {}>(url: string, params: K): Promise<API.ResponseStructure | Error> {
    return serviceInstance.put(url, params);
  }
}
export default new $http();
