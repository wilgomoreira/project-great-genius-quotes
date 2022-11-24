const api_url ="https://zenquotes.io/api/quotes/";

async function getapi(url)
{
  const response = await fetch(url);
  var data = await response.json();
  return data
}

export default getapi(api_url);