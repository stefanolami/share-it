'use server'

type FormData = {
	name: string
	email: string
	message: string
}

export async function sendEmail(data: FormData) {
	const apiEndpoint = 'https://www.shareitwebagency.com/api/email'

	fetch(apiEndpoint, {
		method: 'POST',
		body: JSON.stringify(data),
	})
		.then((res) => res.json())
		.then((response) => {
			console.log(response.message)
		})
		.catch((err) => {
			console.log(err)
		})
}
