import { useRef, useEffect } from 'react';

export const useDocumentTitle = (title: string, keepOnUnmount: boolean = true) => {
  const oldTitle = useRef(document.title).current;
  useEffect(() => {
    document.title = title;
  }, [title]);
  useEffect(() => () => {
    if (!keepOnUnmount) {
      document.title = oldTitle;
    }
  });
};

export const useMount = (fuc: Function) => {
  useEffect(() => {
    const ret = fuc();
    return ret;
  }, []);
};
