import { useCallback, useContext, useEffect, useState } from 'react';
import { createContext } from 'react';

const ScrollContext = createContext({});

export const useScrollContext = () => useContext(ScrollContext);

export default function ScrollContextProvider({ children }) {
  const [offsetY, setOffsetY] = useState(0);
  const [clientHeight, setClientHeight] = useState(1);

  useEffect(() => {
    setClientHeight(document.documentElement.clientHeight);
  }, []);

  const onScroll = useCallback((e) => {
    setOffsetY(e.target.scrollTop);
  }, []);

  const prevent = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <ScrollContext.Provider value={{ offsetY, clientHeight, onScroll }}>
      <div onContextMenu={prevent} onDragStart={prevent}>
        {children}
      </div>
    </ScrollContext.Provider>
  );
}
