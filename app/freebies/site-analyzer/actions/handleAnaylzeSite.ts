import handlePostBackend from '~/utils/handlePostBackend';

export async function handleAnalyzeSite(url: string) {
  try {
    return await handlePostBackend('analyze-site', url);
  } catch (error: any) {
    return { response: error.message, code: 500 };
  }
}
