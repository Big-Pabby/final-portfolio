export type Theme = 'day' | 'night';

export const THEME_STORAGE_KEY = 'va-theme';

/**
 * Runs in <head> before first paint. It uses the visitor's saved choice and
 * defaults to night so the page never flashes the wrong theme.
 */
export const THEME_INIT_SCRIPT = `(function(){var d=document.documentElement;try{var t=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});d.dataset.theme=t==='day'?'day':'night'}catch(e){d.dataset.theme='night'}})();`;
