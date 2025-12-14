import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Submission: ${data.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <h2 style="color: #0066ff; border-bottom: 2px solid #ffd700; padding-bottom: 10px;">New Contact Form Submission</h2>
        
        <div style="margin: 20px 0;">
          <p style="margin: 10px 0;"><strong style="color: #333;">Name:</strong> ${data.name}</p>
          <p style="margin: 10px 0;"><strong style="color: #333;">Email:</strong> <a href="mailto:${data.email}" style="color: #0066ff;">${data.email}</a></p>
          ${data.phone ? `<p style="margin: 10px 0;"><strong style="color: #333;">Phone:</strong> ${data.phone}</p>` : ''}
          <p style="margin: 10px 0;"><strong style="color: #333;">Subject:</strong> ${data.subject}</p>
        </div>
        
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 0;"><strong style="color: #333;">Message:</strong></p>
          <p style="margin: 10px 0; line-height: 1.6;">${data.message}</p>
        </div>
        
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #666; font-size: 12px;">
          <p>This email was sent from Flight Nest contact form.</p>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
}
