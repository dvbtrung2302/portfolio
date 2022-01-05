export interface IExperience {
  id: number,
  time: string,
  title: string,
  description: string,
  icon: string
}
export interface IProject {
  id: number,
  name: string,
  category: string,
  logo: string,
  description: string,
  technicals?: string[],
  link?: string,
  images: {
    id: number,
    src: string,
    type: string
  }[]
}