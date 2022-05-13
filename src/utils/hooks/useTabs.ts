import { useState, SyntheticEvent } from 'react';

const useTabs = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleSelectedTab = (event: SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const handleSelectedIndex = (index: number) => {
    setSelectedTab(index);
  };

  const a11yProps = (index: number) => {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  };

  return {
    selectedTab,
    handleSelectedTab,
    handleSelectedIndex,
    a11yProps
  };
};

export default useTabs;