import { useState } from 'react';
import gitLogo from '../assets/github.png'
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

import { Container } from './styles';

function App() {

  const [itemAtual, setItemAtual] = useState('');
  const [lista, setLista] = useState([]);

  const buscar = async () => {

    const { data } = await api.get(`users/${itemAtual}`)

    if (data.id) {
      const existe = lista.find(repo => repo.id === data.id);
      if (!existe) {
        setLista(prev => [...prev, data]);
        setItemAtual('')
        console.log(lista)
        return
      } else if (existe) {
        alert('Repositório já adicionado')
      } else {
        alert('Repositório não encontrado.')
      }
    }
  }

  const removerItem = (id) => {
    let listaFiltrada = lista.filter((item) => item.id !== id)
    setLista(listaFiltrada)
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo" />
      <Input value={itemAtual} onChange={(e) => setItemAtual(e.target.value)} />
      <Button onClick={buscar} />
      {lista.map(item => <ItemRepo removerItem={removerItem} item={item} />)}
    </Container>
  )
}
export default App;
