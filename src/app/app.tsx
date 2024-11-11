import type { FC } from 'react'
import { DefaultLayout } from './layouts/default'
import { HomePage } from '@/pages/home'

export const App: FC = () => {
  return (
    <DefaultLayout>
      <HomePage />
    </DefaultLayout>
  )
}
