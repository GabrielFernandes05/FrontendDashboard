"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Time {
    id: number;
    nome: string;
    cor: string;
    pontos: number;
}

interface TimeListProps {
    onData: (nomes: string[], pontos: number[]) => void;
}

const TimeList: React.FC<TimeListProps> = ({ onData }) => {
    const [times, setTimes] = useState<Time[]>([]);

    useEffect(() => {
        axios.get<Time[]>('http://localhost:8080/times')
            .then(response => {
                setTimes(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the items!', error);
            });
    }, []);

    useEffect(() => {
        let listaPontos: number[] = [];
        let listaNomes: string[] = [];
        times.map(time => {
            listaPontos.push(time.pontos);
            listaNomes.push(time.nome);
        });
        onData(listaNomes, listaPontos);
    }, [times, onData]);

    return (
        <div>
            <h1>Times</h1>
            <ul>
                {times.map(time => (
                    <li key={time.id}>{time.nome}</li>
                ))}
            </ul>
        </div>
    );
};

export default TimeList;
