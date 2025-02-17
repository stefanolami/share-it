import { type NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

export async function POST(request: NextRequest) {
	const { email, name, message } = await request.json()

	const transport = nodemailer.createTransport({
		service: 'Gmail',
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: 'calanca.wrk@gmail.com',
			pass: 'mgxn pzqy hysr emki',
		},
	})

	const mailOptions: Mail.Options = {
		from: 'calanca.wrk@gmail.com',
		to: 'calanca.wrk@gmail.com',
		subject: `ShareIT Contact Form`,
		text: `Messaggio da ${name} (${email}): ${message}`,
	}

	const sendMailPromise = () =>
		new Promise<string>((resolve, reject) => {
			transport.sendMail(mailOptions, function (err) {
				if (!err) {
					resolve('Message sent')
				} else {
					reject(err.message)
				}
			})
		})

	try {
		await sendMailPromise()
		return NextResponse.json({ message: 'Message sent' })
	} catch (err) {
		console.log(err)
		return NextResponse.json({ error: err })
	}
}
