import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const MainHeading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 24px;
  font-weight: bold;
  color: #4c63b6;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 30%;
  box-shadow: 0px 4px 16px 0px #475569;
`

export const TitleInputElement = styled.input`
  border: 0px;
  background-color: transparent;
  text-align: center;
  width: 90%;
`

export const TakeANoteInput = styled.textarea`
  border: 0px;
  background-color: transparent;
  text-align: center;
  width: 90%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`

export const AddButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`

export const AddButton = styled.button`
  background-color: #4c63b6;
  color: #ffffff;
  text-align: center;
  padding: 12px;
  border: 0px;
`
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const EmptyImage = styled.img`
  width: 300px;
`

export const EmptyImageHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 16px;
  color: #334155;
`

export const EmptyImageText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #334155;
`

export const NotesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
  padding-left: 0;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
`
