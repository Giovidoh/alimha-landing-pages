/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const MailController = () => import('#controllers/mail_controller')

router.post('/become-partner-mail', [MailController, 'becomePartnerMail'])
router.post('/career-mail', [MailController, 'careerMail'])
