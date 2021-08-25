export const name = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const value = {
  [name.SMALL]: '(max-width: 900px)',
  [name.MEDIUM]: '(min-width: 600px)',
  [name.LARGE]: '(min-width: 900px)',
};

const BREAKPOINTS = [
  {
    name: name.SMALL,
    media: value[name.SMALL],
  },
  {
    name: name.MEDIUM,
    media: value[name.MEDIUM],
  },
  {
    name: name.LARGE,
    media: value[name.LARGE],
  },
];

export default BREAKPOINTS;
