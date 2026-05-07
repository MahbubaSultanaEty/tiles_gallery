export async function getTiles() {
    const res = await fetch("https://server-for-tiles-gallery-1.onrender.com/tiles");
    const data = await res.json();
    return data;
 }