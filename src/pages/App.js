import { useState } from 'react';
import { Container } from './styles';
import {api} from '../services/api'
import Button from '../components/Button/Index';
import gitLogo from '../assets/github.png';
import Input from '../components/Input/Index';
import ItemRepo from '../components/ItemRepo/Index';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    await api.get(`repos/${currentRepo}`)
    .then(response => {
        const {data} = response;

        if(data.id){
          const isExist = repos.find(repo => repo.id === data.id);
          if (!isExist){
            setRepos(prev => [...prev, data]);
            setCurrentRepo('');
          }
        }
    })
    .catch(() => alert('Repositório não encontrado'));
  }

  const handleRemoveRepo = (id) => {
    const remainingRepos = repos.filter(repo => repo.id !== id);
    setRepos(remainingRepos);
  }

  return (
    <Container>
        <img src={gitLogo} width={72} height={72} alt="GitHub Logo"/>
        <Input value={currentRepo} onChange={(event => setCurrentRepo(event.target.value))}/>
        <Button onCLick={handleSearchRepo} />
        {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
