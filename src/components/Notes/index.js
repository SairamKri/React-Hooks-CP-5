import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'

import {
  MainContainer,
  MainHeading,
  CardContainer,
  TitleInputElement,
  TakeANoteInput,
  AddButtonContainer,
  Form,
  AddButton,
  BottomContainer,
  EmptyImage,
  EmptyImageHeading,
  EmptyImageText,
  NotesList,
} from './styledComponents'

const Notes = () => {
  const [titleInput, setTitleInput] = useState('')
  const [noteInput, setNoteInput] = useState('')
  //   const [itemsInput, setItems] = useState({titleInput: '', noteInput: ''})
  const [itemsList, setItemsList] = useState([])

  const onChangeTitleInput = event => setTitleInput(event.target.value)

  const onChangeNoteInput = event => setNoteInput(event.target.value)

  const onSubmitItem = event => {
    event.preventDefault()
    // setItems({titleInput, noteInput})
    const newItem = {
      id: uuidv4(),
      titleInput,
      noteInput,
    }
    setItemsList(prevItem => [...prevItem, newItem])
    setTitleInput('')
    setNoteInput('')
  }

  const NoItemsInTheList = () => (
    <BottomContainer>
      <EmptyImage
        alt="notes empty"
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
      />
      <EmptyImageHeading>No Notes Yet</EmptyImageHeading>
      <EmptyImageText>Notes you add will appear here</EmptyImageText>
    </BottomContainer>
  )

  const ToGetTheList = () => (
    <NotesList>
      {itemsList.map(eachItem => (
        <NoteItem itemDetails={eachItem} key={eachItem.id} />
      ))}
    </NotesList>
  )

  return (
    <MainContainer>
      <MainHeading>Notes</MainHeading>
      <CardContainer>
        <Form onSubmit={onSubmitItem}>
          <TitleInputElement
            type="text"
            value={titleInput}
            placeholder="Title"
            onChange={onChangeTitleInput}
          />
          <TakeANoteInput
            rows="3"
            value={noteInput}
            placeholder="Take a Note..."
            onChange={onChangeNoteInput}
          />
          <AddButtonContainer>
            <AddButton type="submit">Add</AddButton>
          </AddButtonContainer>
        </Form>
      </CardContainer>
      {itemsList.length === 0 ? NoItemsInTheList() : ToGetTheList()}
    </MainContainer>
  )
}

export default Notes
