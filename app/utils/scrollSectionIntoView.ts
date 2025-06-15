export default function scrollSectionIntoView(query: string) {
  document
    .querySelector(query)
    ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
