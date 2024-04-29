import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({ name: 'my.db', location: 'default' });

export default db;
