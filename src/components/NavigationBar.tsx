import { useState } from 'react'

const base = 'https://sanndy54111.github.io/careers_project/#'
interface ListItemsProps {
  text: string[]
  pages: Record<string, string>
}

export function NavigationBar(props: ListItemsProps) {
  const [items, setItems] = useState(props.text)
  const [pages, setPages] = useState(props.pages)
  return (
    <div className="navbar bg-neutral text-white">
      <div className="navbar-start">
        <div tabIndex={0} className="dropdown">
          <label className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-gray-500 rounded-box w-52t lg:hidden">
            {items.map(item => <li><a href={pages[item] ? `${base}${pages[item]}` : `${base}/#`} className="text-white">{item}</a></li>)}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul tabIndex={0} className="menu menu-horizontal p-0">
          {items.map((item: string) => <li><a href={pages[item] ? `${base}${pages[item]}` : `${base}/#`} className="text-neutral-content hover:bg-base-100 hover:text-white rounded-box m-1">{item}</a></li>)}
        </ul>
      </div>
    </div>
  )
}