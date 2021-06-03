import create from 'zustand'

const postData = create(set => ({
  images: [],
  caption: '',
  updateImgState: (data) => set(state => ({
    images: data
  }))
}))


export default postData