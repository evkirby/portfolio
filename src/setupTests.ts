// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

// Mock matchmedia
// eslint-disable-next-line func-names
window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addListener() {},
    removeListener() {},
  };
};

jest.mock("react-i18next", () => ({
  useTranslation: (_: string, options?: { keyPrefix: string }) => ({
    t: (key: string) => `${options?.keyPrefix || ""}.${key}`,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }),
}));
