import nodemailer from 'nodemailer'
import { render } from '@react-email/render'
import { SpringSalesMail } from '../../../react-email-starter/emails/spring-sales'

export async function POST(req: Request) {
  const { name, email } = await req.json()

  const emailHtml = render(SpringSalesMail({ userName: name }))

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  })

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Spring flower sales💐 Don't miss out!",
    html: emailHtml,
  }

  if (!name || !email) {
    return new Response(
      JSON.stringify({ message: 'Please submit your name and email' }),
      { status: 400 }
    )
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error)
      return new Response(
        JSON.stringify({ message: 'Error: Could not send email' }),
        { status: 400 }
      )
    }

    console.log('Email sent: ' + info.response)
    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { status: 200 }
    )
  })
}
