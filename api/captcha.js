
export const generateCaptcha = async () => {
  try {

    const response = await fetch("https://stage1.uidai.gov.in/unifiedAppAuthService/api/v2/get/captcha", {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(
        {
          langCode: 'en',
          captchaLength: '3',
          captchaType: '2',
        }
      )
    })

    const data = response.json();

    return data
  } catch (error) {
    console.log(error)
  }
}
