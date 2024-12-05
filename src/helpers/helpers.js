export function objectToArray(object) {
  return Object.entries(object).map(([key, data]) => ({
    key,
    ...data
  }))
}

export function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)]
}

export function randomizeArray(array) {
  return [].concat(array).sort(() => Math.random() - 0.5);
}

export function removeDuplicates(array) {
  return array.filter((item, index) => array.indexOf(item) === index);
}

export async function getVideos(tag) {
  const response = await fetch('/api/videos', { method: 'POST', next: { revalidate: 60 }})
  const videos = await response.json();
  return objectToArray(videos).filter(video => !tag || video.tags.includes(tag))
}