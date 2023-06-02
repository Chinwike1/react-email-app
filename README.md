### Description

This is an application built with [Next.js](https://nextjs.org/) to create and send React email templates using [React Email](https://react.email) and [Nodemailer](https://nodemailer.com/about/).

### Features

- Next.js 13 (App Router)
- TypeScript
- TailwindCSS
- React Email
- Nodemailer
- Email service: Google Mail.

### Getting Started

First, install the project dependencies:

```bash
npm install:all
```

### Development

Run the the Next.js app, React Email's preview server, or the both:

```bash
  #run root app and email preview server
  npm run dev

  #run root app only
  npm run dev:root

  # run preview server only
  npm run dev:preview
```

The root Next.js app runs on **localhost:3000** while React Email's preview server runs on **localhost:3001**.

You can start creating or editing email templates by modifying files in `react-email-starter/emails`. The page auto-updates as you edit the file.

### Google Mail Setup

To send emails from your Google account, Google requires you to enable 2FA and [generate an application password](https://support.google.com/accounts/answer/185833?hl=en). Follow the steps on that page to create yours and add to your `.env` file.

### Learn More

To learn more about React Email and Next.js, take a look at their documentation:

- [React Email](https://react.email) - a collection of React templates for creating emails.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

<!-- ## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->
