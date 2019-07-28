import clinic from  './clinic.json'
import appointment from  './appointment.json'

export default class Service {

    _apiBase = 'localhost';

	async postAppointment(body) {
		const res = await fetch(`${this._apiBase}/appointment`,
		{
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json'
			}
	
		});
		
		if (!res.ok) {
			throw new Error(`status: ${res.status}`)
		}

		return await res.json();
	}

	async getClinic () {
		const res = await fetch(`${this._apiBase}/score/clinic`);
		if(!res.ok){
			throw new Error(res.status)
		}
	
		return clinic || res.json();
	}
    async getDoctor (id) {
		const res = await fetch(`${this._apiBase}/doctor/${id}`);
		if(!res.ok){
			throw new Error(res.status)
		}
	
		return appointment || res.json();
	}
} 

/*
{
  "time": Long,
  "doctor": {
    id: Long,
    firstName: String,
    lastName: String,
    sex: SexType
  },
  patient: {
    id: Long,
    firstName: String,
    lastName: String,
    sex: SexType,
    age: Int
  },
  conclusionCode: Int,
  complaints: Set[  Int]
}
*/