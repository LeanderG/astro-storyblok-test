import EleventyFetch from "@11ty/eleventy-fetch";

// caches requests in the .cache folder. api should be the same as fetch
export function cachingFetch(resource, options?: any): Promise<Response> {
  return new Promise(async (resolve, reject) => {
    const cachedEleventyFetchResult = await EleventyFetch(resource, {
      duration: "1d",
      type: "text",
      fetchOptions: options,
    }).catch((error) => reject(error));

    const response = new Response(cachedEleventyFetchResult);

    resolve(response);
  });
}
