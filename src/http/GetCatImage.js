const GetCatImage = async () => {
  try {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?mime_types=jpg&limit=20"
    )
    if (response.status !== 200) {
      throw new Error(`${response.status} - ${response.statusText}`)
    }
    const data = await response.json()
    return data;
  } catch (err) {
    console.log(`${err.message}`)
  }
}

export default GetCatImage;