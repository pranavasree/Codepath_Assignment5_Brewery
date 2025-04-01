export const fetchBreweries = async () => {
  const response = await fetch("https://api.openbrewerydb.org/v1/breweries");
  const data = await response.json();
  return data;
};

export const fetchBreweryById = async (id) => {
  const response = await fetch(
    `https://api.openbrewerydb.org/v1/breweries/${id}`
  );
  const data = await response.json();
  return data;
};
