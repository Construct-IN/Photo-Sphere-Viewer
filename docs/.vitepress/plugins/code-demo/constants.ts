import ICON_CODEPEN from './icons/codepen.svg?raw';
import ICON_CODESANDBOX from './icons/codesandbox.svg?raw';
import ICON_JSFIDDLE from './icons/jsfiddle.svg?raw';

export type Service = 'codepen' | 'jsfiddle' | 'codesandbox';

export const SERVICES: Record<Service, {
    name: string;
    url: string;
    icon: string;
}> = {
    codepen: {
        // https://blog.codepen.io/documentation/api/prefill
        name: 'Codepen',
        url: 'https://codepen.io/pen/define',
        icon: ICON_CODEPEN,
    },
    jsfiddle: {
        // https://docs.jsfiddle.net/api/display-a-fiddle-from-post
        name: 'JSFiddle',
        url: 'https://jsfiddle.net/api/post/library/pure',
        icon: ICON_JSFIDDLE,
    },
    codesandbox: {
        // https://codesandbox.io/docs/importing#define-api
        name: 'CodeSandbox',
        url: 'https://codesandbox.io/api/v1/sandboxes/define',
        icon: ICON_CODESANDBOX,
    },
};
