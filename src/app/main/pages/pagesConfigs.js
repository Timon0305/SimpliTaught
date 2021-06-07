import ForgotPassword2PageConfig from './auth/forgot-password-2/ForgotPassword2PageConfig';
import ForgotPasswordPageConfig from './auth/forgot-password/ForgotPasswordPageConfig';
import LockPageConfig from './auth/lock/LockPageConfig';
import LoginPageConfig from './auth/login/LoginPageConfig';
import Login2PageConfig from './auth/login-2/Login2PageConfig';
import MailConfirmPageConfig from './auth/mail-confirm/MailConfirmPageConfig';
import Register2PageConfig from './auth/register-2/Register2PageConfig';
import RegisterPageConfig from './auth/register/RegisterPageConfig';
import ResetPasswordPageConfig from './auth/reset-password/ResetPasswordPageConfig';
import ComingSoonPageConfig from './coming-soon/ComingSoonPageConfig';
import Error404PageConfig from './errors/404/Error404PageConfig';
import Error500PageConfig from './errors/500/Error500PageConfig';
import ModernSearchPageConfig from './search/modern/ModernSearchPageConfig';

const pagesConfigs = [
	LoginPageConfig,
	RegisterPageConfig,
	ResetPasswordPageConfig,
	ForgotPasswordPageConfig,
	MailConfirmPageConfig,
	LockPageConfig,
	Login2PageConfig,
	Register2PageConfig,
	ForgotPassword2PageConfig,
	ComingSoonPageConfig,
	Error404PageConfig,
	Error500PageConfig,
	ModernSearchPageConfig
];

export default pagesConfigs;
