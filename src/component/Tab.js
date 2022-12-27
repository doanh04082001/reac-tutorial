import { useState } from "react";
import TabContent from "./TabContent";
import TabNavigation from "./TabNavigation";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("react");
  const handleClickActiveTab = (idTab) => {
    setActiveTab(idTab);
  };
  return (
    <div className="container">
      <div id="tabs" className="tabs-container">
        <TabNavigation
          handleClickActiveTab={handleClickActiveTab}
          activeTab={activeTab}
        />
        <TabContent activeTab={activeTab} />
      </div>
    </div>
  );
};
export default Tab;
