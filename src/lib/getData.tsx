
const getData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/data.json`, {
      cache: "no-store",
    });
    return res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default getData;
