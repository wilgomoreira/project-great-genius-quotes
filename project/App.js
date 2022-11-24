import React, { useState } from 'react';
import { Container, ImageBook, Sentence, ButtonOpenClose, ButtonText } from './src/styles'
import imageBook from './src/assets/book.png'
import imageBookOpened from './src/assets/bookOpened.png'

import api from './src/api.js'

export default function App() {

  let sentences = api._z
  const [sentence, setSentence] = useState('')
  const [open, setOpen] = useState(false)
  const [img, setImg] = useState(imageBook)

  function changeSituation() {
    if (open) {
      setOpen(false)
      setImg(imageBook)
    }
    else {
      setOpen(true)
      let numRandom = Math.floor(Math.random() * sentences.length);
      let text = ''
      text += ` '${sentences[numRandom].q}' - ${sentences[numRandom].a} `
      setSentence(text);
      setImg(imageBookOpened)
    }
  }
  return (
    <Container>
      <ImageBook source={img} resizeMode="contain" />
      {
        open && <Sentence> {sentence} </Sentence>
      }
      <ButtonOpenClose onPress={() => changeSituation()}>
        {
          open ? <ButtonText> Close </ButtonText> : <ButtonText> Open </ButtonText>
        }
      </ButtonOpenClose>
    </Container>
  );
} 