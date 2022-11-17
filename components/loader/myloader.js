import { BASE_URL } from "../../store/urls";

export default function myImageLoader({ src, width, quality }) {
    return `${BASE_URL}/${src}?w=${width}&q=${quality || 75}`
  }