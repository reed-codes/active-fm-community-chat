export const trim = (txt, limit = 55) => {
  if (!txt) return txt;
  if (txt.length >= 55) return txt.substr(0, limit) + "...";
  else return txt;
};

export const scrollTop = () => {
  const main = document.querySelector("#main-wrapper");
  if (main) main.scrollTo(0, 0);
};
