import { brailleNumeral } from "../traslators/text-to-braille/brailleNumeral";

const getAccesibleText = (c) => {
  const textual = {
    "(": "Paréntesis abierto.",
    ")": "Paréntesis cerrado.",
    ".": "Punto.",
    ",": "Coma.",
    ":": "Dos puntos.",
    ";": "Punto y coma.",
    "-": "Guión.",
    "¿": "Signo de interrogación abierto",
    "?": "Signo de interrogación cerrado.",
    "¡": "Signo de exclamación abierto.",
    "!": "Signo de exclamación cerrado.",
    '"': "Comillas dobles",
  };

  switch (true) {
    case /[A-Z]/.test(c) == true:
      return c + " mayúscula. " + "." + brailleNumeral(c).join(" ");

    case /[0-9]/.test(c) == true:
      return c + " .signo numerador. " + "." + brailleNumeral(c).join(" ");

    case /[a-z]/.test(c) == true:
      return c + " ." + brailleNumeral(c).join(" ");

    case textual[c] === undefined:
      return c;

    default:
      return textual[c] + " ." + brailleNumeral(c).join(" ");
  }
};

export { getAccesibleText };
