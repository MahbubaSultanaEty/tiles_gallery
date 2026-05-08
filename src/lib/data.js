export async function getTiles() {
    const res = await fetch("https://server-for-tiles-gallery-1.onrender.com/tiles");
    const data = await res.json();
    return data;
}
 
export async function getTileById(id) {
    const res = await fetch(`https://server-for-tiles-gallery-1.onrender.com/tiles/${id}`);
    const data = await res.json();
    return data;
}