const PHONE = '595981000000';

const buildMessage = (message: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

export const whatsappLinks = {
  general: buildMessage('Hola Pietra, quiero asesoría para mi proyecto.'),
  quote: buildMessage('Hola Pietra, quiero cotizar una mesada premium.'),
  materials: (material: string) =>
    buildMessage(`Hola Pietra, quiero más información del material ${material}.`),
  project: (project: string) =>
    buildMessage(`Hola Pietra, quiero algo similar al proyecto: ${project}.`),
  environment: (environment: string) =>
    buildMessage(`Hola Pietra, quiero cotizar para ${environment}.`),
};
