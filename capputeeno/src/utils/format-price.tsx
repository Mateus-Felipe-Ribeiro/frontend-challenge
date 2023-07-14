export function FormatValue(valorEmCentavos: number){
    const valorEmReais = valorEmCentavos / 100;
    return valorEmReais.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}