import { visualizarMaterial } from 'libs/optionsChat';
export const valideteMaterial = (message: string) => {
	const material = message.trim().toUpperCase() as visualizarMaterial;
	
	return (
		material === 'CONSULTAR' ||
		material === 'VISUALIZAR' ||
		material === 'RECOMENDAR' ||
		material === 'VISUALIZAR MATERIAL' ||
		material === 'MOSTRAR MATERIAL' ||
		material === 'CONSULTAR MATERIAL' ||
		material === 'VER MATERIAL' ||
		material === 'RECOMENDAR MATERIAL' ||
		material === 'RECOMENDACION DE MATERIAL'
	);
};
