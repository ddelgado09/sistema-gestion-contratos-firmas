import { Client, Pool } from 'pg';

class Conn {
	static conn = undefined;

	constructor() {}

	getConn() {
		if (typeof Conn.conn === "undefined") {
			Conn.conn = new Client({
				host: 'localhost',
				port: 5432,
				user: 'postgres',
				password: '12345',
				database: 'gestion_contratos_firmas'
			});
		}

		return Conn.conn;
	}
}

export default Conn;