import create from 'zustand'

type postStateTypes = {
  images: string[],
  caption: string,
  updateImgState: (data: string[]) => void 
}

const postData = create<postStateTypes>(set => ({
  images: [],
  caption: '',
  updateImgState: (data) => set(state => ({
    images: data
  }))
}))


export default postData