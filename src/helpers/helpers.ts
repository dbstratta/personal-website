export const getPrimaryColorHue = (): number => {
  const primaryColorHue: string = getComputedStyle(
    document.body,
  ).getPropertyValue('--primary-color-hue');

  return parseInt(primaryColorHue, 10);
};
