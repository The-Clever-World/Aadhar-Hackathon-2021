
export const eKYC = async (txnNumber, otp, shareCode, uid) => {
    try {
        const response = await fetch("https://stage1.uidai.gov.in/eAadhaarService/api/downloadOfflineEkyc", {
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
                    "txnNumber": txnNumber,
                    "otp": otp,
                    "shareCode": shareCode,
                    "uid": uid
                }
            )
        })

        const data = response.json();

        return data
    } catch (error) {
        console.log(error)
    }
}
