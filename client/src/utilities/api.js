const headers = {
  "Content-Type": "application/json",
};

export const request = async (URL, method = "GET", body = null) => {
  const options = {
    method,
    headers,
    ...(body && { body: JSON.stringify(body) }),
  };

  try {
    const res = await fetch(URL, options);

    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }

    return await res.json();
  } catch (err) {
    console.error(`Request failed: ${err.message}`);
    throw err;
  }
};
