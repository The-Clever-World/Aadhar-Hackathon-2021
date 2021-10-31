
export const generateOTP = async (uid, captchaTxnId, captchaValue, transactionId) => {
    try {
        const response = await fetch("https://stage1.uidai.gov.in/unifiedAppAuthService/api/v2/generate/aadhaar/otp", {
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
                    "uidNumber": uid,
                    "captchaTxnId": captchaTxnId,
                    "captchaValue": captchaValue,
                    "transactionId": "MYAADHAAR:" + transactionId
                }
            )
        })

        const data = response.json();

        return data
    } catch (error) {
        console.log(error)
    }
}
