const TabNavigation = (props) => {
  const { activeTab, handleClickActiveTab } = props;

  const checkActiveTab = (idTab) => {
    let classTab = "tab";
    if (idTab === activeTab) {
      classTab += "active";
    }
    return classTab;
  };

  const handleClickGetTab = (idTab) => {
    handleClickActiveTab(idTab);
  };
  return (
    <div className="tabs">
      <a
        onClick={() => handleClickGetTab("react")}
        className={checkActiveTab("react")}
      >
        Reactjs
      </a>
      <a
        onClick={() => handleClickGetTab("vue")}
        className={checkActiveTab("vue")}
      >
        Vuejs
      </a>
      <a
        onClick={() => handleClickGetTab("angular")}
        className={checkActiveTab("angular")}
      >
        Angular
      </a>
      <a
        onClick={() => handleClickGetTab("svelte")}
        className={checkActiveTab("svelte")}
      >
        Svelte
      </a>
    </div>
  );
};
export default TabNavigation;
