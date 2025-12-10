import nodemailer from 'nodemailer'

// Create transporter
const createTransporter = () => {
  // Check if email is configured
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn('⚠️  Email configuration not found. Email notifications disabled.')
    return null
  }

  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: process.env.EMAIL_PORT || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })
}

// Send email function
export const sendEmail = async ({ to, subject, html }) => {
  const transporter = createTransporter()

  if (!transporter) {
    console.log('📧 Email skipped (not configured)')
    return { success: false, message: 'Email not configured' }
  }

  try {
    const info = await transporter.sendMail({
      from: `"Himangshu Kamila Portfolio" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
      to,
      subject,
      html
    })

    console.log('✅ Email sent:', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('❌ Email error:', error.message)
    throw error
  }
}

// Verify email configuration
export const verifyEmailConfig = async () => {
  const transporter = createTransporter()

  if (!transporter) {
    return false
  }

  try {
    await transporter.verify()
    console.log('✅ Email server is ready')
    return true
  } catch (error) {
    console.error('❌ Email server error:', error.message)
    return false
  }
}
