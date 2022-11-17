export default function LocalImageLoader({src, width, quality}) {
    var fileName = src.split("/").pop();
    return `./_next/static/media/${fileName}`;
}