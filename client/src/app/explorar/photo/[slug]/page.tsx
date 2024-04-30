import React from 'react'
import Photo from './_photo'
import { getPhoto, getProfileFromPhoto, getSessionInfo } from '@/actions'

export default async function PhotoServer({params} : any) {
    const session = await getSessionInfo();
    const { slug } = params;
    const photo = await getPhoto(slug)
    const author = await getProfileFromPhoto(photo);

  return (
    <Photo photo={photo} session={session} author={author}></Photo>
  )
} 





