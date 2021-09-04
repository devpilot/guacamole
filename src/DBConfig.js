export const DBConfig = {
  name: 'MyDB',
  version: 1,
  objectStoresMeta: [
    {
      store: 'people',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'pass', keypath: 'pass', options: { unique: false } }
      ]
    },
    {
      store: 'task',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'peopleId', keypath: 'peopleId', options: { unique: false } },
        { name: 'title', keypath: 'title', options: { unique: false } },
        { name: 'desc', keypath: 'desc', options: { unique: false } },
        { name: 'status', keypath: 'status', options: { unique: false } }
      ]
    }
  ]
};
