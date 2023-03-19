import { styled } from 'styles/theme'

export const ModalWrapper = styled.div<ModalWrapperType>`
  position: fixed;
  display: ${({ isModal }) => (isModal ? 'flex' : 'none')};
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
`

export const Overlay = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.75;
  z-index: 2;
`

export const Rectangle = styled.div`
  margin: auto;
  padding: 24px;
  min-width: 395px;
  min-height: 311px;
  background: white;
  z-index: 3;
  border-radius: 10px;
`

type ModalWrapperType = {
  isModal: boolean
}
