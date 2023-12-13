export type BookTypes = {
    title: string,
    type: string,
    code: string,
    price: string,
    download: string,
    isFavorite?: boolean,
    isRecommend?: boolean,
    isLoved?: boolean,
    isLovedState?: boolean, 
    isDownLoaded?: boolean, 
    state: "bought" | "mine" | "none"
  }
  