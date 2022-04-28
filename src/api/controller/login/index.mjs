import Usuarios from "../../model/usuarios/index.mjs";

class Login {
	static login(email, password) {
		if (typeof email !== "string" || typeof password !== "string") {
			return {
				res: false,
				msj: 'El correo electrónico y/o contraseña no son válidos'
			};
		}

		const u = new Usuarios();
	}
}