import { createContext, useContext } from 'react';

export enum ValueButton {
    Home = 'Ir para as previsões',
    Previsions = 'Ir para a home',
}

export enum ValueLink {
    Home = '/',
    Previsions = '/previsoes',
}

export enum valuePath {
    Home = '/',
    Previsions = '/previsoes',
}


export type TitleContextType = {
    title: string;
    setTitle: (args: string) => void;
}

export type ButtonContextType = {
    value: ValueButton,
    setValue: (ValueButton: ValueButton) => void;
}

export type LinkContextType = {
    link: ValueLink,
    setLink: (ValueLink: ValueLink) => void;
}

export type BackPathnameType = {
    path: valuePath,
    setPath: (valuePath: valuePath) => void;
}

//Exportando context do titulo  
export const TitleContext = createContext<TitleContextType>({ title: "", setTitle: title => console.warn('no title provider')});
export const useTitle = () => useContext(TitleContext);

//Exportando context do valor do botão
export const ButtonValueContext = createContext<ButtonContextType>({ value: ValueButton.Home, setValue: value => console.warn('no value provider')});
export const useValue = () => useContext(ButtonValueContext);

//Exportando context da url
export const LinkContext = createContext<LinkContextType>({ link: ValueLink.Home, setLink: link => console.warn('no link provider')});
export const useLink = () => useContext(LinkContext);

//Exportando context do pathname
export const BackPathnameContext = createContext<BackPathnameType>({ path: valuePath.Home, setPath: path => console.warn('no path provider')});
export const usePath = () => useContext(BackPathnameContext);