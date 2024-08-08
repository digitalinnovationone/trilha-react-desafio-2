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
      <a href={repo.html_url} rel='noreferrer' target='_blank'>Ver Repositório</a> <br/>
      <button className='remover' onClick={handleRemove}>Remover</button>
      {/* <a href='#' rel="noreferrer" className='remover'>Remover</a> */}
      <hr/>
    </ItemContainer>
  )
}

export default ItemRepo;
