import http from "../http";

export const getEvents = async () => {
	try {
		const response = await http.get("/events");
		return Promise.resolve(response.data);
	} catch (error: any) {
		console.error(error);
		return Promise.reject(error.response.data);
	}
};

export const getEvent = async (id: string) => {
	try {
		const response = await http.get(`/events/${id}`);
		return Promise.resolve(response.data);
	} catch (error: any) {
		console.error(error);
		return Promise.reject(error.response.data);
	}
};

export const createEvent = async (data: {
	name: string;
	description: string;
	date: string;
	image: string;
	teamSize: string | number;
}) => {
	try {
		const response = await http.post("/events", data);
		return Promise.resolve(response.data);
	} catch (error: any) {
		console.error(error);
		return Promise.reject(error.response.data);
	}
};

export const updateEvent = async (
	id: string,
	data: {
		name?: string;
		description?: string;
		date?: string;
		image?: string;
		teamSize?: string | number;
	}
) => {
	try {
		const response = await http.patch(`/events/${id}`, data);
		return Promise.resolve(response.data);
	} catch (error: any) {
		console.error(error);
		return Promise.reject(error.response.data);
	}
};

export const deleteEvent = async (id: string) => {
	try {
		const response = await http.delete(`/events/${id}`);
		return Promise.resolve(response.data);
	} catch (error: any) {
		console.error(error);
		return Promise.reject(error.response.data);
	}
};
