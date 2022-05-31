import { createContext, useContext } from 'react';

// export enum Title {
//     Default = 'Inflação da Gasolina no Brasil',
// }

export type TitleContextType = {
    title: string;
    setTitle: (args: string) => void;
}

export const TitleContext = createContext<TitleContextType>({ title: "", setTitle: title => console.warn('no title provider')});
export const useTitle = () => useContext(TitleContext);