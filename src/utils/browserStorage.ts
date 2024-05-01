type TLocalStorageKeys = string;

class ApiStorage {
  public get<T>(key: TLocalStorageKeys): any {
    if (typeof window !== "undefined") {
      const item = localStorage?.getItem(key);
      if (!(key in localStorage)) return undefined;
      try {
        const savedData = JSON.parse(item || "") as T | string;
        return savedData;
      } catch (error) {
        error;
      }
      return item || "";
    }
  }

  public set<T, K extends TLocalStorageKeys>(
    key: K,
    savingData: T | string
  ): void | undefined {
    if (typeof window !== "undefined") {
      if (!savingData) return undefined;
      if (typeof savingData === "object") {
        savingData = JSON.stringify(savingData);
      }
      localStorage?.setItem(key, savingData as string);
    }
  }

  public update<T extends TLocalStorageKeys, K extends string>(
    key: K,
    newData: T
  ): string | undefined {
    if (typeof window !== "undefined") {
      if (!(key in localStorage)) return "key_not_available";
      localStorage?.setItem(key, newData as string);

      return "update_success";
    }
  }

  public remove(key: TLocalStorageKeys) {
    if (typeof window !== "undefined") {
      if (key in localStorage) {
        localStorage?.removeItem(key);
      }
    }
  }
  public clear() {
    if (typeof window !== "undefined") {
      localStorage?.clear();
    }
  }
}

const browserStorage = new ApiStorage();

export default browserStorage;
