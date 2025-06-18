export interface ITheme {
  palette: {
    primary: string
    secondary: string
    border: string
    green: string
    red: string
    error: string
  }
}

export const theme: ITheme = {
  palette: {
    primary: '#ffffff',
    secondary: '#151515',
    border: '#676767',
    green: '#7aea6e',
    red: '#cf383a',
    error: '#ff0000',
  },
}
