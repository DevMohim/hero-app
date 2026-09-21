
const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/data.json");
    return res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default getData;
