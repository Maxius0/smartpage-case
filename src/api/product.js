const apiURL =
  "http://rapido-343-full.websrv01.smartpage.dk/dwapi/ecommerce/products?RepositoryName=Products&QueryName=Products";
export const getProducts = async () => {
  try {
    const response = await fetch(apiURL, {
      method: "POST",
    });
    if (!response.ok) {
      throw new Error("Could not complete request.");
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};
