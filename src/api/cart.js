const apiURL =
  "http://rapido-343-full.websrv01.smartpage.dk/dwapi/ecommerce/carts";
export const createCart = async () => {
  try {
    const response = await fetch(
      `${apiURL}?currencyCode=DKK&countryCode=DK&languageId=LANG1&additionalProp1=SystemName,string,Name,string,Type,string&additionalProp2=SystemName,string,Name,string,Type,string&additionalProp3=SystemName,string,Name,string,Type,string`,
      {
        method: "POST",
      }
    );
    if (!response.ok) {
      throw new Error("Could not complete request.");
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};

export const getCart = async (secret) => {
  try {
    const response = await fetch(`${apiURL}/${secret}`, {
      method: "GET",
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

export const addLine = async (secret, productId) => {
  try {
    const response = await fetch(`${apiURL}/${secret}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `ProductId=${productId}&Quantity=1`,
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
