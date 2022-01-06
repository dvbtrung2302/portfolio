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
export interface IField {
  name: string,
  placeholder?: string,
  disabled?: boolean,
  type?: "text" | "email" | "password" | "textarea",
  rows?: number,
  cols?: number
}
export interface IResponse {
  status: number,
  message: string
}