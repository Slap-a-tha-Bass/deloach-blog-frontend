import { portableTextToHtml } from 'astro-sanity';
import { urlForImage } from './urlForImage';

const customComponents = {
  types: {
    image: ({ value}) => `<img src="${urlForImage(value).url()}" />`
  }
};

export function sanityPortableText(portabletext) {
  return portableTextToHtml(portabletext, customComponents);
}