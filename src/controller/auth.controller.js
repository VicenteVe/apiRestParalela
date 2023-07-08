export const login = async (req, res) => {
  const log_res = await fetch(
    "https://api.sebastian.cl/UtemAuth/v1/tokens/request",
    {
      method: "POST",
      headers: {
        "X-API-TOKEN": "GRUPO-K-CPYD",
        "X-API-KEY": "168f61c8e912458daec8733f466ccd20",
        "Content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        successUrl: "http://www.google.com",
        failedUrl: "http://www.google.com",
      }),
    }
  ).then((res) => res.json());

  console.log(log_res);

  res.status(200).json({ status: 200, message: "pulento" });
};
