// const mysql = require("mysql");
// var db;

// class Database {
//   constructor( config ) {
//       this.connection = mysql.createConnection( config );
//   }
//   query( sql, args ) {
//       return new Promise( ( resolve, reject ) => {
//           this.connection.query( sql, args, ( err, rows ) => {
//               if ( err )
//                   return reject( err );
//               resolve( rows );
//           } );
//       } );
//   }
//   close() {
//       return new Promise( ( resolve, reject ) => {
//           this.connection.end( err => {
//               if ( err )
//                   return reject( err );
//               resolve();
//           } );
//       } );
//   }
// }

// if (process.env.JAWSDB_URL){
//     db = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//     db = mysql.createConnection({
//         host: "localhost",
//         port: 3306,
//         user: process.env.DB_USER,
//         password: process.env.DB_PWD,
//         database: process.env.DB_NAME
//     });
// };

// db.connect();


// const db = new Database({
//   host: "localhost",
//   port: 3306,
//   user: process.env.DB_USER,
//   password: process.env.DB_PWD,
//   database: process.env.DB_NAME
// });

// module.exports = db


const mysql = require("mysql");
if (! process.env.JAWSDB_URL){
    require("dotenv").config();
}

function connect_db(db_name) {
    if (process.env.JAWSDB_URL){
        return mysql.createConnection(process.env.JAWSDB_URL)
    } else {
        return mysql.createConnection({
            host: "localhost",
            user: process.env.SQLUSER,
            password: process.env.SQLPASS,
            port: 3306,
            database: db_name,
        });
    }
}

function close_db(connection) {
    return new Promise((resolve, reject) => {
        connection.end((err) => {
            if (err) reject(err);
            resolve();
        });
    });
}

module.exports = {connect_db, close_db}