import type { FC, PropsWithChildren } from 'react'
import classes from './default-layout.module.css'

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className={classes.container}>{children}</div>
}
