import axios from 'axios'

export const generateCaptcha = async () => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      'https://stage1.uidai.gov.in/unifiedAppAuthService/api/v2/get/captcha',
      {
        langCode: 'en',
        captchaLength: '3',
        captchaType: '2',
      },
      config
    )

    return data
  } catch (error) {
    console.log(error)
  }
}
