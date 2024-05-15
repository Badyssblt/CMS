export default ({ app }, inject) => {
  // Fonction pour mettre à jour les valeurs dans le stockage local
  const updateValues = (header, main, footer) => {
    localStorage.setItem('headerName', header);
    localStorage.setItem('mainName', main);
    localStorage.setItem('footerName', footer);
  };

  // Fonction pour récupérer les valeurs depuis le stockage local
  const getValues = () => {
    const headerName = localStorage.getItem('headerName') || "basicHeader";
    const mainName = localStorage.getItem('mainName') || "basicMain";
    const footerName = localStorage.getItem('footerName') || "basicFooter";

    return { headerName, mainName, footerName };
  };

  // Injecter les fonctions dans le contexte de l'application Nuxt
  inject('localStorage', {
    updateValues,
    getValues
  });
};
