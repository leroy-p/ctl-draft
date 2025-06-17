import React from 'react'
import styled from 'styled-components'

interface IProps {
  children: React.ReactNode
  disabled?: boolean
  onClick?: () => void
}

export default function Button({ children, disabled, onClick }: IProps) {
  return (
    <Container disabled={disabled} onClick={onClick}>
      {children}
    </Container>
  )
}

const Container = styled.button<{ disabled?: boolean }>`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.secondary};
  border: ${({ theme }) => `solid 1px ${theme.palette.primary}`};
  color: ${({ theme }) => theme.palette.primary};
  display: flex;
  flex-direction: row;
  font-size: 18px;
  height: 40px;
  justify-content: center;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  padding: 0 8px;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  text-align: center;
  text-transform: uppercase;
`
