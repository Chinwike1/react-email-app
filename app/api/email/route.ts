import nodemailer from 'nodemailer'
import { render } from '@react-email/render'
import { NextApiResponse } from 'next';
import { SpringSalesMail } from '../../../react-email-starter/emails/spring-sales'

export async function POST(req: Request, res: NextApiResponse){
  const { name, email } = await req.json()

  const emailHtml = render(SpringSalesMail({ userName: name }));
  
  const transporter = nodemailer.createTransport({
   service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
    tls: {
          rejectUnauthorized: false
      }
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Spring flower sales💐 Don't miss out!",
    html: emailHtml,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error: Could not send email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
}