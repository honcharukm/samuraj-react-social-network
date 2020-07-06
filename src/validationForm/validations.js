export const required = value => (value && value.length > 0 ? undefined : 'Required');
export const maxLength = max => value => (value && value.length <= max ? undefined : `Max length is ${max} symbols.`);
export const minLength = min => value => (value && value.length >= min ? undefined : `Min length is ${min} symbols.`);