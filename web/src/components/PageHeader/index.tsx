import React from 'react'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css'

interface PageHeaderProps {
  title: string
  description?: string //propriedade opcional
}

const PageHeader: React.FC<PageHeaderProps> = (props) => { //PageHeader componente funcional do react com as propriedades PageHeaderProps
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy"/>
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        { props.description && <p>{props.description}</p> } {/* A segunda parte só é executada se a primeira foor verdadeira */}

        {props.children}
      </div>
    </header>
  )
}

export default PageHeader