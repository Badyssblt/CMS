import fs from "fs";
import path from "path";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { componentName, currentComponent } = body;

  const filePath = path.join(
    process.cwd(),
    `components/headers/${componentName}.vue`
  );

  try {
    const data = await fs.promises.readFile(filePath, "utf-8");

    const tempData = `<template>${currentComponent}</template>`;

    await fs.promises.writeFile(filePath, tempData, "utf-8");

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
