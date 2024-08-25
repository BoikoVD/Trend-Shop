// The Platzi API is an open source API and the data can be updated by any developer, so we need to make sure that the image URL is in the correct format

export const productImageFormatter = (imageUrl: string): string => {
  if (!imageUrl.includes("i.imgur.com")) {
    return "/no_image.png";
  }

  const updatedImageUrl = imageUrl.includes(".jpeg")
    ? imageUrl.substring(
        imageUrl.indexOf("http"),
        imageUrl.lastIndexOf(".jpeg") + 5
      )
    : imageUrl.includes(".jpg")
      ? imageUrl.substring(
          imageUrl.indexOf("http"),
          imageUrl.lastIndexOf(".jpg") + 4
        )
      : imageUrl.substring(
          imageUrl.indexOf("http"),
          imageUrl.lastIndexOf(".png") + 4
        );

  return updatedImageUrl;
};
