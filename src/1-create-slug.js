// Return a URL-friendly "slug": lowercase with hyphens instead of spaces.
// Return null if the title contains banned characters: "!", "#", "?"
const createSlug = (title) => {
  const bannedSymbols = "!#?"
  const lowercasedTitle = title.toLowerCase().replaceAll(" ", "-")



  if (lowercasedTitle.includes("!#?")) null

  return lowercasedTitle


};

console.log(createSlug("HHHHHH HHH!"))
module.exports = {
  createSlug,
};
