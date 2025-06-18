import React, { useEffect } from 'react'

// import { useI18n } from '../hooks/use-i18n'

export const APP_NAME = 'CTL Draft'

interface IProps {
  children: React.ReactNode
  pageKey?: string
}

export default function Page({ children }: IProps) {
  // const { t, i18n } = useI18n()

  // useEffect(() => {
  //   window.document.title = pageKey ? `${t(`${pageKey}.page-title`)} - ${APP_NAME}` : APP_NAME
  // }, [pageKey, t, i18n.language])

  return children
}
