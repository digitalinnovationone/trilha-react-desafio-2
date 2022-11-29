import React from 'react'

import { ItemContainer } from './styles';

function ItemRepo({ item, removerItem }) {

  const remover = () => {
    removerItem(item.id)
  }

  return (
    <ItemContainer>
      <h3>{item.name}</h3>
      <br />
      <a href={item.html_url} rel="noreferrer" target="_blank">Ver repositório</a><br />
      <a href='#' onClick={remover} rel="noreferrer" className="remover">Remover</a>
      <hr />
    </ItemContainer>
  )
}

export default ItemRepo;
