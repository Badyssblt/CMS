import fs from "fs";
import path from "path";
import cheerio from "cheerio";

export default defineEventHandler(async (event) => {
  const body = await readBody(event); // Lire les données POST
  const { selector, newContent } = body; // `selector` pour cibler l'élément, `newContent` pour le nouveau contenu HTML

  const filePath = path.join(
    process.cwd(),
    "components/headers/basicHeader.vue"
  );

  try {
    // Lire le contenu du fichier
    const data = await fs.promises.readFile(filePath, "utf-8");

    // Charger le contenu dans cheerio
    const $ = cheerio.load(data, { xmlMode: true });

    // Remplacer le contenu de l'élément cible
    $(
      `<li class="editable focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white bg-indigo-600 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded"></li>`
    ).text("test2");

    // Obtenir le contenu modifié
    const modifiedData = $.html();

    // Écrire le contenu modifié de retour dans le fichier
    await fs.promises.writeFile(filePath, modifiedData, "utf-8");

    return { success: true, message: "Fichier modifié avec succès." };
  } catch (err) {
    console.error("Erreur lors de la manipulation du fichier :", err);
    return {
      success: false,
      message: "Erreur lors de la manipulation du fichier.",
      error: err.message,
    };
  }
});
