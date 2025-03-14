export async function getAlbumImages(albumId: string) {
  // 1. List all album files from collections path
  const response = await fetch(
    `https://65.0.170.125.nip.io/api/images?folder=${albumId}`
  );
  const data = await response.json();

  console.log(data.images.length);
  return data.images;
}
