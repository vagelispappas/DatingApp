import { Photo } from "./photo"

export interface Member {
    id: number
    userName: string
    photoUrl: string
    age: number
    knownAs: string
    created: string
    lastActive: string
    genger: any
    introduction: string
    interests: string
    city: string
    photos: Photo[]
  }
  