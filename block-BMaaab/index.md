writeCode

Run these shell commands in mongo shell:

- db.version()   // 6.0.4

- db.stats()
/*
{
  db: 'test',
  collections: 0,
  views: 0,
  objects: 0,
  avgObjSize: 0,
  dataSize: 0,
  storageSize: 0,
  indexes: 0,
  indexSize: 0,
  totalSize: 0,
  scaleFactor: 1,
  fsUsedSize: 0,
  fsTotalSize: 0,
  ok: 1
}
*/

- db.help() // list of data will appear

Write code to

- create a database of your country name.   // db.createUser(
   {
     user: "India",
   }
);
- check list of databases to see newly created database.  // db.getUsers()
- check which database you are currently connected to ?   // db.getUsers()

