import React from 'react'
import styled from 'styled-components'

interface IProps {
  icon: string
  disabled?: boolean
  onClick?: () => void
}

export default function IconButton({ icon, disabled, onClick }: IProps) {
  return (
    <Container disabled={disabled} onClick={onClick}>
      <img alt="" src={icon} />
    </Container>
  )
}

const Container = styled.button<{ disabled?: boolean }>`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.red};
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  opacity: ${({ disabled }) => (disabled ? '0.3' : '1')};
  padding: 8px 16px;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  text-align: center;

  & > img {
    height: 24px;
    width: 24px;
  }
`
