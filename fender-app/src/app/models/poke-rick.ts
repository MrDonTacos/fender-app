export interface VsData {
    type: string
    status: string
    species: string
    name: string
    image: string
}

export interface GetRandomVS {
  results: VsData[]
}