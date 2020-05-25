export const capitalize = (s:string) => {
    if (typeof s !== 'string') return '';
    return s.toLowerCase()
        .split('-')
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
};