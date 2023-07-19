import React, { createContext, useState, ReactNode } from 'react';
import { MenuItemType } from '../components/Popper/Menu/Menu';
import { ITEMS_NOT_LOGIN } from '../constants/MenuItemConstants';

interface MenuItemContextType {
  itemMenu: Array<MenuItemType>;
  updateMenuItem: (newObject: Array<MenuItemType>) => void;
}
const defaultValue: MenuItemContextType = { itemMenu: [], updateMenuItem: (): any => {} };
const MenuItemContext = createContext<MenuItemContextType>(defaultValue);

interface MenuItemProviderProps {
  children: ReactNode;
}

const MenuItemProvider = ({ children }: MenuItemProviderProps) => {
  const [itemMenu, setMenuItem] = useState<Array<MenuItemType>>(ITEMS_NOT_LOGIN);

  const updateMenuItem = (newObject: Array<MenuItemType>) => {
    setMenuItem(newObject);
  };

  return <MenuItemContext.Provider value={{ itemMenu, updateMenuItem }}>{children}</MenuItemContext.Provider>;
};

export { MenuItemContext, MenuItemProvider };
