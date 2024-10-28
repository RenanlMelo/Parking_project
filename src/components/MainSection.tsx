import React from 'react'
import { Header } from './Header'
import { CarSpaces } from './CarSpaces'

interface props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  size: number
}

export const MainSection: React.FC<props> = ({ open, setOpen, size }) => {
  return (
    <div>
      <Header open={open} setOpen={setOpen} size={size} />
      <CarSpaces />
    </div>
  )
}
