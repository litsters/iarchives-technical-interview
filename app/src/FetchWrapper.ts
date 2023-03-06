/**
 * This is wrapper code for the Fetch API, details of which can
 * be found here: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 * 
 * An example of its usage can be found in the useEffect in App.tsx
 * that conducts a health check on the server.
 */

type Params = {
  url: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: any;
  headers?: {
    [id: string]:string;
  }
}

/**
 * Uses the fetch api to do a request. It will always assume it is supposed to 
 * receive JSON and will do its best to convert the response into a JSON object.
 * @param url The URL to query. While running in dev mode, this will automatically proxy to localhost:8080.
 * @param body Optional. The body of the request to send. This will be stringified if it is not already a string.
 * @param method Optional, defaults to GET. The HTTP method to use.
 * @param headers Optional. Map of any headers to use in the request. By default
 * will use Content-Type application/json.
 */
export const doFetch = async <T>({ url, body, method = "GET", headers = {}}:Params):Promise<T | null> => {
  if(typeof body !== "string") body = JSON.stringify(body);

  const response: Response = await fetch(url, {
    body,
    method,
    headers: {
      // default headers
      "Content-Type": "application/json",

      // header overwrites
      ...headers
    }
  });
  
  const contentType = response.headers.get('Content-Type')
  switch(response.status){
    case 204:
      return null;
    case 200:
      if (contentType && contentType.includes('application/json')){
        const text = await response.text();
        if(!text.length) return null;
        const json = JSON.parse(text);
        return json as T;
      } else {
        return null;
      }
    default:
      const code = response.status;
      let message:string = null;
      if(contentType && contentType.includes('application/json')){
        let json;
        try {
          json = await response.json();
        }catch{}
        if (json?.message) {
          message = json.message;
        } else {
          message = JSON.stringify(json)
        }
      }
      if(!message) message = await response.text();
      throw {code, message}
  }
}