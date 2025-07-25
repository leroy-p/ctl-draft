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
  background-color: ${({ theme }) => theme.palette.green};
  border-radius: 20px;
  color: ${({ theme }) => theme.palette.secondary};
  display: flex;
  flex-direction: row;
  font-size: 28px;
  font-weight: 700;
  justify-content: center;
  opacity: ${({ disabled }) => (disabled ? '0.3' : '1')};
  padding: 12px 16px 16px 16px;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  text-align: center;
`
