import { FC } from 'react'

const Group: FC = ({ children }) => {
  return <div className="flex items-end gap-4">{children}</div>
}

export default Group
