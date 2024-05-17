export default ({ app }, inject) => {
  const updateValues = (header, main, footer) => {
    localStorage.setItem("headerName", header);
    localStorage.setItem("mainName", main);
    localStorage.setItem("footerName", footer);
    console.log("changé");
  };

  const getValues = () => {
    const headerName = localStorage.getItem("headerName") || "basicHeader";
    const mainName = localStorage.getItem("mainName") || "basicMain";
    const footerName = localStorage.getItem("footerName") || "basicFooter";

    return { headerName, mainName, footerName };
  };

  inject("localStorage", {
    updateValues,
    getValues,
  });
};
