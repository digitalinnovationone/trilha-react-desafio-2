/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a><br />
        <button onClick={handleRemove} className="remover">Remover</button>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;
