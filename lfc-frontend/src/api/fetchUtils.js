export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "An error occurred while fetching data");
    }

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
