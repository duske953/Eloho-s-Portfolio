'use server';

import handlePostBackend from '~/utils/handlePostBackend';

export default async function handleAnalyzeOgTags(url: string) {
  try {
    return await handlePostBackend('analyze-og-tags', url);
  } catch (err: any) {
    return { response: err.message, code: 500 };
  }
}
