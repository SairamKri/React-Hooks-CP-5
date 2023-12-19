import {BoxContainer, Title, Note} from './styledComponents'

const NoteItem = props => {
  const {itemDetails} = props
  const {titleInput, noteInput} = itemDetails
  return (
    <BoxContainer>
      <Title>{titleInput}</Title>
      <Note>{noteInput}</Note>
    </BoxContainer>
  )
}

export default NoteItem
