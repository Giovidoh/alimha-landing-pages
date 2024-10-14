import type { HttpContext } from '@adonisjs/core/http'
import mail from '@adonisjs/mail/services/main'

export default class MailController {
  async becomePartnerMail({ request }: HttpContext) {
    // Get datum
    const senderEmail = request.input('email')
    const senderLastName = request.input('lastName')
    const senderFirstName = request.input('firstName')
    const description = request.input('description')

    // Send email to Alimha
    await mail.send((message) => {
      message
        .to(process.env.SMTP_USERNAME!)
        .from(senderEmail)
        .subject('Demande de partenariat')
        .html(
          `Nom : ${senderLastName} <br /> Prénoms : ${senderFirstName} <br /> Email : ${senderEmail} <br /> Description : ${description}`
        )
    })
  }

  async careerMail({ request }: HttpContext) {
    // Get datum
    const cv = request.file('cv')
    const coverLetter = request.file('coverLetter')
    const job = request.input('job')
    const country = request.input('country')

    // Send email to Alimha
    await mail.send((message) => {
      message
        .to(process.env.SMTP_USERNAME!)
        .subject('Postulation')
        .html(`Emploi : ${job} <br /> Pays : ${country}`)
        .attach(cv?.tmpPath!, { filename: cv?.clientName })
        .attach(coverLetter?.tmpPath!, { filename: coverLetter?.clientName })
    })
  }
}
