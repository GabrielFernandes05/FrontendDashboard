"use client";
import Donut from "./graficos";
import { useState } from 'react';
import TimeList from "./Times";

export const usePlacar = () => {
    const [count, setCount] = useState([0, 0, 0]);

    const Somar = (index: number) => {
        if (index >= 0 && index < count.length) {
            const newCount = [...count];
            newCount[index] += 1;
            setCount(newCount);
        }
    };

    const MostrarValores = () => {
        return count
    }

    const Resetar = () => {
        setCount([0, 0, 0])
    }

    return { Somar, count, MostrarValores, Resetar };
};

export function Nav() {
    return (
        <div className="w-full h-16 bg-black p-5 flex flex-row justify-evenly fixed">
            <button className="bg-blue-900 p-3 rounded-md flex items-center justify-center w-24 text-white"><a href="">Inicio</a></button>
            <button className="bg-blue-900 p-3 rounded-md flex items-center justify-center w-24 text-white"><a href="">Contato</a></button>
            <button className="bg-blue-900 p-3 rounded-md flex items-center justify-center w-24 text-white"><a href="">Pagamento</a></button>
            <button className="bg-blue-900 p-3 rounded-md flex items-center justify-center w-24 text-white"><a href="">Local</a></button>
        </div>
    );
}


export function ContainerGraph() {
    const { MostrarValores, count, Somar, Resetar } = usePlacar();
    const [nomes, setNomes] = useState<string[]>([]);
    const [pontos, setPontos] = useState<number[]>([]);

    const handleData = (nomes: string[], pontos: number[]): void => {
        setNomes(nomes);
        setPontos(pontos);
    };

    return (
        <div className="container bg-blue-600 w-full h-full flex flex-col justify-evenly items-center">
            <div className="hidden">

            <TimeList onData={handleData}></TimeList>
            </div>
            <Donut customSeries={pontos}></Donut>
            <Form
                onSomar={Somar}
                onMostrarValores={MostrarValores}
                onResetar={Resetar}
            ></Form>
        </div>
    );
}


export function Footer() {
    return (
        <div className="w-full h-12 bg-black flex justify-center items-center text-white">
            <h1>@Gabriel</h1>
        </div>
    );
}

export function Form({ onSomar, onMostrarValores, onResetar }: { onSomar: (index: number) => void, onMostrarValores: () => any, onResetar: () => void }) {
    return (
        <div className="container flex flex-col justify-evenly items-center px-3">
            <div className="container w-full flex flex-row justify-evenly items-center mb-36">
                <button className="bg-blue-900 p-3 rounded-md flex items-center justify-center w-32 text-white" onClick={() => onSomar(0)}>Somar time azul</button>
                <button className="bg-blue-900 p-3 rounded-md flex items-center justify-center w-32 text-white" onClick={() => onSomar(1)}>Somar time vermelho</button>
                <button className="bg-blue-900 p-3 rounded-md flex items-center justify-center w-32 text-white" onClick={() => onSomar(2)}>Somar time preto</button>
                <div className="hidden">
                    <button className="bg-blue-900 p-3 rounded-md flex items-center justify-center w-24 text-white" onClick={() => console.log(onMostrarValores())}>Mostrar valores!</button>
                </div>
            </div>
            <button className="bg-blue-900 p-3 rounded-md flex items-center justify-center w-32 text-white" onClick={() => onResetar()}>Resetar</button>
        </div>
    );
}
