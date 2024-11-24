import gitLogo from '../assets/github.png';
import Button from '../components/button';
import Input from '../components/input';
import ItemRepo from '../components/itemRepo';
import { Container } from './styles';
import { api } from '../services/api';
import { useState } from "react";

const App = () => {
    const [repos, setRepos] = useState([]);
    const [currentRepo, setCurrentRepo] = useState('');


    const handleSearchRepo = async () => {
        const { data } = await api.get(`repos/${currentRepo}`);
        console.log("working");
        if (data.id) {
            const isExist = repos.find((repo) => repo.id === data.id);
            console.log("working");
            if (!isExist) {
                setRepos((prev) => [...prev, data]);
                setCurrentRepo('');
                return;
            }
            else{
                alert('Repositório já adicionado');
                return;
            }
        }
        alert('Repositório não encontrado');
    };

    const handleRemoveRepo = (id) => {
        console.log('Removendo registro', id);
        const newRepos = repos.filter((repo) => repo.id !== id);
        setRepos(newRepos);
        // utilizar filter.
    };

    return (
        <Container>
            <img src={gitLogo} width={72} height={72} alt="Github Octocat logo" />
            <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
            <Button onClick={handleSearchRepo}/>
            {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
        </Container>
    );
};

export default App;
