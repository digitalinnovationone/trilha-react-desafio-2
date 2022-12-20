import React from 'react'

import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer>
      <div className='infoRepo'>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
      </div>
      <div className='buttonRepo'>
        <a href={repo.html_url} rel="noreferrer" className='seeRepo' target="_blank">Ver repositório</a>
        <a onClick={handleRemove} href="noreferrer"  rel="noreferrer" className="remover">Remover</a>
      </div>
    </ItemContainer>
  )
}

export default ItemRepo;
