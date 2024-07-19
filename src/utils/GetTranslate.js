
async function getTranslate(data) {
    const res = await fetch("/api/translate", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({data})
      });
    const db = await res.json();
    console.log(data);
    return db
}

export { getTranslate }