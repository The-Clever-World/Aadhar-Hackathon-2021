export const fileUpload = async () => {
  try {
    await fetch('https://upload-service-url', {
      method: 'post',
      body: data,
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      headers: {
        'Content-Type': 'multipart/form-data; ',
      },
    })
  } catch (error) {
    console.log(error)
  }
}
