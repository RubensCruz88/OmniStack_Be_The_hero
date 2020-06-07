const request = require('supertest');
const app = require('../../src/app');

describe('ONG', () => {
	it('deve ser possível a criação de uma ONG',async() => {
		const response = await request(app)
			.post('/ongs')
			.send({
				name: "ONG",
				email: "apae@teste.com.br",
				whatsapp: "11123456789",
				city: "Piumhi",
				uf: "MG"
			});

		console.log(response.body);
	})
})